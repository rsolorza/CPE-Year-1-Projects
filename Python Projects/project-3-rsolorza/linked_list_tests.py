import unittest
from linked_list import *


class TestList(unittest.TestCase):
    # Note that this test doesn't assert anything! It just verifies your
    #  class and function definitions.
    def test_interface(self):
        temp_list = empty_list()
        temp_list = add(temp_list, 0, "Hello!")
        length(temp_list)
        get(temp_list, 0)
        temp_list = set(temp_list, 0, "Bye!")
        remove(temp_list, 0)

    def test_pair(self):
        temp_list1 = add(add(add(empty_list(), 0, "Hello!"), 1, "Good"), 2, "Bye")
        temp_list2 = add(add(add(empty_list(), 0, "Hello!"), 1, "Good"), 2, "Bye")

        self.assertEqual(temp_list1, temp_list2)
        self.assertEqual(temp_list1.__repr__(), "{'Hello!', {'Good', {'Bye', None}}}")

    def test_empty_list(self):
        self.assertEqual(empty_list(), None)

    def test_add(self):
        temp_list = add(empty_list(), 0, "Hello!")

        with self.assertRaises(IndexError):
            add(empty_list(), 5, 1000)
        with self.assertRaises(IndexError):
            add(None, 1, "Test")
        with self.assertRaises(IndexError):
            add(temp_list, 3, "Test")
        with self.assertRaises(IndexError):
            add(temp_list, -3, "Test")

        self.assertEqual(temp_list, Pair("Hello!", None))
        self.assertEqual(add(None, 0, "Hello"), Pair("Hello", None))

        temp_list = add(add(temp_list, 1, "Bye!"), 1, "Good")
        self.assertEqual(temp_list, Pair("Hello!", Pair("Good", Pair("Bye!", None))))

        temp_list = add(add(temp_list, 3, ":"), 4, "!")
        self.assertEqual(temp_list, Pair("Hello!", Pair("Good", Pair("Bye!", Pair(":", Pair("!", None))))))

    def test_length(self):
        temp_list = add(empty_list(), 0, "Hello!")

        self.assertEqual(length(empty_list()), 0)
        self.assertEqual(length(temp_list), 1)

        temp_list = add(add(temp_list, 1, "Bye!"), 1, "Good")
        self.assertEqual(length(temp_list), 3)

    def test_get(self):
        temp_list = add(add(add(empty_list(), 0, "Hello!"), 1, "Bye!"), 1, "Good")

        with self.assertRaises(IndexError):
            get(empty_list(), 5)
        with self.assertRaises(IndexError):
            get(temp_list, 3)
        with self.assertRaises(IndexError):
            get(temp_list, -3)

        self.assertEqual(get(temp_list, 0), "Hello!")
        self.assertEqual(get(temp_list, 2), "Bye!")

    def test_set(self):
        temp_list = add(add(add(empty_list(), 0, "Hello!"), 1, "Bye!"), 1, "Good")

        with self.assertRaises(IndexError):
            set(empty_list(), 1, "Test")
        with self.assertRaises(IndexError):
            set(temp_list, 3, "Test")
        with self.assertRaises(IndexError):
            set(temp_list, -3, "Test")

        self.assertEqual(set(temp_list, 1, "hello"), Pair("Hello!", Pair("hello", Pair("Bye!", None))))

    def test_remove(self):
        temp_list = add(add(add(empty_list(), 0, "Hello!"), 1, "Bye!"), 1, "Good")
        tup = (remove(temp_list, 2))

        with self.assertRaises(IndexError):
            remove(empty_list(), 1)
        with self.assertRaises(IndexError):
            remove(temp_list, 3)
        with self.assertRaises(IndexError):
            remove(temp_list, -3)

        self.assertEqual(tup[0], "Bye!")
        self.assertEqual(tup[1], Pair("Hello!", Pair("Good", None)))

    def test_foreach(self):
        temp_list = add(add(add(add(add(add(add(empty_list(), 0, 3), 1, 5), 2, 1), 3, 2), 4, 9), 5, 0), 6, 3)
        a_list = []

        def map_to_list(value, some_list=a_list):
            some_list.append(value)

        foreach(temp_list, map_to_list)
        self.assertEqual(a_list, [3, 5, 1, 2, 9, 0, 3])

    def test_sort(self):
        temp_list = add(add(add(add(add(add(add(empty_list(), 0, 3), 1, 5), 2, 1), 3, 2), 4, 9), 5, 0), 6, 3)

        def less_than(a, b):
            return a < b

        self.assertEqual(sort(temp_list, less_than), add(add(add(add(add(add(add(empty_list(), 0, 0), 1, 1), 2, 2),
                                                                     3, 3), 4, 3), 5, 5), 6, 9))

    def test_insert_sort(self):
        temp_list = add(add(add(add(add(add(empty_list(), 0, 11), 0, 7), 0, 5), 0, 3), 0, 1), 0, 0)

        def less_than(a, b):
            return a < b

        self.assertEqual(insert_sorted(temp_list, 13, less_than),
                         add(add(add(add(add(add(add(empty_list(), 0, 13), 0, 11), 0, 7), 0, 5), 0, 3), 0, 1), 0, 0))
        self.assertEqual(insert_sorted(temp_list, 4, less_than),
                         add(add(add(add(add(add(add(empty_list(), 0, 11), 0, 7), 0, 5), 0, 4), 0, 3), 0, 1), 0, 0))

if __name__ == '__main__':
    unittest.main()
