library IEEE;
use IEEE.STD_LOGIC_1164.ALL;

entity Six_Bit_Register is
    Port ( clk0 : in STD_LOGIC;
           R0 : in STD_LOGIC;
           D0 : in STD_LOGIC_VECTOR (5 downto 0);
           Q0 : out STD_LOGIC_VECTOR (5 downto 0));
end Six_Bit_Register;

architecture Behavioral of Six_Bit_Register is
component My_flip_flop
    Port ( D : in STD_LOGIC;
           clk : in STD_LOGIC;
           R : in STD_LOGIC;
           Q : out STD_LOGIC);
end component;

begin
D1: My_flip_flop port map(D => D0(0), clk => clk0, R => R0, Q => Q0(0));
D2: My_flip_flop port map(D => D0(1), clk => clk0, R => R0, Q => Q0(1));
D3: My_flip_flop port map(D => D0(2), clk => clk0, R => R0, Q => Q0(2));
D4: My_flip_flop port map(D => D0(3), clk => clk0, R => R0, Q => Q0(3));
D5: My_flip_flop port map(D => D0(4), clk => clk0, R => R0, Q => Q0(4));
D6: My_flip_flop port map(D => D0(5), clk => clk0, R => R0, Q => Q0(5));

end Behavioral;
