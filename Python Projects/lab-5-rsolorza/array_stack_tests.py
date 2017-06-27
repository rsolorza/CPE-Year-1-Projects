import unittest
from array_stack import *


class TestStack(unittest.TestCase):
    def test_empty(self):
        test_stack = empty_stack()
        self.assertEqual(test_stack, List())

    def test_push(self):
        test_stack = empty_stack()
        test_stack = push(push(push(test_stack, "Hello"), "Good"), "Bye")
        self.assertEqual(test_stack, add(add(add(empty_list(), 0, "Hello"), 1, "Good"), 2, "Bye"))

    def test_pop(self):
        test_stack = empty_stack()
        test_stack = push(push(push(test_stack, "Hello"), "Good"), "Bye")
        temp1, test_stack = pop(test_stack)
        temp2, test_stack = pop(test_stack)

        temp = add(add(add(empty_list(), 0, "Hello"), 1, ""), 2, "")
        temp = remove(remove(temp, 2)[1], 1)[1]
        self.assertEqual(test_stack, temp)
        self.assertEqual(temp1, "Bye")
        self.assertEqual(temp2, "Good")
        _, test_stack = pop(test_stack)
        with self.assertRaises(IndexError):
            pop(test_stack)

    def test_peek(self):
        test_stack = empty_stack()
        test_stack = push(push(push(test_stack, "Hello"), "Good"), "Bye")

        self.assertEqual(peek(test_stack), "Bye")

        _, test_stack = pop(test_stack)
        self.assertEqual(peek(test_stack), "Good")

        _, test_stack = pop(test_stack)
        self.assertEqual(peek(test_stack), "Hello")

        _, test_stack = pop(test_stack)
        with self.assertRaises(IndexError):
            peek(test_stack)

    def test_size(self):
        test_stack = empty_stack()
        test_stack = push(push(push(test_stack, "Hello"), "Good"), "Bye")

        self.assertEqual(size(test_stack), 3)

        _, test_stack = pop(test_stack)
        self.assertEqual(size(test_stack), 2)

        _, test_stack = pop(test_stack)
        _, test_stack = pop(test_stack)
        self.assertEqual(size(test_stack), 0)

    def test_is_empty(self):
        test_stack = empty_stack()
        self.assertTrue(is_empty(test_stack))
        test_stack = push(push(push(test_stack, "Hello"), "Good"), "Bye")
        _, test_stack = pop(test_stack)
        self.assertFalse(is_empty(test_stack))
        _, test_stack = pop(test_stack)
        self.assertFalse(is_empty(test_stack))
        _, test_stack = pop(test_stack)
        self.assertTrue(is_empty(test_stack))

    def test00_interface(self):
        test_stack = empty_stack()
        test_stack = push(test_stack, "foo")
        peek(test_stack)
        test_stack = pop(test_stack)[1]
        size(test_stack)
        is_empty(test_stack)

if __name__ == "__main__":
    unittest.main()
