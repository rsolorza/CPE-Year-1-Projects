from linked_list import Pair
from linked_list import yield_iterator
import unittest


class TestCases(unittest.TestCase):
    def test_yield_iterator(self):
        temp_list = (Pair(1, Pair(2, Pair(3, Pair(5, Pair(7, Pair(11, Pair(13, Pair(17, Pair(19, None))))))))))
        temp = yield_iterator(temp_list)
        self.assertEqual(next(temp), 1)
        self.assertEqual(next(temp), 2)
        self.assertEqual(next(temp), 3)
        self.assertEqual(next(temp), 5)
        next(temp), next(temp), next(temp), next(temp), next(temp)
        with self.assertRaises(StopIteration):
            next(temp)


if __name__ == "__main__":
    unittest.main()
