package lab8;

public class SqaureRoot {
	
	public static int counter = 0;
	
	public static void main(String[] args) {
		System.out.printf("Square root of 135 " + '\u2248' + " %.5f\n%d iterations\n", squareRoot(135), counter);
	}
	
	
	
	public static double squareRoot(double value) {
		double initialGuess = 1.0;
		return squareRootGuess(value, initialGuess);		
	}
	
	public static double squareRootGuess(double x, double g) {
		double accuracy = .000005;
		counter++;
		if(Math.abs(g*g - x) < accuracy) 
			return g;
		return squareRootGuess(x, (g + x/g) / 2);
		
	}
	

}
