package homework2;

public class CustomerTester {

	
	public static void main(String[] args) {
		
		Customer customer = new Customer();
		customer.makePurchase(25, 1);
		System.out.println("After spending $25, the total is: " + customer.getAmountSpent());
		
		customer.makePurchase(25, 2);
		System.out.println("After spending $25, the total is: " + customer.getAmountSpent());
		
		customer.makePurchase(50, 3);
		System.out.println("After spending $50, the total is: " + customer.getAmountSpent());
		
		customer.makePurchase(45, 6);
		System.out.println("After spending $45, the total is: " + customer.getAmountSpent());
		
		customer.makePurchase(50, 4);
		System.out.println("After spending $50, the total is: " + customer.getAmountSpent());

		customer.makePurchase(25, 5);
		System.out.println("After spending $25, the total is: " + customer.getAmountSpent());
		customer.discountReached();
	}
}
