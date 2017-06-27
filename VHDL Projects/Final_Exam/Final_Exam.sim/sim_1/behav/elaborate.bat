@echo off
set xv_path=C:\\Xilinx\\Vivado\\2017.1\\bin
call %xv_path%/xelab  -wto e1a7ebd8f235497aa22229969e6bf403 -m64 --debug typical --relax --mt 2 -L xil_defaultlib -L secureip --snapshot Driverless_Final_behav xil_defaultlib.Driverless_Final -log elaborate.log
if "%errorlevel%"=="0" goto SUCCESS
if "%errorlevel%"=="1" goto END
:END
exit 1
:SUCCESS
exit 0
