package homework1;

public class ATM {

	private final int pin;
	private int timesChecked;
	private boolean lockAccount;

	public ATM (int password) {
		pin = password;
		timesChecked = 0;
		lockAccount = false;
	}

	public String checkPin (int number) {
		if (lockAccount) 
			return "Your bank card is blocked";
		 else {
			if (number == pin) {
				timesChecked = 0;
				return "Your PIN is correct";
			}
			else {
				timesChecked++;
				if (timesChecked >= 3) {
					lockAccount = true;
					return "Your bank card is blocked";
				}
				return "Your PIN is incorrect";
			}
		}
	}

}
