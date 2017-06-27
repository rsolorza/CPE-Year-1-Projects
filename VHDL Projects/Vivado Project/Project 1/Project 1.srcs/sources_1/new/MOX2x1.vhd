library IEEE;
use IEEE.STD_LOGIC_1164.ALL;

entity or2 is
    Port(I1, I2 : in std_logic; 
         O1 : out std_logic);
end;

architecture or2_str of or2 is
begin 
O1 <= I1 or I2;
end or2_str;

library IEEE;
use IEEE.STD_LOGIC_1164.ALL;

entity and2 is
    Port(I1, I2 : in std_logic; 
         O1 : out std_logic);
end;

architecture and2_str of and2 is
begin 
O1 <= I1 and I2;
end and2_str;


library IEEE;
use IEEE.STD_LOGIC_1164.ALL;

entity not2 is
    Port(I1 : in std_logic; 
         O1 : out std_logic);
end;

architecture not2_str of not2 is
begin 
O1 <= not I1;
end not2_str;


library IEEE;
use IEEE.STD_LOGIC_1164.ALL;

entity MOX2x1 is
    Port ( A : in STD_LOGIC;
           B : in STD_LOGIC;
           SEL : in STD_LOGIC;
           Y : out STD_LOGIC);
end MOX2x1;

architecture Behavioral of MOX2x1 is

component and2 
port(I1,I2 : in std_logic; O1: out std_logic);
end component;

component or2 
port(I1,I2: in std_logic; O1: out std_logic);
end component;

component not2 
port(I1: in std_logic; O1: out std_logic);
end component;

signal s0, s1, s2 : std_logic;

begin
NT1: not2 port map(I1 => SEL, O1 => s0);
A1: and2 port map(I1 => s0, I2 => A, O1 => s1);
A2: and2 port map(I1 => SEL, I2 => B, O1 => s2);
O1: or2 port map(I1 => s1, I2 => s2, O1 => Y);

end Behavioral;
