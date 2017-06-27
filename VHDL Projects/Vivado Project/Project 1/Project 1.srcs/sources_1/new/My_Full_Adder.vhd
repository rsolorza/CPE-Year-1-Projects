library IEEE;
use IEEE.STD_LOGIC_1164.ALL;

entity My_Full_Adder is
    Port ( A, B, C : in STD_LOGIC;
           CARRY, SUM : out STD_LOGIC);
end My_Full_Adder;

architecture Behavioral of My_Full_Adder is

begin

SUM <= (A and not B and not C) or (B and not C and not A) or (C and not B and not A) or (C and B and A);
CARRY <= (A and B) or (A and C) or (B and C);


end Behavioral;
