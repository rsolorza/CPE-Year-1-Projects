/*
 * @Author Ryan Solorzano
 * NOTE: ALL COORDINATES ARE IN THE CUSTOMARY COORDINATES FOR CODING, THAT IS 0,0 IS THE 
 * TOP LEFT HAND OF SCREEN, AND Y INCREASES AS YOU GO DOWN, NOT CUSTOMARY CARTESIAN 
 * COORDIATES FOR MATH
 */
package lab2;

// point (x1, y1) is top left hand corner, point (x2, y2) is bottom right hand corner
public class Rectangle {
	private int x1;
	private int y1;
	private int x2;
	private int y2;

	public Rectangle(int point1X, int point1Y, int point2X, int point2Y) {
		x1 = point1X;
		y1 = point1Y;
		x2 = point2X;
		y2 = point2Y;
	}

	public Rectangle intersection(Rectangle r1) {
		// checks if rectangle r1 is inside this instance of Rectangle
		if (this.x2 >= r1.getX1() && r1.getX2() >= this.x1 && 
			this.y1 <= r1.getY2() && r1.getY1() <= this.y2) {

			int pointX1 = 0, pointY1 = 0, pointX2 = 0, pointY2 = 0;

			if (this.x1 <= r1.getX1())
				pointX1 = r1.getX1();
			else
				pointX1 = this.x1;

			if (this.x2 <= r1.getX2())
				pointX2 = this.x2;
			else
				pointX2 = r1.getX2();

			if (this.y1 <= r1.getY1())
				pointY1 = r1.getY1();
			else
				pointY1 = this.y1;

			if (this.y2 <= r1.getY2())
				pointY2 = this.y2;
			else
				pointY2 = r1.getY2();

			return new Rectangle(pointX1, pointY1, pointX2, pointY2);

		} else
			return null;
	}

	public int getX1() {
		return x1;
	}

	public int getY1() {
		return y1;
	}

	public int getX2() {
		return x2;
	}

	public int getY2() {
		return y2;
	}

	public static int calculateArea(Rectangle r1) {
		return (Math.abs(r1.getX2() - r1.getX1()) * Math.abs(r1.getY2() - r1.getY1()));
	}

	public String toString() {
		return String.format("Top left corner: (%d, %d) \n" + "Bottom right corner: (%d, %d) \n" + "Width: %d\n"
				+ "Height: %d\n" + "Area: %d\n", x1, y1, x2, y2, Math.abs(x2 - x1), Math.abs(y2 - y1), Math.abs((x2 - x1) * (y2 - y1)));
	}
}
