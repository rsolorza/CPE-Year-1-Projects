import unittest
from array_list import *


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

    def test_array_list(self):
        temp_list1 = add(add(add(empty_list(), 0, "Hello!"), 1, "Good"), 2, "Bye")
        temp_list2 = add(add(add(empty_list(), 0, "Hello!"), 1, "Good"), 2, "Bye")

        self.assertEqual(temp_list1, temp_list2)
        self.assertEqual(temp_list1.__repr__(), "{Hello!, Good, Bye}")
        self.assertEqual(empty_list().__repr__(), "{}")

    def test_empty_list(self):
        self.assertEqual(empty_list().my_list, [None])

    def test_add(self):
        temp_list = add(empty_list(), 0, "Hello!")

        with self.assertRaises(IndexError):
            add(empty_list(), 5, 1000)
        with self.assertRaises(IndexError):
            add(temp_list, 5, 1000)
        with self.assertRaises(IndexError):
            add(temp_list, -5, 1000)

        self.assertEqual(temp_list.my_list, ["Hello!"])

        temp_list = add(add(temp_list, 1, "Bye!"), 1, "Good")
        self.assertEqual(temp_list.my_list, ["Hello!", "Good", "Bye!", None])

        temp_list = add(add(temp_list, 3, ":"), 4, "!")
        self.assertEqual(temp_list.my_list, ["Hello!", "Good", "Bye!", ":", "!", None, None, None])

    def test_add_alternate1(self):
        temp_list = add_alternate1(empty_list(), 0, "Hello!")

        with self.assertRaises(IndexError):
            add_alternate1(empty_list(), 5, 1000)
        with self.assertRaises(IndexError):
            add_alternate1(temp_list, 5, 1000)
        with self.assertRaises(IndexError):
            add_alternate1(temp_list, -5, 1000)

        self.assertEqual(temp_list.my_list, ["Hello!"])

        temp_list = add_alternate1(add_alternate1(temp_list, 1, "Bye!"), 1, "Good")
        self.assertEqual(temp_list.my_list, ["Hello!", "Good", "Bye!"])

        temp_list = add_alternate1(add_alternate1(temp_list, 3, ":"), 4, "!")
        self.assertEqual(temp_list.my_list, ["Hello!", "Good", "Bye!", ":", "!", None, None, None, None])

    def test_add_alternate2(self):
        temp_list = add_alternate2(empty_list(), 0, "Hello!")

        with self.assertRaises(IndexError):
            add_alternate2(empty_list(), 5, 1000)
        with self.assertRaises(IndexError):
            add_alternate2(temp_list, 5, 1000)
        with self.assertRaises(IndexError):
            add_alternate2(temp_list, -5, 1000)

        self.assertEqual(temp_list.my_list, ["Hello!"])

        temp_list = add_alternate2(add_alternate2(temp_list, 1, "Bye!"), 1, "Good")
        self.assertEqual(temp_list.my_list, ["Hello!", "Good", "Bye!"])

        temp_list = add_alternate2(add_alternate2(temp_list, 3, ":"), 4, "!")
        self.assertEqual(temp_list.my_list, ["Hello!", "Good", "Bye!", ":", "!"])

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

        self.assertEqual(set(temp_list, 1, "hello").my_list, ["Hello!", "hello", "Bye!", None])

    def test_remove(self):
        temp_list = add(add(add(empty_list(), 0, "Hello!"), 1, "Bye!"), 1, "Good")
        tup = (remove(temp_list, 1))

        with self.assertRaises(IndexError):
            remove(empty_list(), 1)
        with self.assertRaises(IndexError):
            remove(temp_list, 3)
        with self.assertRaises(IndexError):
            remove(temp_list, -3)

        self.assertEqual(tup[0], "Good")
        self.assertEqual(tup[1].my_list, ["Hello!", "Bye!", None, None])

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

if __name__ == '__main__':
    unittest.main()
