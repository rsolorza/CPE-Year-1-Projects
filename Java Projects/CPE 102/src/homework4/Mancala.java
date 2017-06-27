package homework4;

/*                 1   2   3   4   5   6
 * 			  |*****************************|
 *			  |  | 4 | 4 | 4 | 4 | 4 | 4 |  |    
 * 			  |0 |********************** | 0|
 * 			  |  | 4 | 4 | 4 | 4 | 4 | 4 |  |    
 * 			  |*****************************|
 * 
 * @Author: Ryan Solorzano
 * @Date: 2/10/17
 * CPE 102
 * Professor Hassal
 */

public class Mancala implements Game {

	private int[] board;
	private boolean isP1Turn;

	public Mancala() {
		board = new int[14];
		
		for (int i = 0; i < board.length; i++) {
			if (i != 0 && i != 7)
				board[i] = 4;
		}
		
		isP1Turn = true;
	}

	@Override
	public boolean isValidMove(String move) {
		int moveNum;
		try{
			moveNum = Integer.parseInt(move);
			} catch(NumberFormatException nfe) {
				return false;
			}
		// If the player tries to pick from the outside pockets or a pocket that does not exist
		if(moveNum >= board.length/2 || moveNum <= 0)
			return false;
		
		if(isP1Turn) {
			if(board[moveNum] == 0)
				return false;
			else 
				return true;
			
		} else {
			if(board[board.length - moveNum] == 0)
				return false;
			else 
				return true;
		}
	}

	@Override
	public void executeMove(String move) {
		if(isValidMove(move)) {
			int numMove = Integer.parseInt(move);
			
			if(isP1Turn) {
				for(int i = 1; i <= board[numMove]; i++) {
					try {
						board[numMove + i]++;
					} catch(ArrayIndexOutOfBoundsException aioobe) {
						board[numMove - board.length + i + 1]++;
					}
				}
				
				if(numMove + board[numMove] < board.length){
					if(board[numMove + board[numMove]] == 1){
						board[board.length / 2]++;
						board[board.length/2] += board[board.length - (numMove + board[numMove])];
						board[board.length - (numMove + board[numMove])] = 0;
						board[numMove + board[numMove]] = 0;

					}
				}
				
				
				if(board[numMove] + numMove != board.length / 2) 
					isP1Turn = false;
					
				board[numMove] = 0;
			
			} else {
				// Index is the index of the original move
				int index = board.length - numMove;
				for(int i = 1; i <= board[index]; i++) {
					if(index + i >= board.length) {
						if(i - numMove >= board.length / 2)
							board[i - numMove + 1]++;
						else 
							board[i - numMove]++;				
					} else 
						board[index + i]++;
				}
				
				if(board[index] + board.length - numMove != board.length)
					isP1Turn = true;
				
				
				if(index + board[index] < board.length) {
					if(board[index + board[index]] == 1){
						board[0]++;
						board[0] += board[numMove - board[index]];
						board[numMove - board[index]] = 0;
						board[index + board[index]] = 0;
					}
				}	

				board[index] = 0;
			}
		}
	}

	@Override
	public boolean isGameOver() {
		boolean returnBool = true;
		for(int i = 1; i < board.length/2; i++) {
			if(board[i] != 0){
				returnBool = false;
				break;
			}
		}
		
		if(returnBool) {
			for (int i = board.length / 2 + 1; i < board.length; i++) {
				board[0] += board[i];
				board[i] = 0;
			}
			return returnBool;
			
		} else {
			returnBool = true;
			for(int i = board.length / 2 + 1; i < board.length; i++) {
				if(board[i] != 0) {
					returnBool =  false;
					break;
				}
			}
			if(returnBool) {
				for (int i = 1; i < board.length / 2; i++) {
					board[board.length / 2] += board[i];
					board[i] = 0;
				}
				return returnBool;	
			} else
				return returnBool;
			
			
		}
		
	}

	@Override
	public String displayGame() {
		// For better picture, look at the top
		String returnString = String.format("" +
		         "     1   2   3   4   5   6     "       + "\n" +      
		         "|*****************************|"       + "\n" +
		         "|  | %d | %d | %d | %d | %d | %d |  |" + "\n" +
		         "|%d |***********************| %d|"     + "\n" +
		         "|  | %d | %d | %d | %d | %d | %d |  |" + "\n" +
		         "|*****************************|",      
		         	board[13], board[12], board[11], board[10], board[9], board[8],
		       board[0],                                                                                   board[7],
		            board[1], board[2], board[3], board[4], board[5], board[6]);
		
		return returnString;
	}

	@Override
	public String promptMove() {
		if(isP1Turn) 
			return "Player 1 pick a bottom pocket: (1-6)";
		else
			return"Player 2 pick a top pocket: (1-6)";
	}

	@Override
	public String declareWinner() {
		if(board[0] < board[board.length / 2])
			return "Player 1 Wins!";
		else if (board[0] > board[board.length / 2])
			return "Player 2 Wins!";
		else
			return "It's a tie!";
	}

}
