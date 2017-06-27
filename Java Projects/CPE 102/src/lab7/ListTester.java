package lab7;

public class ListTester {

	public static void main(String[] args) {
		LispList list1 = LispList.NIL.cons("C").cons("B").cons("A");
		System.out.println(list1);
		
		LispList list2 = new NonEmptyList("A", new NonEmptyList("B", new NonEmptyList("C", new EmptyList())));
		System.out.println(list2);
		
		System.out.println(list2.length());
	}

}
