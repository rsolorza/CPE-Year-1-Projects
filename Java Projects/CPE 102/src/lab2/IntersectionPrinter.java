package lab2;

import java.util.Scanner;

public class IntersectionPrinter {
	static Scanner userInput = new Scanner(System.in);
	
	
	
	public static void main(String[] args) {
		System.out.print("Rectangle1 x1?   ");
		int temp1 = userInput.nextInt();
		System.out.print("Rectangle1 y1?   ");
		int temp2 = userInput.nextInt();
		System.out.print("Rectangle1 x2?   ");
		int temp3 = userInput.nextInt();
		System.out.print("Rectangle1 y2?   ");
		int temp4 = userInput.nextInt();
		Rectangle r1 = new Rectangle (temp1, temp2, temp3, temp4);
		
		System.out.print("\nRectangle2 x1?   ");
		temp1 = userInput.nextInt();
		System.out.print("Rectangle2 y1?   ");
		temp2 = userInput.nextInt();
		System.out.print("Rectangle2 x2?   ");
		temp3 = userInput.nextInt();
		System.out.print("Rectangle2 y2?   ");
		temp4 = userInput.nextInt();
		Rectangle r2 = new Rectangle(temp1, temp2, temp3, temp4);
		
		Rectangle r3 = r1.intersection(r2);
		
		
		System.out.println(r3);
		
		
	}
}
