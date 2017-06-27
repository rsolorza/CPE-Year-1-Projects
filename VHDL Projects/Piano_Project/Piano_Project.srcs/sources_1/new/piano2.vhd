library IEEE;
use IEEE.STD_LOGIC_1164.ALL;
use IEEE.STD_LOGIC_ARITH.ALL;
use IEEE.STD_LOGIC_UNSIGNED.ALL;

entity piano2 is
    Port ( do : in  STD_LOGIC;
           re : in  STD_LOGIC;
           --me : in  STD_LOGIC;
           --fa : in  STD_LOGIC;
           --so : in  STD_LOGIC;
           --la : in  STD_LOGIC;
           --ti : in  STD_LOGIC;
           clk_8mhz : in  STD_LOGIC; --using the exterrnal clock of 8mhz.
           spek : out  STD_LOGIC);   --o/p connected to the speaker.
end piano2;

architecture pbev of piano2 is
 signal Counter440: integer:= 0;
 signal Counter494: integer:= 0;
 signal temp: integer:= 0;
 signal clk_440hz: std_logic:= '0';
 signal clk_494hz: std_logic:= '0';
begin
 Prescaler440 : process(clk_8mhz) --process to convert 8mhz freq to 440hz.
 begin
        if rising_edge(clk_8mhz) then
            if Counter440 < 18180 then --8mhz/18181 = 440hz
                Counter440 <= Counter440 + 1;
            else
                clk_440hz <= not clk_440hz;
                Counter440 <= 0;
            end if;
        end if;
 end process Prescaler440; --gives o/p clk_440 as sq. wave of 440hz freq.

 Prescaler494 : process(clk_8mhz) --process to convert 8mhz freq to 494hz.
 begin
        if rising_edge(clk_8mhz) then
            if Counter494 < 16192 then --8mhz/16193 = 494hz
                Counter494 <= Counter494 + 1;
            else
                clk_494hz <= not clk_494hz;
                Counter494 <= 0;
            end if;
        end if;
 end process Prescaler494; --gives o/p clk_494 as sq. wave of 494hz freq.

pianoproc : process(do,re,clk_8mhz)
begin

if (do = '1') then
 spek <= clk_440hz; -- speaker gets i/p wave of 440hz.

elsif (re = '1') then
 spek <= clk_494hz; -- speaker gets i/p wave of 494hz.

--elsif (me = '1') then
 --spek <= '1'
 --after 956023 ns; --1/(523 hz) = 1912045ns // (1912045/2) = 956023ns.
 --spek <= '0'
 --after 956023 ns;

--elsif (fa = '1') then --1/(587 hz) = 1703577ns // (1703577/2) = 851789ns.
 --spek <= '1'
 --after 851789 ns;
 --spek <= '0'
 --after 851789 ns;

--elsif (so <= '1') then
--for temp in 0 to 659 loop --loop continues to generate sq. wave of 659hz for 659*(758725*2) ns = 1sec
  -- spek <= '1'
  --after 758725 ns; --1/(659 hz) = 1517450ns // (1517450/2) = 758725ns
  --spek <= '0'
  --after 758725 ns;
--end loop;


--elsif (la <= '1') then
--for temp in 0 to 698 loop --loop continues to generate sq. wave of 698hz for 698*(758725*2) ns = 1sec
 --spek <= '1'
 --after 716332 ns; --1/(698 hz) = 1432664ns // (1432664/2) = 716332ns
 --spek <= '0'
 --after 716332 ns;
--end loop;

--elsif (ti <= '1') then
--for temp in 0 to 784 loop --loop continues to generate sq. wave of 784hz for 784*(637755*2) ns = 1sec
 --spek <= '1'
 --after 637755 ns; --1/(784 hz) = 1275510ns // (1275510/2) = 637755ns
 --spek <= '0'
 --after 637755 ns;
--end loop;

else spek <= '0';

end if;
end process pianoproc;
end pbev;