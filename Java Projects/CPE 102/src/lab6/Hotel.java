package lab6;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.GregorianCalendar;
import java.util.InputMismatchException;
import java.util.Scanner;

public class Hotel {

	public static void main(String[] args) {
		HashMap<String, Double> categories = new HashMap<String, Double>();

		if (args.length != 1) {
			System.out.println("Format: 'File.txt'");
		} else {

			try {
				Scanner in = new Scanner(new File(args[0]));
				in.useDelimiter(";|/|\n|\r");

				while (in.hasNext()) {
					String name = "", category = "";
					double price;
					int month, day, year;

					name = in.next();

					category = in.next();
					price = in.nextDouble();
					month = in.nextInt();
					day = in.nextInt();

					if (!categories.containsKey(category))
						categories.put(category, price);
					else {
						double temp = categories.get(category);
						temp += price;
						categories.put(category, temp);
					}

					year = in.nextInt();

					Sale temp = new Sale(name, category, price, month, day, year);
					processSale(temp);

				}

				in.close();

			} catch (FileNotFoundException fnfe) {
				System.out.println("Error: file not found");
				System.out.println(fnfe.getMessage());

			} catch (InputMismatchException ime) {
				System.out.println("Error: check that file follows following format: ");
				System.out.println("Name;category;00.00;month/day/year");
				System.out.println(ime.getMessage());

			} catch (Error e) {
				System.out.println(e.getMessage());
			} 
		}

		for (String s : categories.keySet()) 
			System.out.printf("Total amount spent in category " + s + ": $%.2f" + "\n", categories.get(s));
		

	}

	public static void processSale(Sale s) {
		File file = new File(s.getCategory() + ".txt");
		PrintWriter out;

		if (!file.exists()) {
			System.out.println("Creating File: " + s.getCategory() + ".txt");
			try {
				file.createNewFile();

			} catch (IOException ioe) {
				System.out.println(ioe.getMessage());
			}
		}

		try {
			out = new PrintWriter(file);
			out.printf("%s;%s;%f;%d/%d/%d", s.getName(), s.getCategory(), s.getCost(),
					s.getDate().get(GregorianCalendar.MONTH), s.getDate().get(GregorianCalendar.DAY_OF_MONTH),
					s.getDate().get(GregorianCalendar.YEAR));
			out.println();
			
			out.close();
		} catch (FileNotFoundException fnfe) {
			// This code should never be run
			System.out.println(fnfe.getMessage() + "\nUnknown file processing error");
		}

	}

}
