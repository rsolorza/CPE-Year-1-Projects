package lab10;

public class Course {
	
	private String title; 
	private int units;
	private int grade;
	
	public Course(String title, int units) {
		this.title = title;
		this.units = units;
	}

	protected String getTitle() {
		return title;
	}

	protected int getUnits() {
		return units;
	}

	protected int getGrade() {
		return grade;
	}

}
