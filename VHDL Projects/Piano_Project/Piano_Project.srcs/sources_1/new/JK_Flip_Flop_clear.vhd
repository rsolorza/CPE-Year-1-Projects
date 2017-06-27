library IEEE;
use IEEE.STD_LOGIC_1164.ALL;

entity JK_Flip_Flop_clear is
    Port ( JK : in STD_LOGIC_VECTOR (1 downto 0);
           clk_1 : in STD_LOGIC;
           clr: in STD_LOGIC;
           Q : out STD_LOGIC;
           Qbar : out STD_LOGIC);
end JK_Flip_Flop_clear;

architecture Behavioral of JK_Flip_Flop_clear is

begin

jkf: process(JK, clk_1, clr)
variable temp1 : std_logic;
begin
if (clr = '1') then
    temp1 := '0';

elsif (rising_edge(clk_1)) then

    case(jk) is
        when "10" => temp1 := '1';
        when "01" => temp1 := '0';
        when "11" => temp1 := not temp1;
        when "00" => temp1 := temp1;
        when others => temp1 := '0';
    end case;

end if; 
Q <= temp1;
QBar <= not temp1;
end process jkf;


end Behavioral;
