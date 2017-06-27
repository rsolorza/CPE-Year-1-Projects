package homework4;

/*
 * @Author: Ryan Solorzano
 * @Date: 2/10/17
 * CPE 102
 * Professor Hassal
 */




import java.util.Scanner;

public class GamePlayer {

	public static void main(String[] args) {

		Game game = null;
		Scanner userInput = new Scanner(System.in);
		int input = 0;

		System.out.println("What game would you like to play?" + "\n" + "(1) Tic Tac Toe" + "\n" + "(2) Mancala");
		if (userInput.hasNextInt())
			input = userInput.nextInt();
		switch (input) {
		case 1:
			game = new TicTacToe();
			break;
		case 2:
			game = new Mancala();
			break;
		default:
			System.out.println("That is not a valid game choice");
			break;
		}

		String stringInput;

		try {
			while (!game.isGameOver()) {
				stringInput = "";
				System.out.println("\n" + game.displayGame());
				System.out.println(game.promptMove());

				do {
					if (userInput.hasNext())
						stringInput = userInput.next();

					if (!game.isValidMove(stringInput))
						System.out.println("Error: invalid move, try again");
				} while (!game.isValidMove(stringInput));
				game.executeMove(stringInput);

			}

			System.out.println(game.displayGame());
			System.out.println(game.declareWinner());
		} catch (NullPointerException npe) {
			// npe.printStackTrace();
			System.out.println("Ending game....");
		}
		
		userInput.close();
	}
}
