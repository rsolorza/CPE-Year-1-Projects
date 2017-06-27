package lab6;

import java.util.GregorianCalendar;

public class Sale {
	
	private String mName;
	private String mCategory;
	private double mCost;
	private GregorianCalendar mDate;
	
	public Sale(String name, String category, double cost, int month, int day, int year) {
		mName = name;
		mCategory = category;
		mCost = cost;
		mDate = new GregorianCalendar(year, month, day);
	}

	public String getName() {
		return mName;
	}

	public String getCategory() {
		return mCategory;
	}

	public double getCost() {
		return mCost;
	}

	public GregorianCalendar getDate() {
		return mDate;
	}
	
	






}
