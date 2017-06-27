package lab5;

import java.util.Calendar;

public class Daily extends Appointment {

	public Daily(String details, int month, int day, int year) {
		super(details, month, day, year);
	}

	@Override
	public String toString() {
		return getDescription() + " Occurs daily after " + getDate().get(Calendar.MONTH) + "/"
				+ getDate().get(Calendar.DAY_OF_MONTH) + "/" + getDate().get(Calendar.YEAR);
	}

	@Override
	public boolean occursOn(int year, int month, int day) {
		Calendar temp = Calendar.getInstance();
		temp.clear();
		temp.set(year, month, day);
		return (getDate().compareTo(temp) <= 0);
	}

}
