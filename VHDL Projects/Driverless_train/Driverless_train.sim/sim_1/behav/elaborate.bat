@echo off
set xv_path=C:\\Xilinx\\Vivado\\2017.1\\bin
call %xv_path%/xelab  -wto 056edaf0c9224cb0ad305c680036576a -m64 --debug typical --relax --mt 2 -L xil_defaultlib -L secureip --snapshot Driverless_train_2017_behav xil_defaultlib.Driverless_train_2017 -log elaborate.log
if "%errorlevel%"=="0" goto SUCCESS
if "%errorlevel%"=="1" goto END
:END
exit 1
:SUCCESS
exit 0
