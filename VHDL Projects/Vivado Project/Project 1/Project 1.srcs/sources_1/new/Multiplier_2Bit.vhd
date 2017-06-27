library IEEE;
use IEEE.STD_LOGIC_1164.ALL;

entity and3 is
    Port(I1, I2, I3 : in std_logic; 
         O1 : out std_logic);
end;

architecture and3_str of and3 is
begin 
O1 <= I1 and I2 and I3;
end and3_str;

library IEEE;
use IEEE.STD_LOGIC_1164.ALL;

entity Multiplier_2Bit is
    Port ( A2, B2 : in STD_LOGIC_VECTOR (1 downto 0);
           Result : out STD_LOGIC_VECTOR (3 downto 0));
end Multiplier_2Bit;

architecture Behavioral of Multiplier_2Bit is

component and2 
port(I1,I2 : in std_logic; O1: out std_logic);
end component;

component or2 
port(I1,I2: in std_logic; O1: out std_logic);
end component;

component not2 
port(I1: in std_logic; O1: out std_logic);
end component;

component and3
Port(I1, I2, I3 : in std_logic; 
         O1 : out std_logic);
end component;



signal n0, n1, n2, n3, s0, s1, s3, s4, s5, s6, s7, s8, s9, s10 : std_logic;

begin
NT1: not2 port map(I1 => A2(0), O1 => n0);
NT2: not2 port map(I1 => A2(1), O1 => n1);
NT3: not2 port map(I1 => B2(0), O1 => n2);
NT4: not2 port map(I1 => B2(1), O1 => n3);

-- 1st Bit
AN1: and2 port map(I1 => A2(1), I2 => A2(0), O1 => s0);
AN2: and2 port map(I1 => B2(1), I2 => B2(0), O1 => s1);
AN3: and2 port map(I1 => s0, I2 => s1, O1 => Result(3));

-- Second Bit
AN4: and3 port map(I1 => A2(1), I2 => n0, I3 => B2(1), O1 => s3);
AN5: and3 port map(I1 => A2(1), I2 => B2(1), I3 => n3, O1 => s4);
O1: or2 port map (I1 => s3, I2 => s4, O1 => Result(2));

-- Third bit
AN7: and3 port map(I1 => A2(1), I2 => n3, I3 => B2(0), O1 => s5);
AN8: and3 port map(I1 => A2(1), I2 => n0, I3 => B2(0), O1 => s6);
AN9: and3 port map(I1 => n1, I2 => A2(0), I3 => B2(1), O1 => s7);
AN10: and3 port map(I1 => A2(0), I2 => B2(1), I3 => n3, O1 => s8);
O2: or2 port map(I1 => s5, I2 => s6, O1 => s9);
O3: or2 port map(I1 => s7, I2 => s8, O1 => s10);
O4: or2 port map(I1 => s9, I2 => s10, O1 => Result(1));

-- Last Bit
AN6: and2 port map(I1 => A2(0), I2 => B2(0), O1 => Result(0));

end Behavioral;
