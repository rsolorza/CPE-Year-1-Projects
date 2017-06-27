library IEEE;
use IEEE.STD_LOGIC_1164.ALL;
use IEEE.NUMERIC_STD.ALL;

entity Piano_Final is
  Port ( oct_up : in std_logic;
         oct_down: in std_logic;
         clk_100MHz: in std_logic;
         clr : in std_logic;
         Octave_in : in STD_LOGIC_VECTOR (12 downto 0);
         sound_out : out STD_LOGIC_VECTOR(12 downto 0);
         led : out STD_LOGIC_VECTOR(2 downto 0));
end Piano_Final;

architecture Behavioral of Piano_Final is

component Octave_State
    Port ( Up : in STD_LOGIC;
           clk : in STD_LOGIC;
           Down : in STD_LOGIC;
           reset : in STD_LOGIC;
           F : out STD_LOGIC_VECTOR (2 downto 0));
end component;

type notes is 
    array(0 to 12) of integer;

signal octave_count_values : notes := (28409, 26815, 25309, 23889, 22548, 21283, 20088, 18961, 17897, 16892, 15944, 15049, 14205);
signal notes_counter : notes := (0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
signal octave_counter : notes := (0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

signal high_note_clks: STD_LOGIC_VECTOR(12 downto 0) := "0000000000000";
signal output_clks: STD_LOGIC_VECTOR(12 downto 0) := "0000000000000";
signal s0 : std_logic_vector(2 downto 0);

begin
OCT: Octave_State port map(Up => oct_up, clk => clk_100MHz, Down => oct_down, reset => clr, F => s0);

CLK_GEN: process (notes_counter, octave_count_values, clk_100MHz)
begin
    if rising_edge(clk_100MHz) then
        for i in 0 to 12 loop
            if notes_counter(i) < octave_count_values(i) then       -- 3520 * 28409 = 10MHz (about), 3520 = 440 * (2 ^ 3)
                notes_counter(i) <= notes_counter(i) + 1;
            else 
                notes_counter(i) <= 0;
                high_note_clks(i) <= not high_note_clks(i);
            end if;
        end loop;
    end if;

end process;

OCT_CNT: process (s0, high_note_clks, Octave_in, clk_100MHz, notes_counter, octave_counter)
variable temp: std_logic_vector(12 downto 0) := "0000000000000";
begin
    if rising_edge(clk_100MHz) then
        for i in 0 to 12 loop
            if (notes_counter(i) = 0) then
                if (octave_counter(i) = 2 ** (7 - to_integer(unsigned(s0)))) then
                    octave_counter(i) <= 0;
                    output_clks(i) <= not output_clks(i);
                    if(Octave_in(i) = '1') then
                        temp(i) := output_clks(i);
                    end if;
                else
                    octave_counter(i) <= octave_counter(i) + 1;
                end if;
        
            end if;
            --if (Octave_in(i) = '1') then
                --if (notes_counter(i) = 0 then)
                    --temp(i) := output_clks(i);
                --end if;
            --end if;
        end loop;
    end if;
    sound_out <= temp;
    
end process;

led <= s0;

end Behavioral;
