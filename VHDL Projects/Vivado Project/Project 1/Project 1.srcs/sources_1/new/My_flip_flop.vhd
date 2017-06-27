library IEEE;
use IEEE.STD_LOGIC_1164.ALL;

entity My_flip_flop is
    Port ( D : in STD_LOGIC;
           clk : in STD_LOGIC;
           R : in STD_LOGIC;
           Q : out STD_LOGIC);
end My_flip_flop;

architecture Behavioral of My_flip_flop is
begin
    dff: process (D, clk)
    begin
        if (R = '0') then
        Q <= R;
        elsif (rising_edge(clk)) then 
            Q <= D;
        end if; 
end process;


end Behavioral;
