package lab3;

public class Balloon {

	private double radius;
	
	
	public Balloon() {
		radius = 0;
	}
	
	
	public void inflate(double amount) {
		radius += amount;
	}
	
	public double getVolume() {
		return (4/3.0 * Math.PI * Math.pow(radius, 3));
	}
	
	
	
}
