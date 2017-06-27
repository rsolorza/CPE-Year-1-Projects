package homework5;

public class CheckingAccount extends BankAccount {

	private double interestRate;
	private double minBallance;
	private double serviceChargeAmount;

	public CheckingAccount(double money, double interestRate, double minimumBallance, double serviceCharge) {
		super(money);
		this.interestRate = interestRate;
		this.minBallance = minimumBallance;
		this.serviceChargeAmount = serviceCharge;
	}

	public double getInterestRate() {
		return interestRate;
	}

	public void setInterestRate(double interestRate) {
		this.interestRate = interestRate;
	}

	public double getMinBallance() {
		return minBallance;
	}

	public void setMinBallance(double minBallance) {
		this.minBallance = minBallance;
	}

	public double getServiceCharges() {
		return serviceChargeAmount;
	}

	public void setServiceCharges(double serviceChargeAmount) {
		this.serviceChargeAmount = serviceChargeAmount;
	}

	public void postInterest() {
		deposit(getBallance() * interestRate);
	}

	public boolean isBelowMinimumBallance() {
		return getBallance() < minBallance;
	}

	public String writeCheck(double amount, BankAccount account) {
		if (getBallance() - amount > 0) {
			withdraw(amount);
			account.deposit(amount);
			return String.format("$%.2f deposited into account %s", amount, account.getAccountNumber());
		} else {
			return "There is not enough money to withdraw this amount";
		}
	}

	// TODO: check to see if this is necessary
	@Override
	public String withdraw(double amount) {
		return super.withdraw(amount);
	}

	@Override
	public String toString() {
		return super.toString() + String.format(
				"\nInterest Rate: %.2f" + "\n" + "Minimum required Ballance: $%.2f\n" + "Serivce Charges: %.2f",
				interestRate * 100, minBallance, serviceChargeAmount);
	}

}
