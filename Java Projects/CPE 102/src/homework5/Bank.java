package homework5;

import java.util.ArrayList;


public class Bank {

	public static void main(String[] args) {
		ArrayList<BankAccount> accounts = new ArrayList<BankAccount>();
		accounts.add(new BankAccount(50000));
		accounts.add(new CheckingAccount(1000, .001, 100, 10));
		accounts.add(new SavingsAccount(10000, .002));
		
		System.out.println(accounts);
		
		System.out.println("\n\n");
		
		System.out.println("**Account 111112 writing $100 check to acount 111111");
		System.out.println(((CheckingAccount) accounts.get(1)).writeCheck(100, accounts.get(0)));
		System.out.println("Account 111111 new ballance: ");
		System.out.println(accounts.get(0).getBallance());
		System.out.println();
		
		System.out.println("**Account 111113 attempts to withdrawl too much money");
		System.out.println(accounts.get(2).withdraw(10001));
		System.out.println();
		
		System.out.println("**Adding interest to account 111112");
		System.out.println("**Before Interest");
		System.out.println(accounts.get(1).getBallance());
		((CheckingAccount) accounts.get(1)).postInterest();
		System.out.println("**After Interest");
		System.out.println(accounts.get(1).getBallance());
		
		

	}

}
