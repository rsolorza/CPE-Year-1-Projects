package homework5;

public class SavingsAccount extends BankAccount {

	private double interestRate;

	public SavingsAccount(double money, double interest) {
		super(money);
		interestRate = interest;
	}

	public double getInterestRate() {
		return interestRate;
	}

	public void setInterestRate(double interestRate) {
		this.interestRate = interestRate;
	}

	public void postInterest() {
		deposit(getBallance() * interestRate);
	}
	
	@Override
	public String withdraw(double amount) {
		return super.withdraw(amount);
	}

	@Override
	public String toString() {
		return super.toString() + "\nInterest Rate: % " + interestRate * 100;
	}
	
	

}
