library IEEE;
use IEEE.STD_LOGIC_1164.ALL;

entity Example_5_1 is
    Port ( B0 : in STD_LOGIC;
           B1 : in STD_LOGIC;
           B2 : in STD_LOGIC;
           F : out STD_LOGIC);
end Example_5_1;

architecture Behavioral of Example_5_1 is

begin

--F <= (B2 and not B1 and B0) or (B2 and B1 and not B0) or (B2 and B1 and B0);
F <= (B2 and b0) or (B2 and B1 and not B0);

end Behavioral;
