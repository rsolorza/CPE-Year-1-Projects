from bst import *
import unittest


def less_than(a, b):
    return a < b


class TestCase(unittest.TestCase):
    def test_prefix_iterator(self):
        tree1 = BinarySearchTree(less_than)
        tree1 = insert(insert(insert(insert(insert(insert(insert(tree1, 14), 3), 8), 1), 5), 10), 15)
        tree_itr = prefix_iterator(tree1)
        self.assertEqual(next(tree_itr), 14)
        self.assertEqual(next(tree_itr), 3)
        self.assertEqual(next(tree_itr), 1)
        self.assertEqual(next(tree_itr), 8)
        self.assertEqual(next(tree_itr), 5)
        self.assertEqual(next(tree_itr), 10)
        self.assertEqual(next(tree_itr), 15)
        with self.assertRaises(StopIteration):
            next(tree_itr)

    def test_infix_iterator(self):
        tree1 = BinarySearchTree(less_than)
        tree1 = insert(insert(insert(insert(insert(insert(insert(tree1, 14), 3), 8), 1), 5), 10), 15)
        tree_itr = infix_iterator(tree1)
        self.assertEqual(next(tree_itr), 1)
        self.assertEqual(next(tree_itr), 3)
        self.assertEqual(next(tree_itr), 5)
        self.assertEqual(next(tree_itr), 8)
        self.assertEqual(next(tree_itr), 10)
        self.assertEqual(next(tree_itr), 14)
        self.assertEqual(next(tree_itr), 15)
        with self.assertRaises(StopIteration):
            next(tree_itr)

    def test_postfix_iterator(self):
        tree1 = BinarySearchTree(less_than)
        tree1 = insert(insert(insert(insert(insert(insert(insert(tree1, 14), 3), 8), 1), 5), 10), 15)
        tree_itr = postfix_iterator(tree1)
        self.assertEqual(next(tree_itr), 14)
        self.assertEqual(next(tree_itr), 15)
        self.assertEqual(next(tree_itr), 3)
        self.assertEqual(next(tree_itr), 8)
        self.assertEqual(next(tree_itr), 10)
        self.assertEqual(next(tree_itr), 5)
        self.assertEqual(next(tree_itr), 1)
        with self.assertRaises(StopIteration):
            next(tree_itr)


if __name__ == "__main__":
    unittest.main()
