library IEEE;
use IEEE.STD_LOGIC_1164.ALL;


entity My_Ripple_Carry_Adder is
    Port ( A1 : in STD_LOGIC_VECTOR (3 downto 0);
           B1 : in STD_LOGIC_VECTOR (3 downto 0);
           Cin : in STD_LOGIC;
           SUMf : out STD_LOGIC_VECTOR (3 downto 0);
           Carry_out : out STD_LOGIC);
end My_Ripple_Carry_Adder;

architecture Behavioral of My_Ripple_Carry_Adder is
component My_Full_Adder
    Port ( A, B, C : in STD_LOGIC;
           CARRY, SUM : out STD_LOGIC);
end component;

signal s0, s1, s2 : STD_LOGIC;

begin
FA0: My_Full_Adder port map(A => A1(0), B => B1(0), C => Cin, CARRY => s0, SUM => SUMf(0));
FA1: My_Full_Adder port map(A => A1(1), B => B1(1), C => s0, CARRY => s1, SUM => SUMf(1));
FA2: My_Full_Adder port map(A => A1(2), B => B1(2), C => s1, CARRY => s2, SUM => SUMf(2));
FA3: My_Full_Adder port map(A => A1(3), B => B1(3), C => s2, CARRY => Carry_out, SUM => SUMf(3));

end Behavioral;
