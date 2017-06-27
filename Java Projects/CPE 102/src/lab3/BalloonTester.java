package lab3;

import java.util.Scanner;

public class BalloonTester {

	
	public static void main (String[] args) {
		Balloon balloon = new Balloon();
		
		System.out.println("Initial volume: " + balloon.getVolume());
		
		Scanner userInput = new Scanner(System.in);
		Double input = -1.0;
		
		while(input != 0) {
			System.out.println("How much do you want to inflate the balloon?\n(Enter 0 to exit)");
			input = userInput.nextDouble();
			balloon.inflate(input);
			System.out.println("The volume of the balloon is: " + balloon.getVolume() + "\n");
		}
		
		userInput.close();
		
	}
}
