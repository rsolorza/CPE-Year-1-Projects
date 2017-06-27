library IEEE;
use IEEE.STD_LOGIC_1164.ALL;

entity MOX4x1 is
    Port ( W,P,Y,Z : in STD_LOGIC;
           SELL : in STD_LOGIC_VECTOR (1 downto 0);
           PIN_OUT : out STD_LOGIC);
end MOX4x1;



architecture Behavioral of MOX4x1 is

component MOX2x1
    Port ( A : in STD_LOGIC;
           B : in STD_LOGIC;
           SEL : in STD_LOGIC;
           Y : out STD_LOGIC);
end component;

signal s0, s1 : std_logic;

begin
MX1: MOX2x1 port map(A => W, B => P, SEL => SELL(0), Y => s0);
MX2: MOX2x1 port map(A => Y, B => Z, SEL => SELL(0), Y => s1);
MX3: MOX2x1 port map(A => s0, B => s1, SEL => SELL(1), Y => PIN_OUT);


end Behavioral;
