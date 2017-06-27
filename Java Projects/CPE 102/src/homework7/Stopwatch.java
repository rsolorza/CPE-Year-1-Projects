/*  Ryan Solorzano
 *  3/10/17
 *  Homework 7
 *  CPE 102
 *  Professor Assal
 * 
 */


package homework7;

public class Stopwatch {
	
	private long elapsedTime;
	private long startTime;
	private boolean isRunning;
	
	public Stopwatch() {
		reset();
	}
	
	public void start() {
		if(isRunning)
			return;
		isRunning = true;
		startTime = System.nanoTime();
	}
	
	public void stop() {
		if(!isRunning)
			return;
		long endTime = System.nanoTime();
		elapsedTime = elapsedTime + endTime - startTime;
	}
	
	public long getElapsedTime() {
		if(isRunning) {
			long endTime = System.nanoTime();
			return elapsedTime + endTime - startTime;
		} else
			return elapsedTime;
		
	}
	
	public void reset() {
		elapsedTime = 0;
		isRunning = false;
	}
	
	
}
