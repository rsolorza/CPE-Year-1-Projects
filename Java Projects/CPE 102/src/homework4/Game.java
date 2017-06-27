package homework4;

/*
 * @Author: Ryan Solorzano
 * @Date: 2/10/17
 * CPE 102
 * Professor Hassal
 */

public interface Game {

	public boolean isValidMove(String move);
	public void executeMove(String move);
	public boolean isGameOver();
	public String displayGame();
	public String promptMove();
	public String declareWinner();
	
}
