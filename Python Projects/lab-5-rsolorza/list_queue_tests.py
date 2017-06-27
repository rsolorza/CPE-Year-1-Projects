import unittest
from list_queue import *


class TestQueue(unittest.TestCase):
    def test_class(self):
        test_queue = empty_queue()
        test_queue = enqueue(test_queue, "Test")
        test_queue = enqueue(test_queue, "foo")

        test_queue2 = empty_queue()
        test_queue2 = enqueue(test_queue2, "Test")
        test_queue2 = enqueue(test_queue2, "foo")

        self.assertEqual(test_queue, test_queue2)
        self.assertEqual(test_queue.__repr__(), "{'Test', None}{'foo', None}")

    def test_empty(self):
        test_queue = empty_queue()
        self.assertEqual(test_queue.front, None)
        self.assertEqual(test_queue.reverse, None)
        self.assertEqual(test_queue.queue_len, 0)

    def test_enqueue(self):
        test_queue = empty_queue()
        test_queue = enqueue(enqueue(enqueue(test_queue, "Test1"), "Test2"), "Test3")

        self.assertEqual(test_queue.front, Pair("Test1", None))
        self.assertEqual(test_queue.reverse, Pair("Test3", Pair("Test2", None)))
        self.assertEqual(test_queue.queue_len, 3)

        test_queue = dequeue(test_queue)[1]
        self.assertEqual(test_queue.front, Pair("Test2", Pair("Test3", None)))
        self.assertEqual(test_queue.queue_len, 2)

        test_queue = enqueue(test_queue, "Test4")
        self.assertEqual(test_queue.reverse, Pair("Test4", None))
        self.assertEqual(test_queue.queue_len, 3)

    def test_dequeue(self):
        test_queue = empty_queue()
        with self.assertRaises(IndexError):
            dequeue(test_queue)

        test_queue = enqueue(test_queue, "Test")
        test_queue = enqueue(test_queue, "foo")
        test_queue = enqueue(test_queue, "fuu")

        test_queue = dequeue(test_queue)[1]
        self.assertEqual(test_queue.front, Pair("foo", Pair("fuu", None)))
        self.assertEqual(test_queue.reverse, None)

        test_queue = dequeue(test_queue)[1]
        self.assertEqual(test_queue.front, Pair("fuu", None))

        test_queue = dequeue(test_queue)[1]
        self.assertEqual(test_queue, empty_queue())

    def test_peek(self):
        test_queue = empty_queue()
        with self.assertRaises(IndexError):
            peek(test_queue)

        test_queue = enqueue(enqueue(enqueue(test_queue, "Test1"), "Test2"), "Test3")
        self.assertEqual(peek(test_queue), "Test1")

        _, test_queue = dequeue(test_queue)

        self.assertEqual(peek(test_queue), "Test2")

    def test_size(self):
        test_queue = empty_queue()
        test_queue = enqueue(enqueue(enqueue(test_queue, "Test1"), "Test2"), "Test3")

        self.assertEqual(size(empty_queue()), 0)
        self.assertEqual(size(test_queue), 3)

        _, test_queue = dequeue(test_queue)
        self.assertEqual(size(test_queue), 2)

    def test_is_empty(self):
        test_queue = empty_queue()
        test_queue = enqueue(enqueue(enqueue(test_queue, "Test1"), "Test2"), "Test3")

        self.assertTrue(is_empty(empty_queue()))
        self.assertFalse(is_empty(test_queue))

        _, test_queue = dequeue(test_queue)
        _, test_queue = dequeue(test_queue)
        _, test_queue = dequeue(test_queue)
        self.assertTrue(is_empty(test_queue))

    def test00_interface(self):
        test_queue = empty_queue()
        test_queue = enqueue(test_queue, "foo")
        peek(test_queue)
        _, test_queue = dequeue(test_queue)
        size(test_queue)
        is_empty(test_queue)

if __name__ == "__main__":
    unittest.main()
