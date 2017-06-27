package lab7;

public class NonEmptyList extends LispList {

	public NonEmptyList(Object head, LispList tail) {
		super(head, tail);
	}
	
	public String toString() {
		return (this.isEmpty() ? "" : getHead() + " " + getTail().toString());
	}
	
	@Override
	public boolean isEmpty() {
		return (getTail() == null && getHead() == null);
	}
	
	
}
