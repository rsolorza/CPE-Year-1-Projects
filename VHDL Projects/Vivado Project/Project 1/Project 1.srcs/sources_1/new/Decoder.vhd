library IEEE;
use IEEE.STD_LOGIC_1164.ALL;

entity Decoder is
    Port ( IN0 : in STD_LOGIC;
           IN1 : in STD_LOGIC;
           D0 : out STD_LOGIC;
           D1 : out STD_LOGIC;
           D2 : out STD_LOGIC;
           D3 : out STD_LOGIC);
end Decoder;

architecture Behavioral of Decoder is

component and2 
port(I1,I2 : in std_logic; O1: out std_logic);
end component;

component not2 
port(I1: in std_logic; O1: out std_logic);
end component;

signal s0, s1 : std_logic;

begin
NT1: not2 port map(I1 => IN0, O1 => s0);
NT2: not2 port map(I1 => IN1, O1 => s1);
A1: and2 port map(I1 => s0, I2 => s1, O1 => D0);
A2: and2 port map(I1 => IN0, I2 => s1, O1 => D1);
A3: and2 port map(I1 => s0, I2 => IN1, O1 => D2);
A4: and2 port map(I1 => IN0, I2 => IN1, O1 => D3);

end Behavioral;
