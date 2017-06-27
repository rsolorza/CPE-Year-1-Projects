package homework4;

/*
 * @Author: Ryan Solorzano
 * @Date: 2/10/17
 * CPE 102
 * Professor Hassal
 */


public class TicTacToe implements Game {

	private int[][] board;
	
	// Constants representing an empty space, x, or O
	private final int EMPTY_SPACE = 0;
	private final int X = 1;
	private final int O = 2;
	
	// boolean to tell if it is X's turn or O's
	private boolean isXTurn;
	
	// counter keeping track of number of turns taken
	private int numTurns;

	// Generic constructor, making X's first, a 3X3 array for tic tac toe, and setting number of turns 0
	public TicTacToe() {
		isXTurn = true;
		board = new int[3][3];
		numTurns = 0;
	}

	// Implemntation of method from Game Interface, which checks if a given move is valid
	// Move is in the form c,r, where c is the column, and r is the row of desired move
	@Override
	public boolean isValidMove(String move) {
		int column, row;
		
		// Checks if the move is 3 characters long, and has a comma
		if (!(move.contains(",") && move.length() == 3)) 
			return false;
		
		
		
		
		try {
			column = Integer.parseInt(move.substring(0, move.indexOf(",")));
			row = Integer.parseInt(move.substring(move.indexOf(",") + 1, move.length()));
		} catch (NumberFormatException nfe) {
			return false;
		}
		if (board[row][column] == EMPTY_SPACE)
			return true;
		else
			return false;
	}

	// Format of move string : c,r
	// Where c = column, and r = row
	@Override
	public void executeMove(String move) {
		// I just put the variables on the inside so I don't have to worry about
		// Try, catch, or anything like that
		if (isValidMove(move)) {
			int column = Integer.parseInt(move.substring(0, move.indexOf(",")));
			int row = Integer.parseInt(move.substring(move.indexOf(",") + 1, move.length()));
			numTurns++;
			if (isXTurn) {
				isXTurn = false;
				board[row][column] = X;
			} else {
				isXTurn = true;
				board[row][column] = O;
			}
		}

	}

	@Override
	public boolean isGameOver() {
		boolean returnVar = false;

		// Check Rows
		for (int[] i : board) {
			returnVar = (i[0] == i[1] && i[0] == i[2] && i[0] != EMPTY_SPACE);
			if (returnVar)
				return true;
		}

		for (int i = 0; i < board[0].length; i++) {
			returnVar = ((board[0][i] == board[1][i] && board[0][i] == board[2][i] && board[0][i] != EMPTY_SPACE));
			if (returnVar)
				return true;
		}

		returnVar = ((board[0][0] == board[1][1] && board[0][0] == board[2][2] && board[0][0] != EMPTY_SPACE));
		if (returnVar)
			return true;

		returnVar = ((board[0][2] == board[1][1] && board[0][2] == board[2][0] && board[0][2] != EMPTY_SPACE));
		if (returnVar)
			return true;

		if (numTurns >= 9)
			return true;

		return false;
	}

	@Override
	public String displayGame() {
		String returnString = "     0   1   2" + "\n" + "    ************" + "\n";

		int counter = 0;
		for (int[] i : board) {
			returnString += counter + "  |";
			for (int j : i) {
				if (j == EMPTY_SPACE)
					returnString += "   ";
				else if (j == X)
					returnString += " X ";
				else if (j == O)
					returnString += " O ";
				returnString += "|";
			}
			returnString += "\n" + "    ************" + "\n";
			counter++;
		}

		return returnString;
	}

	@Override
	public String promptMove() {
		if (isXTurn)
			return "X's Turn: Pick a space (In format column,row X)";
		else
			return "O's turn: Pick a space (In format column,row O)";
	}

	public String declareWinner() {
		if (isGameOver() && numTurns < 9) {
			if (isXTurn)
				return "O wins!";
			else
				return "X wins!";
		} else if (numTurns >= 9)
			return "It's a tie!";
		else
			return "Error";
	}

}
