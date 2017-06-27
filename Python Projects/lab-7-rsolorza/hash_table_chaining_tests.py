from hash_table_chaining import *
import unittest


class TestCases(unittest.TestCase):
    def test_Hash_Table(self):
        test_1 = empty_hash_table()
        test_2 = empty_hash_table()
        self.assertEqual(test_1, test_2)
        self.assertEqual(test_1.__repr__(), "[None, None, None, None, None, None, None, None]")

    def test_empty_hash_table(self):
        self.assertEqual(empty_hash_table(), HashTable())

    # extend these tests later
    def test_insert(self):
        test_1 = empty_hash_table()
        values = [(1, "Test 1!"), (2, "Test 2!"), (3, "Test 3!"), (4, "Test 4!"),
                  (5, "Test 5!"), (6, "Test 6!"), (7, "Test 7!"), (8, "Test 8!"),
                  (9, "Test 9!"), (10, "Test 10!"), (11, "Test 11!"), (12, "Test 12!"),
                  (13, "Test 13!"), (14, "Test 14!"), (15, "Test 15!"), (16, "Test 16!")]
        for value_key in values:
            test_1 = insert(test_1, value_key[0], value_key[1])
        
        self.assertEqual(test_1.table_len, 16)
        self.assertEqual(test_1.num_items, 16)

    def test_get(self):
        test_1 = empty_hash_table()
        values = [(1, "Test 1!"), (2, "Test 2!"), (3, "Test 3!"), (4, "Test 4!"),
                  (5, "Test 5!"), (6, "Test 6!"), (7, "Test 7!"), (8, "Test 8!"),
                  (9, "Test 9!"), (10, "Test 10!"), (11, "Test 11!")]
        for value_key in values:
            test_1 = insert(test_1, value_key[0], value_key[1])

        self.assertEqual(get(test_1, 11), "Test 11!")
        self.assertEqual(get(test_1, 5), "Test 5!")

        with self.assertRaises(LookupError):
            get(test_1, 12)

    def test_remove(self):
        test_1 = empty_hash_table()
        values = [(1, "Test 1!"), (2, "Test 2!"), (3, "Test 3!"), (4, "Test 4!"),
                  (5, "Test 5!"), (6, "Test 6!"), (7, "Test 7!"), (8, "Test 8!"),
                  (9, "Test 9!"), (10, "Test 10!"), (11, "Test 11!")]
        for value_key in values:
            test_1 = insert(test_1, value_key[0], value_key[1])

        self.assertEqual(test_1.num_items, 11)
        self.assertEqual(get(test_1, 6), "Test 6!")

        test_1 = remove(test_1, 10)
        self.assertEqual(test_1.num_items, 10)
        self.assertEqual(test_1.table_len, 8)
        with self.assertRaises(LookupError):
            get(test_1, 10)

        with self.assertRaises(LookupError):
            remove(test_1, 15)

    def test_size(self):
        test_1 = empty_hash_table()
        values = [(1, "Test 1!"), (2, "Test 2!"), (3, "Test 3!"), (4, "Test 4!"),
                  (5, "Test 5!"), (6, "Test 6!"), (7, "Test 7!"), (8, "Test 8!"),
                  (9, "Test 9!"), (10, "Test 10!"), (11, "Test 11!")]
        for value_key in values:
            test_1 = insert(test_1, value_key[0], value_key[1])

        self.assertEqual(size(test_1), 11)
        test_1 = remove(test_1, 10)
        test_1 = remove(test_1, 1)
        self.assertEqual(size(test_1), 9)
        test_1 = remove(test_1, 2)
        test_1 = insert(test_1, 12, "Test 12")
        self.assertEqual(size(test_1), 9)

    def test_load_factor(self):
        test_1 = empty_hash_table()
        values = [(1, "Test 1!"), (2, "Test 2!"), (3, "Test 3!"), (4, "Test 4!"),
                  (5, "Test 5!"), (6, "Test 6!"), (7, "Test 7!"), (8, "Test 8!"),
                  (9, "Test 9!"), (10, "Test 10!"), (11, "Test 11!")]
        for value_key in values:
            test_1 = insert(test_1, value_key[0], value_key[1])

        self.assertEqual(load_factor(test_1), 1.375)
        test_1 = insert(test_1, 12, "Test 12!")
        test_1 = insert(test_1, 13, "Test 13!")
        test_1 = insert(test_1, 14, "Test 14!")
        test_1 = insert(test_1, 15, "Test 15!")
        test_1 = insert(test_1, 16, "Test 16!")
        self.assertEqual(load_factor(test_1), 1)

    def test_collisions(self):
        test_1 = empty_hash_table()
        values = [(1, "Test 1!"), (2, "Test 2!"), (3, "Test 3!"), (4, "Test 4!"),
                  (5, "Test 5!"), (6, "Test 6!"), (7, "Test 7!"), (8, "Test 8!"),
                  (9, "Test 9!"), (10, "Test 10!"), (11, "Test 11!")]
        for value_key in values:
            test_1 = insert(test_1, value_key[0], value_key[1])

        self.assertEqual(collisions(test_1), 3)
        test_1 = insert(test_1, 12, "Test 12!")
        test_1 = insert(test_1, 13, "Test 13!")
        test_1 = insert(test_1, 14, "Test 14!")
        test_1 = insert(test_1, 15, "Test 15!")
        test_1 = insert(test_1, 16, "Test 16!")
        self.assertEqual(collisions(test_1), 0)

        test_1 = insert(test_1, 16, "Test 17!")
        self.assertEqual(collisions(test_1), 1)

    def test_pair(self):
        temp_list1 = Pair("Hello!", Pair("Good", Pair("Bye", None)))
        temp_list2 = Pair("Hello!", Pair("Good", Pair("Bye", None)))

        self.assertEqual(temp_list1, temp_list2)
        self.assertEqual(temp_list1.__repr__(), "{'Hello!', {'Good', {'Bye', None}}}")

    def test_empty_list(self):
        self.assertEqual(empty_list(), None)

    def test_set(self):
        temp_list = Pair("Hello!", Pair("Good", Pair("Bye", None)))

        with self.assertRaises(IndexError):
            set(empty_list(), 1, "Test")
        with self.assertRaises(IndexError):
            set(temp_list, 3, "Test")
        with self.assertRaises(IndexError):
            set(temp_list, -3, "Test")

        self.assertEqual(set(temp_list, 1, "hello"), Pair("Hello!", Pair("hello", Pair("Bye", None))))

    def test_remove(self):
        temp_list = Pair("Hello!", Pair("Good", Pair("Bye", None)))
        tup = (remove_list(temp_list, 2))

        with self.assertRaises(IndexError):
            remove_list(empty_list(), 1)
        with self.assertRaises(IndexError):
            remove_list(temp_list, 3)
        with self.assertRaises(IndexError):
            remove_list(temp_list, -3)

        self.assertEqual(tup[0], "Bye")
        self.assertEqual(tup[1], Pair("Hello!", Pair("Good", None)))

if __name__ == "__main__":
    unittest.main()
