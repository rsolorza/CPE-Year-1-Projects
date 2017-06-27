package lab4;

import java.util.ArrayList;

public class Invoice {

	private ArrayList<Item> invoice = new ArrayList<Item>();

	public void add(Item anItem) {
		invoice.add(anItem);
	}

	public ArrayList<Item> getList() {
		return invoice;
	}

	public double getDiscount() {
		double petCost = 0;
		double itemsCost = 0;
		int counter = 0;

		for (Item i : invoice) {
			if (i.isPet())
				petCost += i.getCost() * i.getAmount();
			else {
				itemsCost += i.getCost() * i.getAmount();
				counter += i.getAmount();
			}
		}

		if (petCost > 0 && counter >= 5)
			return itemsCost * .2;
		else
			return 0;
	}
}
