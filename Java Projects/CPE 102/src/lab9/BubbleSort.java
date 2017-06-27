package lab9;

public class BubbleSort {

	public static void sort(int[] a) {
		boolean didSwitch = true;
		int counter = 0;
		while (didSwitch) {
			didSwitch = false;
			counter++;

			for (int i = 0; i < a.length - counter; i++) {
				// swap if index is greater than or equal to next index
				if (a[i] > a[i + 1]) {
					a[i] += a[i + 1];
					a[i + 1] = a[i] - a[i + 1];
					a[i] -= a[i + 1];
					didSwitch = true;
				}

			}
		}

	}

	public static void mySort(int[] a) {
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

	public static void swap(int[] a, int x, int y) {
		if (x == y)
			return;
		a[x] += a[y];
		a[y] = a[x] - a[y];
		a[x] -= a[y];
	}

}
