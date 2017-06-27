package lab9;

public class SortTest {

	public static void main(String[] args) {
		
		int[] randomArray = new int[10];
		for(int i = 0; i < randomArray.length; i++) 
			randomArray[i] = (int) Math.ceil(Math.random() * 9);
		
		BubbleSort.sort(randomArray);
		
		for(int i : randomArray)
			System.out.print(i + ", ");
		
		
	}
	
	
}
