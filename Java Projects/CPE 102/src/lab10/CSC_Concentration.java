package lab10;

import java.util.ArrayList;

public class CSC_Concentration {

	private String title; 
	private ArrayList<CSC_Course> courses;
	private int grade;
	
	public String getTitle() {
		String titles = "";
		for(CSC_Course course: courses)
			titles += course + ", ";
		return titles;
	}
	
	public double getGrade() {
		int units = 0;
		double grade = 0;
		for(CSC_Course course : courses) {
			units += course.getUnits();
			grade += (course.getGrade() * course.getUnits());
		}
		return grade / units;
			
	}
	
}
