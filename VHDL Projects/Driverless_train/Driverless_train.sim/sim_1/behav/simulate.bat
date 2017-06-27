@echo off
set xv_path=C:\\Xilinx\\Vivado\\2017.1\\bin
call %xv_path%/xsim Driverless_train_2017_behav -key {Behavioral:sim_1:Functional:Driverless_train_2017} -tclbatch Driverless_train_2017.tcl -log simulate.log
if "%errorlevel%"=="0" goto SUCCESS
if "%errorlevel%"=="1" goto END
:END
exit 1
:SUCCESS
exit 0
