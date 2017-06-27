package lab5;

import java.util.ArrayList;
import java.util.Scanner;

public class AppointmentTest {

	public static void main(String[] args) {
		ArrayList<Appointment> appointments = new ArrayList<>();
		Scanner userInput = new Scanner(System.in);
		int input = 0;


		while (input != -1) {
			String description = "";
			int year = 0, month = 0, day = 0;
			System.out.println("(1) Enter appointment\n" + "(2) Check appointments on day\n" + "(3) Exit");
			if (userInput.hasNextInt())
				input = userInput.nextInt();

			switch (input) {
			case 1:
				int eventType = 0;
				System.out.println("(1) One Time event?\n" + "(2) Monthly event? \n" + "(3) Daily event?");
				if (userInput.hasNextInt())
					eventType = userInput.nextInt();

				System.out.println("Description of Event: ");
				while (description.equals(""))
					description = userInput.nextLine();

				System.out.println("Enter year: ");
				if (userInput.hasNextInt())
					year = userInput.nextInt();

				System.out.println("Enter month: ");
				if (userInput.hasNextInt())
					month = userInput.nextInt();

				System.out.println("Enter day: ");
				if (userInput.hasNextInt())
					day = userInput.nextInt();

				if (eventType == 1)
					appointments.add(new Onetime(description, month, day, year));
				else if (eventType == 2)
					appointments.add(new Monthly(description, month, day, year));
				else if (eventType == 3)
					appointments.add(new Daily(description, month, day, year));
				else
					System.out.println("Error: invalid type of event");
				break;
			case 2:
				System.out.println("Enter year: ");
				if (userInput.hasNextInt())
					year = userInput.nextInt();

				System.out.println("Enter month: ");
				if (userInput.hasNextInt())
					month = userInput.nextInt();

				System.out.println("Enter day: ");
				if (userInput.hasNextInt())
					day = userInput.nextInt();

				boolean hasAppointment = false;
				if (appointments.size() > 0) {
					for (Appointment a : appointments) {
						if (a.occursOn(year, month, day)) {
							System.out.println(a);
							hasAppointment = true;
						}
					}
				}
				if(!hasAppointment)
					System.out.println("No appointments on that day");

				break;
			case 3:
				input = -1;
				break;
			default:
				System.out.println("Error, invalid input");
				break;
			}

		}
		
		userInput.close();

	}
}
