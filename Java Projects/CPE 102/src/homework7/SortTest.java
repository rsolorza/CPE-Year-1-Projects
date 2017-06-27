/*  @Author: Ryan Solorzano
 *  3/10/17
 *  CPE 102
 *  Homework 7
 *  Professor Assal
 */
package homework7;

import java.util.Random;

public class SortTest {

	public static void main(String[] args) {
		System.out.printf(
				"%6s" + "%11s" + "%12s" + "%12s" + "%10s" + "%13s" + "%10s" + "%10s" + "%11s" + "%10s" + "\n", 
				"Size", "Bubble", "Insertion", "Selection", "Merge", "QuickSort", "B/I", "B/S", "B/M", "B/Q");

		for (int i = 0; i < 1; i++) {
			double[] temp = calculateSortTime(10000 + 10000 * i, 9);
			System.out.printf(
					"%6d" + "%11.3f" + "%12.3f" + "%12.3f" + "%10.3f" + "%13.3f" + "%10.3f" + "%10.3f" + "%11.3f"
							+ "%10.3f" + "\n",
					10000 + 10000 * i, temp[0], temp[1], temp[2], temp[3], temp[4], ((double) temp[0] / temp[1]),
					((double) temp[0] / temp[2]), ((double) temp[0] / temp[3]), ((double) temp[0] / temp[4]));
		}
	}

	public static int[] randomIntArray(int length, int size) {
		Random r = new Random();
		int[] numbers = new int[length];
		for (int i = 0; i < length; i++)
			numbers[i] = r.nextInt(size);
		return numbers;
	}

	public static double[] calculateSortTime(int length, int size) {
		Stopwatch stopwatch = new Stopwatch();
		int[] randomArray = randomIntArray(length, size);
		int[] temp = randomArray.clone();
		double[] sortTimes = new double[5];

		for (int i = 0; i < 5; i++) {
			stopwatch.reset();
			randomArray = temp.clone();

			switch (i) {
			case 0:
				stopwatch.start();
				Sort.bubbleSort(randomArray);
				stopwatch.stop();
				break;
			case 1:
				stopwatch.start();
				Sort.insertionSort(randomArray);
				stopwatch.stop();
				break;
			case 2:
				stopwatch.start();
				Sort.selectionSort(randomArray);
				stopwatch.stop();
				break;
			case 3:
				stopwatch.start();
				Sort.mergeSort(randomArray);
				stopwatch.stop();
				break;
			case 4:
				stopwatch.start();
				Sort.quickSort(randomArray);
				stopwatch.stop();
				break;
			}
			sortTimes[i] = (double) (stopwatch.getElapsedTime() / 1000000.0);
		}

		return sortTimes;
	}

}
