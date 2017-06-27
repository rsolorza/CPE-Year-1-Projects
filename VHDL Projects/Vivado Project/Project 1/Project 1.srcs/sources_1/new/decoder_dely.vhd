library IEEE;
use IEEE.STD_LOGIC_1164.ALL;
entity and_04 is 
    Port( I1, I2 : in std_logic;
          O1 : out std_logic);
end;
architecture anddly of and_04 is
begin 
O1 <= I1 and I2 after 4 ns;
end anddly;

library IEEE;
use IEEE.STD_LOGIC_1164.ALL;
entity not_01 is 
    Port( I1: in std_logic;
          O1 : out std_logic);
end;
architecture notdly of not_01 is
begin 
O1 <= not I1 after 1 ns;
end notdly;

library IEEE;
use IEEE.STD_LOGIC_1164.ALL;

entity decoder_dely is
    Port ( IN00 : in STD_LOGIC;
           IN11 : in STD_LOGIC;
           D00 : out STD_LOGIC;
           D01 : out STD_LOGIC;
           D10 : out STD_LOGIC;
           D11 : out STD_LOGIC);
end decoder_dely;

architecture Behavioral of decoder_dely is

component and_04
Port( I1, I2 : in std_logic;
      O1 : out std_logic);
end component;

component not_01
Port( I1 : in std_logic;
      O1 : out std_logic);
end component;

signal s0, s1 : std_logic;

begin
and000: and_04 port map(I1 => IN00, I2 => IN11, O1 => D11);
--NT1: not_01 port map(I1 => IN00, O1 => s0);
--NT2: not_01 port map(I1 => IN11, O1 => s1);
--A1: and_04 port map(I1 => s0, I2 => s1, O1 => D00);
--A2: and_04 port map(I1 => IN00, I2 => s1, O1 => D01);
--A3: and_04 port map(I1 => s0, I2 => IN11, O1 => D10);
--A4: and_04 port map(I1 => IN00, I2 => IN11, O1 => D11);


end Behavioral;
