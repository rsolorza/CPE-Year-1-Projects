package homework5;

public class BankAccount {

	private int accountNumber;
	private double ballance;
	public static int nextAccountNumber = 111111;
	

	public BankAccount(double money) {
		accountNumber = nextAccountNumber;
		nextAccountNumber++;
		ballance = money;
	}

	public int getAccountNumber() {
		return accountNumber;
	}

	public void setAccountNumber(int accountNumber) {
		this.accountNumber = accountNumber;
	}

	public double getBallance() {
		return ballance;
	}

	public String deposit(double amount) {
		ballance += amount;
		return "Current ballance after deposit: $" + ballance;
	}

	public String withdraw(double amount) {
		if (ballance - amount < 0)
			return "You do not have enough money to withdraw this amount";
		else {
			ballance -= amount;
			return "Current ballance after withdraw: $" + ballance;
		}
	}

	@Override
	public String toString() {
		return String.format("Bank account number: %d\n" + "Ballance: $%.2f", accountNumber, ballance);
	}

}
