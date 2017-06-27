package lab5;

import java.util.Calendar;

public class Monthly extends Appointment {

	public Monthly(String details, int month, int day, int year) {
		super(details, month, day, year);
	}

	@Override
	public String toString() {
		return super.toString() + " and every month after";
	}

	@Override
	public boolean occursOn(int year, int month, int day) {
		Calendar temp = Calendar.getInstance();
		temp.clear();
		temp.set(year, month, day);
		return ((getDate().get(Calendar.DAY_OF_MONTH) == day) && (getDate().compareTo(temp) <= 0));

	}

}
