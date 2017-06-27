package lab4;

import java.util.Scanner;

public class ItemSale {
	public static void main(String[] args) {

		Scanner userInput = new Scanner(System.in);
		Invoice invoice = new Invoice();
		while (true) {
			double price = 0;
			int quantity = 0;
			boolean isPet = false;

			System.out.print("Price of Item(s) (-1 to Exit):  ");
			if (userInput.hasNextDouble())
				price = userInput.nextDouble();

			if (price == -1)
				break;

			System.out.print("\nQuantity of Item(s):  ");
			if (userInput.hasNextInt())
				quantity = userInput.nextInt();

			System.out.print("\nIs it a pet? (Y/N)  ");
			if (userInput.hasNext()) {
				if (userInput.next().toUpperCase().equals("Y"))
					isPet = true;
				else
					isPet = false;

				System.out.println();
			}

			invoice.add(new Item(price, isPet, quantity));
		}

		System.out.println("Amount Discounted: " + invoice.getDiscount());
		
		userInput.close();

	}
}
