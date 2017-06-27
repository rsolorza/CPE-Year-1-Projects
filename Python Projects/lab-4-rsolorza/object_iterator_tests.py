import linked_list
from linked_list import Pair
from linked_list import Iterator

import unittest


class TestCase(unittest.TestCase):
    def test_iterator(self):
        list1 = Pair(1, Pair(2, Pair(3, Pair(5, Pair(7, Pair(11, Pair(13, Pair(17, Pair(19, None)))))))))
        itr1 = Iterator(list1)
        itr2 = Iterator(list1)

        self.assertEqual(itr1, itr2)
        self.assertEqual(itr1.__repr__(),
                         "Iterator for Linked List: {1, {2, {3, {5, {7, {11, {13, {17, {19, None}}}}}}}}}")

    def test_object_iterator(self):
        list1 = Pair(1, Pair(2, Pair(3, Pair(5, Pair(7, Pair(11, Pair(13, Pair(17, Pair(19, None)))))))))
        test_itr = linked_list.object_iterator(list1)
        self.assertEqual(test_itr, Iterator(list1))

    def test_has_next(self):
        test_itr = Iterator(Pair(1, Pair(2, Pair(3, Pair(5, Pair(7, Pair(11, Pair(13, Pair(17, Pair(19, None))))))))))
        self.assertTrue(linked_list.has_next(test_itr))
        for i in range(8):
            linked_list.next(test_itr)
        self.assertTrue(linked_list.has_next(test_itr))
        linked_list.next(test_itr)
        self.assertFalse(linked_list.has_next(test_itr))

    def test_next_item(self):
        test_itr = Iterator(Pair(1, Pair(2, Pair(3, Pair(5, Pair(7, Pair(11, Pair(13, Pair(17, Pair(19, None))))))))))
        self.assertEqual(linked_list.next(test_itr), 1)
        for i in range(7):
            linked_list.next(test_itr)
        self.assertEqual(linked_list.next(test_itr), 19)
        with self.assertRaises(StopIteration):
            linked_list.next(test_itr)


if __name__ == "__main__":
    unittest.main()
