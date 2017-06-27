import unittest


# * Section 1 (Lists)

# * dd: NumList Data Definition
# A Head is a number representing a value in a List
# A Tail is a NumList

# A NumList is one of:
# - "mt"
# - a Pair(Head, Tail)
class Pair:
    def __init__(self, head, tail):
        self.head = head  # a Head
        self.tail = tail  # a Tail

    def __eq__(self, other):
        return type(other) == Pair and self.head == other.head and self.tail == other.tail

    def __repr__(self):
        return "%r, %r" % (self.head, self.tail)


# * 1:
# NumList -> int
# returns the length of a given NumList
def length(num_list, size=0):
    if num_list == "mt":
        return size
    return length(num_list.tail, size+1)


# * 2:
# NumList -> int
# returns the summed value of all the numbers in a given NumList
def sum(num_list):
    if num_list == "mt":
        return 0
    return sum(num_list.tail) + num_list.head


# * 3:
# NumList, int -> int
# returns a number representing the number of elements greater than a given threshold in a given NumList
def count_greater_than(num_list, threshold):
    counter = 0
    if num_list == "mt":
        return counter
    if num_list.head > threshold:
        counter += 1
    return counter + count_greater_than(num_list.tail, threshold)


# * 4:
# NumList, int -> int
# returns index of a given value from a given NumList, returns "mt" if not in the list
def find(num_list, value, index=0):
    if num_list == "mt":
        return None
    if num_list.head == value:
        return index
    return find(num_list.tail, value, index + 1)


# * 5:
# NumList -> NumList
# returns a NumList which each value is one less than a given NumList
def sub_one_map(num_list):
    if num_list == "mt":
        return "mt"
    return Pair(num_list.head - 1, sub_one_map(num_list.tail))


# * 6:
# NumList, int -> NumList
# returns a sorted NumList with a given SORTED NumList, and an addition of a given int
def insert(num_list, value):
    if num_list == "mt":
        return Pair(value, "mt")
    if num_list.head < value:
        return Pair(num_list.head, insert(num_list.tail, value))
    else:
        return Pair(value, num_list)


# * Tests : the test case class for the list functions
class TestCase(unittest.TestCase):
    def test_List(self):
        pair1 = Pair(1, Pair(2, "mt"))
        pair2 = Pair(1, Pair(2, "mt"))
        self.assertEqual(pair1, pair2)
        self.assertEqual(pair1.__repr__(), "1, 2, 'mt'")

    def test_length(self):
        self.assertEqual(length("mt"), 0)
        self.assertEqual(length(Pair(2, "mt")), 1)
        self.assertEqual(length(Pair(1, Pair(2, "mt"))), 2)
        self.assertEqual(length(Pair(2, Pair(1, Pair(4, "mt")))), 3)

    def test_sum_list(self):
        self.assertEqual(sum(Pair(2, Pair(1, Pair(4, "mt")))), 7)
        self.assertEqual(sum(Pair(1, Pair(1, Pair(1, "mt")))), 3)
        self.assertEqual(sum(Pair(200, Pair(100, Pair(40, "mt")))), 340)
        self.assertEqual(sum(Pair(0, Pair(0, Pair(0, "mt")))), 0)
        self.assertEqual(sum("mt"), 0)

    def test_count_greater_than(self):
        self.assertEqual(count_greater_than(Pair(1, Pair(3, Pair(5, "mt"))), 2), 2)
        self.assertEqual(count_greater_than(Pair(1, Pair(3, Pair(5, "mt"))), 3), 1)
        self.assertEqual(count_greater_than(Pair(1, Pair(3, Pair(5, "mt"))), 5), 0)
        self.assertEqual(count_greater_than(Pair(1, Pair(3, Pair(5, "mt"))), 0), 3)
        self.assertEqual(count_greater_than(Pair(0, Pair(0, Pair(0, "mt"))), 0), 0)
        self.assertEqual(count_greater_than("mt", 2), 0)

    def test_find(self):
        self.assertEqual(find(Pair(1, "mt"), 1), 0)
        self.assertEqual(find(Pair(1, "mt"), 0), None)
        self.assertEqual(find("mt", 0), None)
        self.assertEqual(find(Pair(1, Pair(10, "mt")), 10), 1)
        self.assertEqual(find(Pair(1, Pair(10, Pair(2, "mt"))), 2), 2)
        self.assertEqual(find(Pair(0, Pair(0, Pair(0, "mt"))), 0), 0)

    def test_sub_one_map(self):
        pair1 = Pair(1, Pair(10, Pair(2, "mt")))
        pair2 = sub_one_map(pair1)
        pair3 = sub_one_map(pair2)
        pair4 = sub_one_map("mt")
        self.assertIsInstance(pair2, Pair)
        self.assertEqual(pair2, Pair(0, Pair(9, Pair(1, "mt"))))
        self.assertEqual(pair3, Pair(-1, Pair(8, Pair(0, "mt"))))
        self.assertEqual(pair4, "mt")

    def test_insert(self):
        list1 = Pair(1, Pair(2, Pair(4, Pair(5, Pair(8, Pair(10, "mt"))))))
        list2 = "mt"
        list3 = Pair(1, Pair(1, Pair(1, Pair(1, Pair(2, Pair(5, "mt"))))))

        self.assertEqual(insert(list1, 3), Pair(1, Pair(2, Pair(3, Pair(4, Pair(5, Pair(8, Pair(10, "mt"))))))))
        self.assertEqual(insert(list2, 0), Pair(0, "mt"))
        self.assertEqual(insert(list1, 12), Pair(1, Pair(2, Pair(4, Pair(5, Pair(8, Pair(10, Pair(12, "mt"))))))))
        self.assertEqual(insert(list3, 1), Pair(1, Pair(1, Pair(1, Pair(1, Pair(1, Pair(2, Pair(5, "mt"))))))))

if __name__ == "__main__":
    unittest.main()
