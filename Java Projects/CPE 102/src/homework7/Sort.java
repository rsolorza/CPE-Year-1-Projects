/*  Ryan Solorzano
 *  3/10/17
 *  Homework 7
 *  CPE 102
 *  Professor Assal
 *  
 */
package homework7;

public class Sort {

	public static void bubbleSort(int[] a) {
		boolean didSwitch = true;
		int counter = 0;
		while (didSwitch) {
			didSwitch = false;
			counter++;

			for (int i = 0; i < a.length - counter; i++) {
				// swap if index is greater than or equal to next index
				if (a[i] > a[i + 1]) {
					swap(a, i, i + 1);
					didSwitch = true;
				}
			}
		}
	}

	public static void insertionSort(int[] a) {
		for (int i = 1; i < a.length; i++) {
			int next = a[i];
			int j = i;
			while (j > 0 && a[j - 1] > next) {
				a[j] = a[j - 1];
				j--;
			}
			a[j] = next;
		}
	}

	// TODO: DOUBLE CHECK SELECTION SORT
	public static void selectionSort(int[] a) {
		for (int i = 0; i < a.length - 1; i++) {
			int min = minimumPosition(a, i);
			swap(a, min, i);
		}
	}

	private static int minimumPosition(int[] a, int from) {
		int min = from;
		for (int i = from + 1; i < a.length; i++) {
			if (a[i] < a[min])
				min = i;
		}
		return min;
	}
	
	public static void mergeSort(int[] a) {
		if(a.length <= 1)
			return;
		int[] first = new int[a.length/ 2];
		int[] second = new int[a.length - first.length];
		for(int i = 0; i < first.length; i++) 
			first[i] = a[i];
		for(int i = 0; i < second.length; i++)
			second[i] = a[first.length + i];
		
		mergeSort(first);
		mergeSort(second);
		merge(first, second, a);
			
	}
	
	private static void merge(int[] first, int[] second, int[] a) {
		int firstIndex = 0;
		int secondIndex = 0;
		int j = 0;
		while(firstIndex < first.length && secondIndex < second.length) {
			if(first[firstIndex] < second[secondIndex]) {
				a[j] = first[firstIndex];
				firstIndex++;
			} else {
				a[j] = second[secondIndex];
				secondIndex++;
						
			}
			j++;			
		}
		while(firstIndex < first.length) {
			a[j] = first[firstIndex];
			firstIndex++;
			j++;
		}
		while(secondIndex < second.length) {
			a[j] = second[secondIndex];
			secondIndex++;
			j++;
		}
	}
	
	public static void quickSort(int[] a) {
		quickSort(a, 0, a.length - 1);
	}
	
	public static void quickSort(int[] a, int from, int to) {
		if (from >= to) 
			return;
		int p = partition(a, from, to);
		quickSort(a, from, p);
		quickSort(a, p + 1, to);
	}
	
	private static int partition(int[] a, int from, int to) {
		int pivot = a[from];
		int i = from - 1;
		int j = to + 1;
		while (i < j) {
			i++; while (a[i] < pivot) { i++;}
			j--; while (a[j] > pivot) { j--; }
			if(i < j)
				swap(a, i, j);
		}
		return j;
	}

	public static void swap(int[] a, int x, int y) {
		if(x == y)
			return;
		a[x] += a[y];
		a[y] = a[x] - a[y];
		a[x] -= a[y];
	}

}
