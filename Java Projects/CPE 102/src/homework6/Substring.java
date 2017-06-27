package homework6;

public class Substring {
	
	public static int indexOf(String text, String str) {
		return indexOf(text, str, 0);
	}
	private static int indexOf(String text, String str, int index) {
		if(text.length() < str.length())
			return -1;
		
		if(text.substring(0, str.length()).equals(str))
			return index;
		else
			return indexOf(text.substring(1), str, index + 1);
	}
	


}
