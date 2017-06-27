library IEEE;
use IEEE.STD_LOGIC_1164.ALL;

entity JK_FF_2017 is
    Port ( JK : in STD_LOGIC_VECTOR (1 downto 0);
           clk : in STD_LOGIC;
           Q : out STD_LOGIC;
           Qbar : out STD_LOGIC);
end JK_FF_2017;

architecture Behavioral of JK_FF_2017 is

begin

jkf: process(JK,clk)
variable temp1, temp2 : std_logic;
begin
if (rising_edge(clk)) then

    case(jk) is
        when "10" => temp1 := '1';
        when "01" => temp1 := '0';
        when "11" => temp1 := not temp1;
        when "00" => temp1 := temp1;

when others => temp1 := '0';


end case;

end if; 
Q <= temp1;
temp2 := not temp1;
QBar <= temp2;
end process jkf;


end Behavioral;
