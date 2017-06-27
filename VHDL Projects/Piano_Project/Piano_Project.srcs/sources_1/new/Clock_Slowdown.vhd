library IEEE;
use IEEE.STD_LOGIC_1164.ALL;
use IEEE.NUMERIC_STD.ALL;

entity Clock_Slowdown is
    Port ( I1 : in STD_LOGIC;
           clk_0 : in STD_LOGIC;
           A : buffer STD_LOGIC;
           B : buffer STD_LOGIC;
           C : buffer STD_LOGIC;
           D : buffer STD_LOGIC;
           E : buffer STD_LOGIC);
end Clock_Slowdown;

architecture Behavioral of Clock_Slowdown is

begin

    cntr: process(clk_0, I1) is 
    variable temp: unsigned(29 downto 0):= "00"&X"0000000";
    variable result: integer;
    begin
        if (I1 = '0') then 
            if rising_edge(clk_0) then
                result := to_integer(unsigned(temp));
                result := (result + 1) mod 1073741824;
                temp := to_unsigned(result, temp'length);
            end if;
        else temp := "00"&X"0000000";
        end if; 
    A <= temp(29);
    B <= temp(28);
    C <= temp(27);
    D <= temp(26);
    E <= temp(25);
    end process;    

end Behavioral;
