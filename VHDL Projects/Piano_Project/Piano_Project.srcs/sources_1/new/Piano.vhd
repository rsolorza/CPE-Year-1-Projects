-- 100 Mhz clock

library IEEE;
use IEEE.STD_LOGIC_1164.ALL;
use IEEE.NUMERIC_STD.ALL;
use IEEE.STD_LOGIC_UNSIGNED.ALL;

entity Piano is
    Port ( MHz_100_clk : in STD_LOGIC;
           Octave_in : in STD_LOGIC_VECTOR (12 downto 0);
           Octave_sel : in STD_LOGIC_VECTOR (2 downto 0);
           sound_out : out STD_LOGIC);
end Piano;

architecture Behavioral of Piano is

type notes is 
    array(0 to 12) of integer;

signal notes_counter : notes := (0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
signal octave_counter : notes := (0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
signal octave_count_values : notes := (28409, 26815, 25309, 23889, 22548, 21283, 20088, 18961, 17897, 16892, 15944, 15049, 14205);

signal octave: Integer := 7 - to_integer(unsigned(Octave_sel));
signal octave_clks: STD_LOGIC_VECTOR(12 downto 0);

begin

HIGHTONE: process (MHz_100_clk, Octave_in, octave, notes_counter, octave_count_values, octave_counter) 
    begin
        if(rising_edge(MHz_100_clk)) then
            for i in 0 to 12 loop
                if (Octave_in(i) = '1') then
                    if notes_counter(i) < octave_count_values(i) then       -- 3520 * 28409 = 10MHz (about), 3520 = 440 * (2 ^ 3)
                        notes_counter(i) <= notes_counter(i) + 1;
                    else 
                        notes_counter(i) <= 0;
                        if octave_counter(i) = octave then
                            octave_clks(i) <= not octave_clks(i);
                            octave_counter(i) <= 0;
                        else
                            octave_counter(i) <= octave_counter(i) + 1;
                        end if;
                    end if;
                else octave_clks(i) <= '0';
                end if;
            end loop;
         end if;
end process HIGHTONE;


MERGE_WAVES: process (octave_clks) 
variable temp: STD_LOGIC := '0';
begin
    for i in 0 to 12 loop 
        if octave_clks(i) = '1' then 
            temp := '1';
        end if;
    end loop;
    
    sound_out <= temp;

end process MERGE_WAVES;



end Behavioral;

