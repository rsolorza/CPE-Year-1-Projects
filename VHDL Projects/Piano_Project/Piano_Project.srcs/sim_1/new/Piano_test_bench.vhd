library IEEE;
use IEEE.STD_LOGIC_1164.ALL;

entity Piano_test_bench is
--  Port ( );
end Piano_test_bench;

architecture Behavioral of Piano_test_bench is
component Piano
    Port ( MHz_100_clk : in STD_LOGIC;
               Octave_in : in STD_LOGIC_VECTOR (12 downto 0);
               Octave_sel : in STD_LOGIC_VECTOR (2 downto 0);
               sound_out : out STD_LOGIC);
end component;

signal clk : STD_LOGIC := '0';
signal octave_enablers : STD_LOGIC_VECTOR (12 downto 0) := "0000000000001";
signal octave_select : STD_LOGIC_VECTOR (2 downto 0) := "111";
signal sound : STD_LOGIC := '0';


begin
UUT: Piano port map (MHz_100_clk => clk, Octave_in => octave_enablers, Octave_sel => octave_select, sound_out => sound);

CLKP: process
begin
    wait for 10ns;
    clk <= not clk;
end process CLKP;

--OCTP: process
--begin
    --wait for 10ns; 
    --octave_enablers(0) <= '1';
--end process OCTP;

--OCTSP: process
--begin
    --wait for 10ns
    --octave_select(0) <= '1';
    --octave_select(1) <= '1';
    --octave_selct(2) <= '1';
--end process OCTSP;


end Behavioral;
