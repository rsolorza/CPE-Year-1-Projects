library IEEE;
use IEEE.STD_LOGIC_1164.ALL;

entity Temperature_Multiplier is
    Port ( TEMP_IN : in STD_LOGIC_VECTOR (3 downto 0);
           TEMP_OUT : out STD_LOGIC_VECTOR (3 downto 0));
end Temperature_Multiplier;

architecture Behavioral of Temperature_Multiplier is
component and2 is 
port(I1, I2 : in std_logic; O1: out std_logic);    
end component;

component or2 
port(I1,I2: in std_logic; O1: out std_logic);
end component;

component not2 
port(I1: in std_logic; O1: out std_logic);
end component;

signal s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14, s15, s16, s17, s18, s19, s20, s21, s22, s23, s24, s25, s26, s27, s28, s29, s30, s31, s32, s33, s34, s35, no0, no1, no2, no3 : std_logic;

begin
n0 : not2 port map (I1 => TEMP_IN(0), O1 => no0);
n1 : not2 port map(I1 => TEMP_IN(1), O1 => no1);
n2 : not2 port map(I1 => TEMP_IN(2), O1 => no2);
n3 : not2 port map(I1 => TEMP_IN(3), O1 => no3);
-- ****

a0 : and2 port map(I1 => no0, I2 => no1, O1 => s0); 
a1 : and2 port map(I1 => no2, I2 => TEMP_IN(3), O1 => s1); 
a2 : and2 port map (I1 => s1, I2 => s0, O1 => s2); 

a3 : and2 port map (I1 => TEMP_IN(2), I2 => no3, O1 => s3);
a4 : and2 port map (I1 => no0, I2 => s3, O1 => s4);

a5 : and2 port map (I1 => no2, I2 => no3, O1 => s5);
a6 : and2 port map (I1 => TEMP_IN(0), I2 => s5, O1 => s6);

o1 : or2 port map (I1 => s2, I2 => s4, O1 => s7);
o2 : or2 port map (I1 => s7, I2 => s6, O1 => TEMP_OUT(0));
--***

a12: and2 port map (I1 => s3, I2 => s0, O1 => s13);

a14: and2 port map (I1 => TEMP_IN(1), I2 => s5, O1 => s15);

a15: and2 port map (I1 => no3, I2 => TEMP_IN(1), O1 => s16);
a16: and2 port map (I1 => TEMP_IN(0), I2 => s16, O1 => s17);

o3: or2 port map (I1 => s2, I2 => s13, O1 => s18);
o4: or2 port map (I1 => s15, I2 => s17, O1 => s19);
o5: or2 port map (I1 => s18, I2 => s19, O1 => TEMP_OUT(1));
--***
a17: and2 port map(I1 => TEMP_IN(3), I2 => no2, O1 => s20);
a19: and2 port map(I1 => s20, I2 => s0, O1 => s22);

a21: and2 port map(I1 => s3, I2 => TEMP_IN(1), O1 => s24);

a23: and2 port map(I1 => s3, I2 => TEMP_IN(0), O1 => s26);      

o6: or2 port map(I1 => s22, I2 => s24, O1 => s27);
o7: or2 port map(I1 => s27, I2 => s26, O1 => TEMP_OUT(2));
--***
a27: and2 port map(I1 => no0, I2 => TEMP_IN(1), O1 => s29);
a28: and2 port map(I1 => s20, I2 => s29, O1 => s30);

a30: and2 port map(I1 => TEMP_IN(0), I2 => no1, O1 => s32);
a31: and2 port map(I1 => s20, I2 => s32, O1 => s33);

o8: or2 port map(I1 => s30, I2 => s33, O1 => TEMP_OUT(3));
end Behavioral;
