library IEEE;
use IEEE.STD_LOGIC_1164.ALL;

entity Driverless_train_2017 is
    Port ( clk : in std_logic;
           Hold : in STD_LOGIC;
           Q_0 : buffer STD_LOGIC_VECTOR(1 downto 0);
           Emergency : in STD_LOGIC;
           F_out : out STD_LOGIC_VECTOR (3 downto 0));
end Driverless_train_2017;

architecture Behavioral of Driverless_train_2017 is

component JK_Flip_Flop_clear
Port ( JK : in STD_LOGIC_VECTOR (1 downto 0);
           clk_1 : in STD_LOGIC;
           clr: in STD_LOGIC;
           Q : out STD_LOGIC;
           Qbar : out STD_LOGIC);
end component;

component Decoder
Port ( IN0 : in STD_LOGIC;
           IN1 : in STD_LOGIC;
           D0 : out STD_LOGIC;
           D1 : out STD_LOGIC;
           D2 : out STD_LOGIC;
           D3 : out STD_LOGIC);
end component;        

component clock_slowdown 
    Port ( I1 : in STD_LOGIC;
           clk_0 : in STD_LOGIC;
           A : buffer STD_LOGIC;
           B : buffer STD_LOGIC;
           C : buffer STD_LOGIC;
           D : buffer STD_LOGIC;
           E : buffer STD_LOGIC);   
end component;

component not2
port(I1: in std_logic; O1: out std_logic);
end component;

component and2 
port(I1,I2 : in std_logic; O1: out std_logic);
end component;

signal s: std_logic_vector(10 downto 0);
signal JK_in0, JK_in1 : STD_LOGIC_VECTOR (1 downto 0) := "00";

begin
CSD: clock_slowdown port map (I1 => '0', clk_0 => clk, A => s(6), B => s(7), C => s(8), D => s(9), E => s(10));

N1: not2 port map(I1 => Hold, O1 => s(0));
A1: and2 port map(I1 => s(2), I2 => s(0), O1 => s(1));

JKMP: process(s)
variable temp0, temp1: STD_LOGIC_VECTOR(1 downto 0) := "00";
begin
    if s(0) = '0' then
        temp0 := "00";
    else
        temp0 := "11";
    end if;
    
    if s(1) = '0' then
        temp1 := "00";
    else 
        temp1 := "11";
    end if;        
    JK_in0 <= temp0;
    JK_in1 <= temp1;
end process;        

JK0: JK_Flip_Flop_clear port map(JK => JK_in0, clk_1 => s(10), clr => Emergency, Q => s(2), Qbar => s(3));
JK1: JK_Flip_Flop_clear port map(JK => JK_in1, clk_1 => s(10), clr => Emergency, Q => s(4), Qbar => s(5));

DC: Decoder port map (IN0 => s(2), IN1 => s(4), D0 => F_out(0), D1 => F_out(1), D2 => F_out(2), D3 => F_out(3));

Q_0(0) <= s(2);
Q_0(1) <= s(4);



end Behavioral;
