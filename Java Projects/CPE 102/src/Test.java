import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;





public class Test {

	public static void main(String[] args) throws FileNotFoundException {
		Scanner in = new Scanner(new File("Test.txt"));
		in.useDelimiter(";|\n|/");
		String s1 = in.next();
		System.out.println(s1);
		String s2 = in.next();
		System.out.println(s2);
		in.close();
		
		
		//Sale s = new Sale(s1, s2, in.nextDouble(), in.nextInt(), in.nextInt());
	}

}
