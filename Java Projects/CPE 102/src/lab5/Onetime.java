package lab5;

public class Onetime extends Appointment{

	
	public Onetime(String details, int month, int day, int year) {
		super(details, month, day, year);
	}

	@Override
	public String toString() {
		return super.toString() + " only";
	}

	
	
	
}
