library IEEE;
use IEEE.STD_LOGIC_1164.ALL;

entity Temp_Conversion_Project is
    Port ( TEMP_IN : in STD_LOGIC_VECTOR (3 downto 0);
           TEMP_SEL : in STD_LOGIC_VECTOR (1 downto 0);
           clk : in STD_LOGIC;
           R : in STD_LOGIC;
           led : out STD_LOGIC_VECTOR (6 downto 0));
end Temp_Conversion_Project;

architecture Behavioral of Temp_Conversion_Project is
-- Decoder can have values: 00, 01, 10; 11 means no output
component Decoder
    Port ( IN0 : in STD_LOGIC;
           IN1 : in STD_LOGIC;
           D0 : out STD_LOGIC;
           D1 : out STD_LOGIC;
           D2 : out STD_LOGIC;
           D3 : out STD_LOGIC);
end component;

component MOX4x1
    Port ( W,P,Y,Z : in STD_LOGIC;
           SELL : in STD_LOGIC_VECTOR (1 downto 0);
           PIN_OUT : out STD_LOGIC);
end component;

component My_Ripple_Carry_Adder 
    Port ( A1 : in STD_LOGIC_VECTOR (3 downto 0);
           B1 : in STD_LOGIC_VECTOR (3 downto 0);
           Cin : in STD_LOGIC;
           SUMf : out STD_LOGIC_VECTOR (3 downto 0);
           Carry_out : out STD_LOGIC);
end component;

component Six_Bit_Register
    Port ( clk0 : in STD_LOGIC;
           R0 : in STD_LOGIC;
           D0 : in STD_LOGIC_VECTOR (5 downto 0);
           Q0 : out STD_LOGIC_VECTOR (5 downto 0));
end component;

component Temperature_Multiplier
    Port ( TEMP_IN : in STD_LOGIC_VECTOR (3 downto 0);
           TEMP_OUT : out STD_LOGIC_VECTOR (3 downto 0));
end component;

    
signal s0, carry : STD_LOGIC; 
signal Data_in, User_in : std_logic_vector (5 downto 0);
signal K_out, F_out, Conversion_factor : std_logic_vector (3 downto 0); 

begin
-- Signal Assignments
User_in(0) <= Temp_in(0);
User_in(1) <= Temp_in(1);
User_in(2) <= Temp_in(2);
User_in(3) <= Temp_in(3);
User_in(4) <= Temp_sel(0);
User_in(5) <= Temp_sel(1);
Conversion_factor(3) <= '0';
Conversion_factor(2) <= '1';
Conversion_factor(1) <= '0';
Conversion_factor(0) <= '1';

-- REGISTER
REG: Six_Bit_Register port map (clk0 => clk, R0 => R, D0 => User_in, Q0 => Data_in);

-- RCA
RCA: My_Ripple_Carry_Adder port map (A1 => Data_in(3 downto 0), B1 => Conversion_factor, Cin => '0', Sumf => K_out, Carry_out => carry);

-- MULTIPLIER
MLT: Temperature_Multiplier port map (TEMP_IN => Data_in(3 downto 0), Temp_out => F_out);

-- DECODER
DEC: Decoder port map (IN0 => Data_in(4), IN1 => Data_in(5), D0 => led(4), D1 => led(5), D2 => led(6), D3 => s0);

-- Selector (Mux)
MX0: MOX4x1 port map(W => Data_in(0), P => K_out(0), Y => F_out(0), Z => '0' , PIN_OUT => led(0), SELL => Data_in(5 downto 4));
MX1: MOX4x1 port map(W => Data_in(1), P => K_out(1), Y => F_out(1), Z => '0' , PIN_OUT => led(1), SELL => Data_in(5 downto 4));
MX2: MOX4x1 port map(W => Data_in(2), P => K_out(2), Y => F_out(2), Z => '0' , PIN_OUT => led(2), SELL => Data_in(5 downto 4));
MX3: MOX4x1 port map(W => Data_in(3), P => K_out(3), Y => F_out(3), Z => '0' , PIN_OUT => led(3), SELL => Data_in(5 downto 4));




end Behavioral;
