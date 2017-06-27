package homework1;

import java.util.Scanner;


public class ATMtester {	
	
	public static void main(String[] args) {
		Scanner userInput = new Scanner(System.in);
		ATM atm = new ATM(1234);
		int input = 0;
		
		
		for(int i = 0; i < 3; i++){
			System.out.println("Enter Password:  ");
			input = userInput.nextInt();
			
			String output = atm.checkPin(input);
			
			System.out.println(output + "\n");
		
			if(output.equals("Your PIN is correct")) 
				break;
			
		}
		
		System.out.print("Exiting.... ");
		userInput.close();
	}
	
	
}
