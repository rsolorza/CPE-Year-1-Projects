package homework2;

import java.util.ArrayList;

public class Customer {

	private double amountSpent;
	private double discountCounter;
	private ArrayList<Integer> storesVisted;
	private int counter;

	public Customer() {
		amountSpent = 0;
		storesVisted = new ArrayList<Integer>();
		discountCounter = 0;
		counter = 0;
	}

	public double getAmountSpent() {
		return amountSpent;
	}

	public void makePurchase(double amount, int store) {
		if (!storesVisted.contains(store))
			storesVisted.add(store);
		
		if (discountReached()) {
			this.applyDiscount();
			amountSpent += amount - 10;
			discountCounter += amount - 10;
		} else {
			amountSpent += amount;
			discountCounter += amount;
		}
	}

	public boolean discountReached() {
		if (storesVisted.size() >= 3 *(counter + 1) && discountCounter >= 100) {
			System.out.println("Discount Reached!");
			return true;
		}

		else
			return false;
	}
	
	private void applyDiscount() {
		discountCounter -= 100;
		counter++;
		System.out.println("Discount applied");
		//storesVisted.clear();
	}

}
