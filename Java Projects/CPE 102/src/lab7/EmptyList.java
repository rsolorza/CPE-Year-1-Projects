package lab7;

public class EmptyList extends LispList {

	public EmptyList() {
		super(null, null);
	}

	@Override
	public boolean isEmpty() {
		return true;
	}
	
	@Override
	public Object head() {
		throw new UnsupportedOperationException("There is no head");
	}
	
	@Override
	public LispList tail(){
		throw new UnsupportedOperationException("There is no tail");
	}
	
	@Override
	public String toString() {
		return "";
	}
	
}
