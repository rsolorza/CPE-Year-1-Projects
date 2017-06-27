@echo off
set xv_path=C:\\Xilinx\\Vivado\\2017.1\\bin
call %xv_path%/xelab  -wto ac7437cffea245608806282d5816b28c -m64 --debug typical --relax --mt 2 -L xil_defaultlib -L secureip --snapshot Octave_State_behav xil_defaultlib.Octave_State -log elaborate.log
if "%errorlevel%"=="0" goto SUCCESS
if "%errorlevel%"=="1" goto END
:END
exit 1
:SUCCESS
exit 0
