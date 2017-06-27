package lab1;

import java.util.Scanner;

public class Travel {

	static Scanner userInput = new Scanner(System.in);
	private static double distance;
	private static double mpg;
	private static double ticketPrice;
	final private static double gasPrice = 4;
	final private static double carMaintenance = .05;

	public static void main(String[] args) {
		System.out.println("Distance to Destination?");
		distance = userInput.nextDouble();

		System.out.println("Cost of Train Ticket?");
		ticketPrice = userInput.nextDouble();

		System.out.println("Fuel Efficiency of Car?");
		mpg = userInput.nextDouble();

		double carCost = ((distance / mpg) * gasPrice) + (carMaintenance * distance);

		if (carCost < ticketPrice)
			System.out.println("It is cheaper to take a car");

		else if (ticketPrice < carCost)
			System.out.println("It is cheaper to take a train");

		else
			System.out.println("The cost is the same for taking a train or a car");
	}
}
