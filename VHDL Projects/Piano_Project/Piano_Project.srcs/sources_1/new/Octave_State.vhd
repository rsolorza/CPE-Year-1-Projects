library IEEE;
use IEEE.STD_LOGIC_1164.ALL;
entity and2 is
    Port( I1, I2 : in std_logic;
          O1 : out std_logic);
end;

architecture and2_str of and2 is
begin
O1 <= I1 and I2;
end and2_str;


library IEEE;
use IEEE.STD_LOGIC_1164.ALL;
entity not2 is
    Port( I1 : in std_logic;
          O1 : out std_logic);
end;

architecture not2_str of not2 is
begin
O1 <= not I1;
end not2_str;

library IEEE;
use IEEE.STD_LOGIC_1164.ALL;
entity or2 is
    Port( I1, I2 : in std_logic;
          O1 : out std_logic);
end;

architecture or2_str of or2 is
begin
O1 <= I1 or I2;
end or2_str;


library IEEE;
use IEEE.STD_LOGIC_1164.ALL;

entity Octave_State is
    Port ( Up : in STD_LOGIC;
           clk : in STD_LOGIC;
           Down : in STD_LOGIC;
           reset : in STD_LOGIC;
           F : out STD_LOGIC_VECTOR (2 downto 0));
end Octave_State;

architecture Behavioral of Octave_State is

component JK_Flip_Flop_clear
    Port ( JK : in STD_LOGIC_VECTOR (1 downto 0);
           clk_1 : in STD_LOGIC;
           clr: in STD_LOGIC;
           Q : out STD_LOGIC;
           Qbar : out STD_LOGIC);
end component;           

component Clock_Slowdown
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

component or2 
    port(I1,I2 : in std_logic; O1: out std_logic);
end component;



signal s : std_logic_vector (13 downto 0);
signal q : std_logic_vector (2 downto 0);
signal qb: std_logic_vector (2 downto 0);
signal clks : std_logic_vector (4 downto 0);

begin
CK: Clock_Slowdown port map (I1 => '0', clk_0 => clk, A => clks(0), B => clks(1), C => clks(2), D => clks(3), E => clks(4));



JK0: JK_Flip_Flop_clear port map (JK => s(5 downto 4), clk_1 => clks(4), clr => reset, Q => q(0), Qbar => qb(0));
JK1 : JK_Flip_Flop_clear port map (JK => s(9 downto 8), clk_1 => clks(4), clr => reset, Q => q(1), Qbar => qb(1));
JK2 : JK_Flip_Flop_clear port map (JK => s(13 downto 12), clk_1 => clks(4), clr => reset, Q => q(2), Qbar => qb(2));



-- General Stuff
N0: not2 port map (I1 => Up, O1 => s(0));
N1: not2 port map (I1 => Down, O1 => s(1));

A0: and2 port map (I1 => s(0), I2 => Down, O1 => s(2));
A1: and2 port map (I1 => Up, I2 => s(1), O1 => s(3));

-- JK0 stuff
O0: or2 port map (I1 => s(2), I2 => s(3), O1 => s(4));
s(5) <= s(4);

-- JK1 stuff
A2: and2 port map (I1 => s(2), I2 => qb(0), O1 => s(6));
A3: and2 port map (I1 => s(3), I2 => q(0), O1 => s(7));
O1 : or2 port map (I1 => s(6), I2 => s(7), O1 => s(8));
s(9) <= s(8); 

-- JK2 stuff
A4: and2 port map (I1 => s(6), I2 => qb(1), O1 => s(10));
A5: and2 port map (I1 => s(7), I2 => q(1), O1 => s(11));
O2: or2 port map (I1 => s(2), I2 => s(11), O1 => s(12));
O3: or2 port map (I1 => s(10), I2 => s(11), O1 => s(13));

F <= q;





end Behavioral;
