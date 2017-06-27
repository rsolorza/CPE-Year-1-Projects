import random
import unittest
from circular_queue import *


class TestQueue(unittest.TestCase):
    def test_class(self):
        test_queue = empty_queue()
        test_queue = enqueue(test_queue, "Test")
        test_queue = enqueue(test_queue, "foo")

        test_queue2 = empty_queue()
        test_queue2 = enqueue(test_queue2, "Test")
        test_queue2 = enqueue(test_queue2, "foo")

        self.assertEqual(test_queue, test_queue2)
        self.assertEqual(test_queue.__repr__(), "['Test', 'foo']")
        self.assertEqual(empty_queue().__repr__(), "[]")

        for i in range(4998):
            test_queue = enqueue(test_queue, "Test")
        for i in range(4995):
            test_queue = dequeue(test_queue)[1]
        test_queue = enqueue(test_queue, "Blah")
        self.assertEqual(test_queue.__repr__(), "['Test', 'Test', 'Test', 'Test', 'Test']['Blah']")

    def test_empty_queue(self):
        self.assertEqual(empty_queue().queue_contents, [None] * 5000)
        self.assertEqual(size(empty_queue()), 0)

    def test_enqueue(self):
        test_queue = empty_queue()
        for i in range(5000):
            test_queue = enqueue(test_queue, "Test")

        self.assertEqual(test_queue.queue_contents, ["Test"]*5000)

        with self.assertRaises(IndexError):
            test_queue = enqueue(test_queue, "Test")

        for i in range (4998):
            _, test_queue = dequeue(test_queue)
        test_queue = enqueue(test_queue, "Test")
        test_queue = enqueue(test_queue, "Test")
        test_queue = enqueue(test_queue, "Test")
        self.assertEqual(test_queue.__repr__(), "['Test', 'Test']['Test', 'Test', 'Test']")

    def test_dequeue(self):
        test_queue = empty_queue()
        temp_queue = empty_queue()
        temp_queue.front = 2
        temp_queue.back = 3

        with self.assertRaises(IndexError):
            dequeue(test_queue)
        test_queue = enqueue(test_queue, "Test")
        test_queue = enqueue(test_queue, "foo")
        test_queue = enqueue(test_queue, "fuu")

        test_queue = dequeue(test_queue)[1]
        self.assertEqual(test_queue.__repr__(), "['foo', 'fuu']")
        test_queue = dequeue(test_queue)[1]
        self.assertEqual(test_queue.__repr__(), "['fuu']")
        test_queue = dequeue(test_queue)[1]

        self.assertEqual(test_queue, temp_queue)

        test_queue = empty_queue()
        for i in range(5000):
            test_queue = enqueue(test_queue, "Test")
        test_queue = dequeue(test_queue)[1]
        test_queue = dequeue(test_queue)[1]
        test_queue = dequeue(test_queue)[1]
        test_queue = enqueue(test_queue, "Test")
        test_queue = enqueue(test_queue, "Test")
        for i in range(4995):
            test_queue = dequeue(test_queue)[1]
        self.assertEqual(test_queue.__repr__(), "['Test', 'Test']['Test', 'Test']")

        test_queue = dequeue(test_queue)[1]
        test_queue = dequeue(test_queue)[1]
        test_queue = dequeue(test_queue)[1]
        self.assertEqual(test_queue.__repr__(), "['Test']")

    def test_peek(self):
        test_queue = empty_queue()
        with self.assertRaises(IndexError):
            peek(test_queue)

        self.assertEqual(peek(enqueue(enqueue(enqueue(empty_queue(), 3), 2), 1)), 3)
        self.assertEqual(peek(enqueue(enqueue(empty_queue(), 2), 1)), 2)

    def test00_interface(self):
        test_queue = empty_queue()
        test_queue = enqueue(test_queue, "foo")
        peek(test_queue)
        _, test_queue = dequeue(test_queue)
        size(test_queue)
        is_empty(test_queue)

if __name__ == "__main__":
    unittest.main()
