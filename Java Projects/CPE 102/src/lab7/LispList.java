package lab7;

public class LispList {

	public static LispList NIL = new EmptyList();
	private Object head;
	private LispList tail;
	
	public LispList(Object head, LispList tail) {
		this.head = head;
		this.tail = tail;
	}
	
	
	public boolean isEmpty() {
		return (head == null && tail == null);
	}
	
	public Object head() {
		return getHead();
	}
	
	public LispList tail() {
		return tail;
	}
	
	public LispList cons(Object element) {
		return new NonEmptyList(element, this);	
	}

	public LispList getTail() {
		return tail;
	}

	public Object getHead() {
		return head;
	}
	
	public int length() {
		return (this.isEmpty() ? 0 : 1 + tail.length());
	}
	
	
}
