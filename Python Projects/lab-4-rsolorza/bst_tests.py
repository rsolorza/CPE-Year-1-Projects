from bst import *
import unittest
import random


# Value, Value -> Boolean
# returns True if a is less than b, false if otherwise; default function for comes_before
def less_than(a, b):
    return a < b


def abs_less_than(a, b):
    return abs(a) < abs(b)


class TestCase(unittest.TestCase):
    def test_Tree_Node(self):
        tree1 = TreeNode(1, None, None)
        tree2 = TreeNode(1, None, None)
        self.assertEqual(tree1, tree2)
        self.assertEqual(tree1.__repr__(), "{1 None None}")

    def test_Binary_Search_Tree(self):
        tree1 = BinarySearchTree(less_than, TreeNode(1, None, None))
        tree2 = BinarySearchTree(less_than, TreeNode(1, None, None))
        self.assertEqual(tree1, tree2)
        self.assertEqual(tree1.__repr__(), "{1 None None}")

    def test_is_empty(self):
        tree1 = BinarySearchTree(less_than)
        tree2 = BinarySearchTree(less_than, TreeNode(1, None, None))

        self.assertTrue(is_empty(tree1))
        self.assertFalse(is_empty(tree2))

    def test_insert(self):
        tree1 = BinarySearchTree(less_than)
        tree1 = insert(insert(insert(insert(insert(insert(insert(tree1, 14), 3), 8), 1), 5), 10), 15)
        self.assertEqual(tree1.node.value, 14)
        self.assertEqual(tree1.node,
                         TreeNode(14, TreeNode(3, TreeNode(1, None, None), TreeNode(8, TreeNode(5, None, None),
                         TreeNode(10, None, None))), TreeNode(15, None, None)))

    def test_lookup(self):
        tree1 = BinarySearchTree(less_than)
        tree1 = insert(insert(insert(insert(insert(insert(insert(tree1, 14), 3), 8), 1), 5), 10), 15)
        self.assertTrue(lookup(tree1, 10))
        self.assertTrue(lookup(tree1, 15))
        self.assertTrue(lookup(tree1, 1))
        self.assertFalse(lookup(tree1, 13))

    def test_delete(self):
        tree1 = BinarySearchTree(less_than)
        tree1 = insert(insert(insert(insert(insert(insert(insert(tree1, 14), 3), 8), 1), 5), 20), 15)
        tree1 = delete(tree1, 1)
        self.assertEqual(tree1.node,
                         TreeNode(14, TreeNode(3, None, TreeNode(8, TreeNode(5, None, None), None)),
                                  TreeNode(20, TreeNode(15, None, None), None)))

        tree1 = delete(tree1, 14)
        self.assertEqual(tree1.node,
                         TreeNode(15, TreeNode(3, None, TreeNode(8, TreeNode(5, None, None), None)),
                                  TreeNode(20, None, None)))
        tree1 = delete(tree1, 5)
        self.assertEqual(tree1.node,
                         TreeNode(15, TreeNode(3, None, TreeNode(8, None, None)),
                                  TreeNode(20, None, None)))
        tree1 = delete(tree1, 3)
        self.assertEqual(tree1.node,
                         TreeNode(15, TreeNode(8, None, None), TreeNode(20, None, None)))
        tree1 = delete(delete(tree1, 20), 15)
        self.assertEqual(tree1.node, TreeNode(8, None, None))

    def test_less_than(self):
        tree1 = BinarySearchTree(abs_less_than)
        tree1 = insert(insert(insert(insert(insert(insert(insert(tree1, 14), -3), -8), 1), 5), -20), 15)
        tree2 = BinarySearchTree(less_than)
        tree2 = insert(insert(insert(insert(insert(insert(insert(tree2, 14), -3), -8), 1), 5), -20), 15)

        self.assertNotEqual(tree1, tree2)
        self.assertEqual(tree1.node,
                         TreeNode(14, TreeNode(-3, TreeNode(1, None, None), TreeNode(-8, TreeNode(5, None, None), None)),
                                  TreeNode(-20, TreeNode(15, None, None), None)))

if __name__ == '__main__':
    unittest.main()
