package lab4;

public class Item {
	
	private double cost;
	private boolean isPet;
	private int amount;
	

	public Item(double price, boolean isPet, int quantity) {
		this.cost = price;
		this.isPet = isPet;
		this.amount = quantity;
	}

	public double getCost() {
		return cost;
	}


	public boolean isPet() {
		return isPet;
	}


	public int getAmount() {
		return amount;
	}
}
