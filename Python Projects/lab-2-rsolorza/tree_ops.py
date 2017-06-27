import unittest
# * Section 2 (Trees)


# * dd: NumTree Data Definition
# a Value == a number representing a point in the tree

# a NumTree is either
# - "mt"
# - a TreeNode
# a TreeNode is a point in a NumTree with a value, a left NumTree, and a right NumTree
class TreeNode:
    def __init__(self, value, left, right):
        self.value = value  # a Value
        self.left = left    # a NumTree
        self.right = right  # a NumTree

    def __repr__(self):
        return "{%r %r %r}" % (self.value, self.left, self.right)

    def __eq__(self, other):
        return type(other) == TreeNode and self.value == other.value and self.left == other.left \
               and self.right == other.right


# * 1:
# NumTree -> int
# returns an int representing the number of values a given NumTree has
def size(tree):
    if tree == "mt":
        return 0
    return 1 + size(tree.left) + size(tree.right)


# * 2:
# NumTree -> int
# returns an int representing the number of leaves (TreeNode with both subsection being empty) a given NumTree has
def num_leaves(tree):
    return_value = 0
    if tree == "mt":
        return 0
    if tree.left == "mt" and tree.right == "mt":
        return 1
    if tree.left != "mt":
        return_value += num_leaves(tree.left)
    if tree.right != "mt":
        return_value += num_leaves(tree.right)
    return num_leaves(tree.left) + num_leaves(tree.right)


# * 3:
# NumTree -> int
# returns an int representing the summed values of a given NumTree
def sum(tree):
    if tree == "mt":
        return 0
    return tree.value + sum(tree.left) + sum(tree.right)


# * 4:
def height(tree):
    # *Grabs lemonade*
    pass


# * 5:
# NumTree -> boolean
# returns true if there is a TreeNode that has a value(n) that is 3 times larger than any of its subvalues(3n)
def has_triple(tree):
    if tree == "mt":
        return False
    if tree.left != "mt":
        if 3 * tree.value == tree.left.value:
            return True
    if tree.right != "mt":
        if 3 * tree.value == tree.right.value:
            return True
    return has_triple(tree.left) or has_triple(tree.right)


# * 6:
# NumTree -> NumTree
# returns a NumTree that each value is 1 less than a given NumTree
def sub_one_map(tree):
    if tree == "mt":
        return "mt"
    return TreeNode(tree.value - 1, sub_one_map(tree.left), sub_one_map(tree.right))


# * Tests : the test case class for the tree functions
class TestCase(unittest.TestCase):
    def test_Tree(self):
        tree1 = TreeNode(1, "mt", "mt")
        tree2 = TreeNode(1, "mt", "mt")
        self.assertEqual(tree1, tree2)
        self.assertEqual(tree1.__repr__(), "{1 'mt' 'mt'}")

    def test_size(self):
        self.assertEqual(size(TreeNode(1, "mt", "mt")), 1)
        self.assertEqual(size(TreeNode(1, TreeNode(2, "mt", TreeNode(5, "mt", "mt")), "mt")), 3)
        self.assertEqual(size("mt"), 0)

    def test_num_leaves(self):
        self.assertEqual(num_leaves(TreeNode(1, "mt", "mt")), 1)
        self.assertEqual(num_leaves(TreeNode(1, TreeNode(1, "mt", "mt"), TreeNode(1, "mt", "mt"))), 2)
        self.assertEqual(num_leaves(TreeNode(1, TreeNode(1, "mt", "mt"), "mt")), 1)
        self.assertEqual(num_leaves("mt"), 0)

    def test_sum_tree(self):
        self.assertEqual(sum(TreeNode(1, "mt", "mt")), 1)
        self.assertEqual(sum(TreeNode(1, TreeNode(3, "mt", "mt"), TreeNode(2, "mt", "mt"))), 6)
        self.assertEqual(sum(TreeNode(1, TreeNode(10, "mt", "mt"), "mt")), 11)
        self.assertEqual(sum("mt"), 0)

    def test_height(self):
        height("mt")

    def test_has_triple(self):
        self.assertFalse(has_triple(TreeNode(1, "mt", "mt")))
        self.assertTrue(has_triple(TreeNode(1, TreeNode(3, "mt", "mt"), TreeNode(2, "mt", "mt"))))
        self.assertTrue(has_triple(TreeNode(1, TreeNode(2, "mt", "mt"), TreeNode(3, "mt", "mt"))))
        self.assertFalse(has_triple(TreeNode(2, TreeNode(3, "mt", "mt"), TreeNode(2, "mt", "mt"))))
        self.assertFalse(has_triple(TreeNode(1, "mt", TreeNode(2, "mt", "mt"))))
        self.assertTrue(has_triple(TreeNode(1, TreeNode(3, "mt", "mt"), "mt")))
        self.assertFalse(has_triple("mt"))

    def test_sub_one_map(self):
        tree1 = TreeNode(1, TreeNode(3, "mt", "mt"), TreeNode(2, "mt", "mt"))
        tree2 = TreeNode(1, "mt", "mt")
        tree3 = TreeNode(1, TreeNode(3, "mt", "mt"), "mt")
        tree4 = TreeNode(1, "mt", TreeNode(2, "mt", "mt"))

        self.assertEqual(sub_one_map(tree1), TreeNode(0, TreeNode(2, "mt", "mt"), TreeNode(1, "mt", "mt")))
        self.assertEqual(sub_one_map(tree2), TreeNode(0, "mt", "mt"))
        self.assertEqual(sub_one_map(tree3), TreeNode(0, TreeNode(2, "mt", "mt"), "mt"))
        self.assertEqual(sub_one_map(tree4), TreeNode(0, "mt", TreeNode(1, "mt", "mt")))
        self.assertEqual(sub_one_map("mt"), "mt")

if __name__ == "__main__":
    unittest.main()
