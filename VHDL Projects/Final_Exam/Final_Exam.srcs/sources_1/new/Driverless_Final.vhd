library IEEE;
use IEEE.STD_LOGIC_1164.ALL;

entity Driverless_Final is
    Port ( clr : in STD_LOGIC;
           clk : in STD_LOGIC;
           x : in STD_LOGIC_VECTOR (1 downto 0);
           y : buffer STD_LOGIC_VECTOR (1 downto 0);
           yb : buffer STD_LOGIC_VECTOR (1 downto 0);
           Z1 : out STD_LOGIC_VECTOR (1 downto 0);
           Z2 : out STD_LOGIC);
end Driverless_Final;

architecture Behavioral of Driverless_Final is

component JK_Flip_Flop_clear
    Port ( JK : in STD_LOGIC_VECTOR (1 downto 0);
           clk_1 : in STD_LOGIC;
           clr: in STD_LOGIC;
           Q : out STD_LOGIC;
           Qbar : out STD_LOGIC);
end component;

component clock_slowdown
Port ( I1 : in STD_LOGIC;
           clk_0 : in STD_LOGIC;
           A : buffer STD_LOGIC;
           B : buffer STD_LOGIC;
           C : buffer STD_LOGIC;
           D : buffer STD_LOGIC;
           E : buffer STD_LOGIC);
end component;



signal jk_0 : std_logic_vector (1 downto 0):= "00";
signal jk_1 : std_logic_vector (1 downto 0):= "00";
signal s : std_logic_vector (5 downto 0) := "001010";
signal clks: std_logic_vector (5 downto 0);
begin
CK: clock_slowdown port map(I1 => '0', clk_0 => clk, A=> clks(0), B => clks(1), C => clks(2), D => clks(3), E=> clks(4));

-- JK0 section
jk_0(0) <= not x(1) or x(0);
jk_0(1) <= not x(1) or x(0);

-- JK1 section
jk_1(0) <= (x(1) and not x(0)) or (x(1) and s(0)) or (not x(1) and x(0) and s(1)) or (not x(1) and not x(0) and s(0));
jk_1(1) <= (x(1) and not x(0)) or (x(1) and s(0)) or (not x(1) and x(0) and s(1)) or (not x(1) and not x(0) and s(0));

-- Flip flop section
JK0: JK_Flip_Flop_clear port map(JK => jk_0, clk_1 => clks(4), clr => clr, Q => s(0), Qbar => s(1));
JK1: JK_Flip_Flop_clear port map(JK => jk_1, clk_1 => clks(4), clr => clr, Q => s(2), Qbar => s(3));


-- Z0 section
Z1(0) <= s(0);

-- Z1 section
Z1(1) <= s(2);

-- Z2 section
Z2 <= not x(1) and x(0); 

y(0) <= s(0);
yb(0) <= s(1);
y(1) <= s(2);
yb(1) <= s(3);


end Behavioral;
