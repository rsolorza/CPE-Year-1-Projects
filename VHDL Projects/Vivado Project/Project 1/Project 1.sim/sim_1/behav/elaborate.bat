@echo off
set xv_path=C:\\Xilinx\\Vivado\\2017.1\\bin
call %xv_path%/xelab  -wto 49f58597a787468e9f1ac45d5e3ff48a -m64 --debug typical --relax --mt 2 -L xil_defaultlib -L secureip --snapshot Temp_Conversion_Project_behav xil_defaultlib.Temp_Conversion_Project -log elaborate.log
if "%errorlevel%"=="0" goto SUCCESS
if "%errorlevel%"=="1" goto END
:END
exit 1
:SUCCESS
exit 0
