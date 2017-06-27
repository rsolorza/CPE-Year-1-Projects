package homework3;

/*
 * @Author: Ryan Solorzano
 * @Date: 2/2/2017
 * Code written for homework #3
 * Professor Hassal
 */

public class Airplane {

	private Row[] rows;

	// Constructor takes the number of rows in first class, and number of rows
	// in economy, and instantiates the rows array
	public Airplane(int numFirstClass, int numEconomy) {
		rows = new Row[numEconomy + numFirstClass];
		for (int i = 0; i < rows.length; i++) {
			if (i > numFirstClass - 1)
				rows[i] = new Row(i + 1, false);
			else
				rows[i] = new Row(i + 1, true);
		}

	}

	// Mostly relies on toString for Row
	public String toString() {
		String returnString = "";
		for (Row r : rows)
			returnString += r.toString() + "\n";
		return returnString;
	}

	// Method takes in a boolean, which is true if the requested seat is in
	// first class, and false if otherwise, an int to describe the number of
	// passengers, and a String, which should be "window", "center", or "aisle"
	// for a certain seating preference.
	// Returns a string which is either an error message, or a confirmation
	// message
	public String assignSeat(boolean isFirstClass, int numPassengers, String seatingPreference) {
		// First class can't request more than 2 seats, and economy can't
		// request more than 3, and first class has no center seat
		if ((isFirstClass && numPassengers > 2) || (!isFirstClass && numPassengers > 3))
			return "Error: too many passengers for seating requested";
		if (seatingPreference.equals("center") && isFirstClass)
			return "Error: there is no center seat in first class";

		int rowNumber = 0;
		String side = "";
		// loops through the Rows in rows[], and checks each one if there is an
		// available seat in the requested location
		for (Row r : rows) {
			// Checks left side
			if (r.checkSideAvailability(seatingPreference, numPassengers, "left")) {
				// checks if the seat is in the requested class
				if ((isFirstClass && r.isFirstClass()) || (!isFirstClass && !r.isFirstClass())) {
					// ... and stores the row number and side in variables, then
					// breaks the loop
					rowNumber = r.getRowNumber();
					side = "left";
					break;
				}

				// and if not, checks the right side
			} else if (r.checkSideAvailability(seatingPreference, numPassengers, "right")) {
				// checks if the seat is in the requested class
				if ((isFirstClass && r.isFirstClass()) || (!isFirstClass && !r.isFirstClass())) {
					// ... and stores the row number and side in variables, then
					// breaks the loop
					rowNumber = r.getRowNumber();
					side = "right";
					break;
				}

			}
		}

		// checks if a row was found (note, row numbers start at 1)
		if (rowNumber != 0) {
			// if requested 3 passengers, then reserve every seat on the side
			if (numPassengers == 3) {
				rows[rowNumber - 1].reserveSeat(side + " window");
				rows[rowNumber - 1].reserveSeat(side + " center");
				rows[rowNumber - 1].reserveSeat(side + " aisle");

				// if requested first class, then fill up every seat on the side
			} else if (numPassengers == 2 && isFirstClass) {
				rows[rowNumber - 1].reserveSeat(side + " window");
				rows[rowNumber - 1].reserveSeat(side + " aisle");

				// if it's not first class, but still requested 2 seats, then
				// they can either be center and window or center and aisle
			} else if (numPassengers == 2 && !isFirstClass) {
				rows[rowNumber - 1].reserveSeat(side + " " + seatingPreference);
				// if requested seat is not center
				if (seatingPreference.equals("aisle") || seatingPreference.equals("window"))
					rows[rowNumber - 1].reserveSeat(side + " center");
				// If requested seat is center: defaults second seat to window
				// by logic in Row.checkRowAvailability
				else
					rows[rowNumber - 1].reserveSeat(side + " window");

				// If 1 seat requested, then just reserve that seat
			} else {
				rows[rowNumber - 1].reserveSeat(side + " " + seatingPreference);
			}

			return "Seat(s) Reserved";
		} else
			return "Seat(s) not Available";

	}

	// Nested Row class. I thought it should be nested, because it is not needed
	// anywhere else
	// Private Variables: boolean isFirstClass, int rowNumber, boolean[] seats
	// Methods: Row(int rowNumber, boolean isFirstClass) (constructor),
	// toString(), isFirstClass(), getRowNumber(), reserveSeat(String
	// seatLocation)
	// checkSideAvailability(String location, int numPassengers, String side)
	public class Row {

		private boolean isFirstClass;
		private int rowNumber;
		// this array represents the seats. By default boolean arrays are false,
		// which I decided represents an empty seat.
		private boolean[] seats;

		// Constructor takes the rowNumber for reference and whether or not it
		// is first class for the number of seats
		public Row(int rowNumber, boolean isFirstClass) {
			this.rowNumber = rowNumber;
			this.isFirstClass = isFirstClass;
			if (this.isFirstClass)
				seats = new boolean[4];
			else
				seats = new boolean[6];
		}

		// toString represents open spaces with _ and taken with X
		public String toString() {
			String returnString = "";
			// if it is first class, then the row needs to be centered with
			// economy
			if (isFirstClass)
				returnString += "  ";
			// loop through all the seats. If it is true, then add to the return
			// string X. If it is false, then add to the return string _ .
			for (int i = 0; i < seats.length; i++) {
				returnString += (seats[i] ? "X " : "_ ");
				// if it is halfway through the array, make a gap for the aisle
				// in the plane
				if (i == seats.length / 2 - 1)
					returnString += "   ";
			}
			return returnString;
		}

		// getter for isFirstClass variable
		public boolean isFirstClass() {
			return isFirstClass;
		}

		// getter for rowNumber
		public int getRowNumber() {
			return rowNumber;
		}

		// Method which attempts to reserve a seat in a location, if it is
		// taken, returns a string saying so
		public String reserveSeat(String seatLocation) {
			int seatNumber;
			// changes given locations into array numbers
			switch (seatLocation) {
			case "left window":
				seatNumber = 0;
				break;
			case "left center":
				seatNumber = 1;
				break;
			case "left aisle":
				seatNumber = seats.length / 2 - 1;
				break;
			case "right aisle":
				seatNumber = seats.length / 2;
				break;
			case "right center":
				seatNumber = 4;
				break;
			case "right window":
				seatNumber = seats.length - 1;
				break;
			default:
				seatNumber = 0;
				break;
			}

			// checks if the given seat is taken (if it's true in the array)
			if (seats[seatNumber])
				return "Error: Seat is already Occupied";
			// otherwise, sets the location to true and returns row and
			// seatNumber
			else {
				seats[seatNumber] = true;
				return String.format("Reserved seat in row %d, seat number %d", this.rowNumber, seatNumber);
			}

		}

		// Method assumes the numPassengers for first class is 2 or less, and
		// for economy is 3 or less
		// location, as usual, has to be "window", "center" (if economy), or
		// "aisle"
		// side has to be left or right
		public boolean checkSideAvailability(String location, int numPassengers, String side) {
			// Can do this, because have to check all of the seats anyway
			if (numPassengers == 3)
				side = "aisle";

			switch (location.toLowerCase()) {
			// if the given location is aisle
			case "aisle":
				boolean tempA = true;
				// if the number of passengers is greater than one, and is in
				// first class
				if (numPassengers > 1 && isFirstClass)
					// then check if the window is open recursively
					tempA = checkSideAvailability("window", numPassengers - 1, side);
				// Otherwise, if there are more than one passengers and not in
				// first class
				else if (numPassengers > 1 && !isFirstClass) {
					// then check if the center is open recursively (move
					// outward in terms of checking)
					tempA = checkSideAvailability("center", numPassengers - 1, side);
				}

				// If any of the above statements evaluated to false, then
				// return false and end the method
				if (!tempA)
					return false;

				// Otherwise, check the given side
				if (side.toLowerCase().equals("left")) {
					if (seats[seats.length / 2 - 1])
						// if the left aisle is taken return false and end the
						// method
						return false;
					// right side
				} else {
					if (seats[seats.length / 2])
						// if right aisle is taken, return false and end method
						return false;
				}

				// If you never returned false, then there must be seat(s)
				// available starting with the requested seat in the requested
				// side, so break the switch statement and return false down
				// there
				break;

			// If the requested seat is in the center, then they must be flying
			// economy
			case "center":
				boolean tempC = true;
				// if there are other seats to be checked, then check the window
				if (numPassengers > 1)
					tempC = checkSideAvailability("window", numPassengers - 1, side);

				// If the window turned out to be taken, return false and end
				// the method
				if (!tempC)
					return false;

				// otherwise, check both sides
				if (side.toLowerCase().equals("left")) {
					if (seats[seats.length / 2 - 2])
						return false;
				} else {
					if (seats[seats.length / 2 + 1])
						return false;
				}
				// Same as before
				break;

			// If user requested the window
			case "window":
				boolean tempW = true;
				// Older code
				/*
				 * if (numPassengers == 3 || (isFirstClass && numPassengers >
				 * 1)) tempW = checkSideAvailability("aisle", numPassengers - 1,
				 * side);
				 */
				
				// check center recursively
				if (numPassengers == 2)
					tempW = checkSideAvailability("center", numPassengers - 1, side);

				// all the same as before
				if (!tempW)
					return false;

				if (side.toLowerCase().equals("left")) {
					if (seats[0])
						return false;
				} else {
					if (seats[seats.length - 1])
						return false;
				}

				break;

				// if requested seat is not valid, just return false
			default:
				return false;
			}

			// If you made it through all that, then return true :)
			return true;
		}

	}
}
// DONE
