package homework3;

/*
 * @Author: Ryan Solorzano
 * @Date: 2/2/2017
 * Code written for homework #3
 * Professor Hassal
 */

import java.util.Scanner;

public class AirplaneSeats {

	public static void main(String[] args) {
		Scanner userInput = new Scanner(System.in);
		Airplane airplane = new Airplane(5, 15);
		String input;
		int numPassengers;
		char classPreference;
		boolean preference;
		String seatPreference;
		boolean validInput;

		while (true) {
			input = "";
			numPassengers = 0;
			classPreference = ' ';
			preference = false;
			seatPreference = "";
			validInput = true;

			System.out.println("Enter Command: (add passengers, show seating, quit)");
			while(input.equals("")) {
				if (userInput.hasNext())
					input = userInput.nextLine().toLowerCase();
			}

			if (input.equals("show seating"))
				System.out.println(airplane);

			else if (input.equals("quit"))
				break;

			else if (input.equals("add passengers")) {
				System.out.println("First Class? (Y/N)");
				if (userInput.hasNext())
					classPreference = userInput.next().toLowerCase().charAt(0);

				if (classPreference == 'y')
					preference = true;
				else if (classPreference == 'n')
					preference = false;
				else {
					System.out.println("Error: invalid class input");
					validInput = false;
				}

				System.out.println("How many passengers?");
				if (userInput.hasNextInt() && validInput)
					numPassengers = userInput.nextInt();

				System.out.println("Seating Preference?");
				if (userInput.hasNext()) 
					seatPreference = userInput.next();
				

				if (!seatPreference.toLowerCase().equals("window") && !seatPreference.toLowerCase().equals("center")
						&& !seatPreference.toLowerCase().equals("aisle")) {
					validInput = false;
					System.out.println("Error: invalid seat preference");
				}

				if (validInput)
					System.out.println(airplane.assignSeat(preference, numPassengers, seatPreference));

			} else
				System.out.println("Error: invalid input");
			
		}
		userInput.close();

	}

}
