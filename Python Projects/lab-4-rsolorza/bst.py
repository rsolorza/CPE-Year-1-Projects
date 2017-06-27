

# a Value is a number representing a point in the tree
# a comes_before operation is a user-defined function, which determines if values are less than another value

# A BinarySearchTree is a wrapper class for TreeNode: it has contents comes_before, which defines the order of the ...
#  Bst and a Node which is a TreeNode
class BinarySearchTree:
    def __init__(self, comes_before, node=None):
        self.comes_before = comes_before
        self.node = node

    def __repr__(self):
        return "%s" % self.node

    def __eq__(self, other):
        return type(other) == BinarySearchTree and self.comes_before == other.comes_before and self.node == other.node


# a TreeNode is either
# - None
# - a NonEmptyTreeNode

# a NonEmptyTreeNode is a point in a NumTree with a value, a left TreeNode, and a right treeNode
# The left value is either less than the node value, or None
# The right value is either greater than the node value, or None
class TreeNode:
    def __init__(self, value, left, right):
        self.value = value                  # a Value
        self.left = left                    # a Left Value
        self.right = right                  # a Right Value

    def __repr__(self):
        return "{%r %r %r}" % (self.value, self.left, self.right)

    def __eq__(self, other):
        return type(other) == TreeNode and self.value == other.value and self.left == other.left \
               and self.right == other.right


# BST -> Boolean
# returns True if the given BST is empty, false if otherwise
def is_empty(bst):
    return bst.node is None


# BST, Value -> BST
# returns the given BST, with the value inserted at the proper position
def insert(bst, value):
    return BinarySearchTree(bst.comes_before, insert_help(bst.node, value, bst.comes_before))


def insert_help(node, value, comes_before):
    if node is None:
        return TreeNode(value, None, None)
    if comes_before(value, node.value):
        return TreeNode(node.value, insert_help(node.left, value, comes_before), node.right)
    return TreeNode(node.value, node.left, insert_help(node.right, value, comes_before))


# BST, Value -> Boolean
# returns True if a value is in the tree, False otherwise
def lookup(bst, value):
    return lookup_help(bst.node, value, bst.comes_before)


def lookup_help(node, value, comes_before):
    if node is None:
        return False
    if comes_before(value, node.value):
        return lookup_help(node.left, value, comes_before)
    if comes_before(node.value, value):
        return lookup_help(node.right, value, comes_before)
    return True


# BST, Value -> BST
# returns a BST where a given value is removed from a given BST
def delete(bst, value):
    return BinarySearchTree(bst.comes_before, delete_help(bst.node, value, bst.comes_before))


def delete_help(tree_node, value, comes_before):
    # If gets to end of BST
    if tree_node is None or (tree_node.left is None and tree_node.right is None):
        return None

    # If current BST value is not value you are looking for
    if comes_before(value, tree_node.value) and not comes_before(tree_node.value, value):
        return TreeNode(tree_node.value, delete_help(tree_node.left, value, comes_before), tree_node.right)
    if comes_before(tree_node.value, value) and not comes_before(value, tree_node.value):
        return TreeNode(tree_node.value, tree_node.left, delete_help(tree_node.right, value, comes_before))

    # If one of children is None
    if tree_node.left is None and tree_node.right is not None:
        return tree_node.right
    if tree_node.right is None and tree_node.left is not None:
        return tree_node.left

    # If neither children are None
    smallest_value = find_smallest_element(tree_node.right)
    tree_node.right = delete_help(tree_node.right, smallest_value, comes_before)
    tree_node.value = smallest_value
    return tree_node


# BST -> Value
# returns the smallest value of a given BST
def find_smallest_element(a_node):
    if a_node.left is None:
        return a_node.value
    return find_smallest_element(a_node.left)


# BST -> Iterator
# Yields the next object of a list from top to bottom, left, then right
def prefix_iterator(bst):
    if bst.node is None:
        raise StopIteration

    yield bst.node.value
    temp = BinarySearchTree(bst.comes_before, bst.node.left)
    yield from prefix_iterator(temp)
    temp2 = BinarySearchTree(bst.comes_before, bst.node.right)
    yield from prefix_iterator(temp2)


# BST -> Iterator
# Yields the next object of a list, where the left is visited first, then current, then right
def infix_iterator(bst):
    if bst.node is None:
        raise StopIteration

    temp1 = BinarySearchTree(bst.comes_before, bst.node.left)
    yield from infix_iterator(temp1)
    yield bst.node.value
    temp2 = BinarySearchTree(bst.comes_before, bst.node.right)
    yield from infix_iterator(temp2)


# BST -> Iterator
# Yields the next object of a list from top to bottom, right, then left
def postfix_iterator(bst):
    if bst.node is None:
        raise StopIteration
    yield bst.node.value
    temp1 = BinarySearchTree(bst.comes_before, bst.node.right)
    yield from postfix_iterator(temp1)
    temp2 = BinarySearchTree(bst.comes_before, bst.node.left)
    yield from postfix_iterator(temp2)
