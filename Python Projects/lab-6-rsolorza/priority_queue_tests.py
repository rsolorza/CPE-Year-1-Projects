from priority_queue import *
import unittest


# value, value -> Boolean
# returns True if the first value is less than the second, false if otherwise
def comes_before(a, b):
    return a < b


class TestCases(unittest.TestCase):
    def test_priority_queue(self):
        test_1 = empty_pqueue(comes_before)
        test_1 = enqueue(enqueue(enqueue(test_1, 2), 9), 1)
        test_2 = empty_pqueue(comes_before)
        test_2 = enqueue(enqueue(enqueue(test_2, 1), 9), 2)

        self.assertEqual(test_1, test_2)
        self.assertEqual(test_1.__repr__(), "{1, {2, {9, None}}}")

    def test_empty_queue(self):
        self.assertEqual(empty_pqueue(comes_before), PriorityQueue(comes_before, None))

    def test_enqueue(self):
        test_1 = empty_pqueue(comes_before)
        test_1 = enqueue(enqueue(enqueue(enqueue(test_1, 2), 9), 1), 5)

        self.assertEqual(test_1.p_list.__repr__(),"{1, {2, {5, {9, None}}}}")

    def test_dequeue(self):
        test_1 = empty_pqueue(comes_before)
        test_1 = enqueue(enqueue(enqueue(enqueue(test_1, 2), 9), 1), 5)

        with self.assertRaises(IndexError):
            dequeue(empty_pqueue(comes_before))

        self.assertEqual(dequeue(test_1),
                         (1, enqueue(enqueue(enqueue(empty_pqueue(comes_before), 2), 5), 9)))

        self.assertEqual(dequeue(dequeue(test_1)[1]),
                         (2, enqueue(enqueue(empty_pqueue(comes_before), 5), 9)))

    def test_peek(self):
        test_1 = empty_pqueue(comes_before)
        test_1 = enqueue(enqueue(enqueue(enqueue(test_1, 2), 9), 1), 5)

        with self.assertRaises(IndexError):
            peek(empty_pqueue(comes_before))

        self.assertEqual(peek(test_1), 1)

        _, test_1 = dequeue(test_1)
        self.assertEqual(peek(test_1), 2)

    def test_size(self):
        test_1 = empty_pqueue(comes_before)
        test_1 = enqueue(enqueue(enqueue(enqueue(test_1, 2), 9), 1), 5)

        self.assertEqual(size(empty_pqueue(comes_before)), 0)
        self.assertEqual(size(test_1), 4)

        _, test_1 = dequeue(test_1)
        self.assertEqual(size(test_1), 3)

    def test_is_empty(self):
        test_1 = empty_pqueue(comes_before)
        test_1 = enqueue(enqueue(enqueue(enqueue(test_1, 2), 9), 1), 5)

        self.assertTrue(is_empty(empty_pqueue(comes_before)))
        self.assertFalse(is_empty(test_1))

        _, test_1 = dequeue(test_1)
        _, test_1 = dequeue(test_1)
        _, test_1 = dequeue(test_1)
        self.assertFalse(is_empty(test_1))

        _, test_1 = dequeue(test_1)
        self.assertTrue(is_empty(test_1))


if __name__ == '__main__':
    unittest.main()
