package lab5;

import java.util.Calendar;

public class Appointment {

	private String description;
	private Calendar date = Calendar.getInstance();

	public Appointment(String details, int month, int day, int year) {
		description = details;
		//Calendar date = Calendar.getInstance();
		date.clear();
		date.set(year, month, day);
	}

	public boolean occursOn(int year, int month, int day) {
		return (date.get(Calendar.YEAR) == year && date.get(Calendar.MONTH) == month
				&& date.get(Calendar.DAY_OF_MONTH) == day);
	}

	@Override
	public String toString() {
		return description + " occcurs on day " + date.get(Calendar.MONTH) + "/" + date.get(Calendar.DAY_OF_MONTH) + "/"
				+ date.get(Calendar.YEAR);
	}

	protected String getDescription() {
		return description;
	}

	protected Calendar getDate() {
		return date;
	}

}
