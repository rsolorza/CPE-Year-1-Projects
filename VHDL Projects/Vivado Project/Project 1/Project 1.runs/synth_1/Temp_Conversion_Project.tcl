# 
# Synthesis run script generated by Vivado
# 

set_param xicom.use_bs_reader 1
create_project -in_memory -part xc7a35tcpg236-1

set_param project.singleFileAddWarning.threshold 0
set_param project.compositeFile.enableAutoGeneration 0
set_param synth.vivado.isSynthRun true
set_property webtalk.parent_dir {C:/Users/rhino/Desktop/Vivado Project/Project 1/Project 1.cache/wt} [current_project]
set_property parent.project_path {C:/Users/rhino/Desktop/Vivado Project/Project 1/Project 1.xpr} [current_project]
set_property default_lib xil_defaultlib [current_project]
set_property target_language Verilog [current_project]
set_property ip_cache_permissions disable [current_project]
read_vhdl -library xil_defaultlib {
  {C:/Users/rhino/Desktop/Vivado Project/Project 1/Project 1.srcs/sources_1/new/Decoder.vhd}
  {C:/Users/rhino/Desktop/Vivado Project/Project 1/Project 1.srcs/sources_1/new/MOX2x1.vhd}
  {C:/Users/rhino/Desktop/Vivado Project/Project 1/Project 1.srcs/sources_1/new/MOX4x1.vhd}
  {C:/Users/rhino/Desktop/Vivado Project/Project 1/Project 1.srcs/sources_1/new/My_Full_Adder.vhd}
  {C:/Users/rhino/Desktop/Vivado Project/Project 1/Project 1.srcs/sources_1/new/My_Ripple_Carry_Adder.vhd}
  {C:/Users/rhino/Desktop/Vivado Project/Project 1/Project 1.srcs/sources_1/new/My_flip_flop.vhd}
  {C:/Users/rhino/Desktop/Vivado Project/Project 1/Project 1.srcs/sources_1/new/Six_Bit_Register.vhd}
  {C:/Users/rhino/Desktop/Vivado Project/Project 1/Project 1.srcs/sources_1/new/Temperature_Multiplier.vhd}
  {C:/Users/rhino/Desktop/Vivado Project/Project 1/Project 1.srcs/sources_1/new/Temp_Conversion_Project.vhd}
}
# Mark all dcp files as not used in implementation to prevent them from being
# stitched into the results of this synthesis run. Any black boxes in the
# design are intentionally left as such for best results. Dcp files will be
# stitched into the design at a later time, either when this synthesis run is
# opened, or when it is stitched into a dependent implementation run.
foreach dcp [get_files -quiet -all -filter file_type=="Design\ Checkpoint"] {
  set_property used_in_implementation false $dcp
}
read_xdc {{C:/Users/rhino/Desktop/Vivado Project/Project 1/Project 1.srcs/constrs_1/new/Ex5.xdc}}
set_property used_in_implementation false [get_files {{C:/Users/rhino/Desktop/Vivado Project/Project 1/Project 1.srcs/constrs_1/new/Ex5.xdc}}]


synth_design -top Temp_Conversion_Project -part xc7a35tcpg236-1


write_checkpoint -force -noxdef Temp_Conversion_Project.dcp

catch { report_utilization -file Temp_Conversion_Project_utilization_synth.rpt -pb Temp_Conversion_Project_utilization_synth.pb }