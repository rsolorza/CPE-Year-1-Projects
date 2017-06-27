import unittest
from postfix import *


class TestPostfix(unittest.TestCase):
    def test_add(self):
        self.assertEqual(postfix_calc("1 3 +"), 4.0)

    def test_multiply(self):
        self.assertEqual(postfix_calc("4 2 *"), 8.0)

    def test_divide(self):
        self.assertEqual(postfix_calc("8 2 /"), 4.0)
        self.assertEqual(postfix_calc("10 2 / 4 /"), 1.25)

    def test_subtract(self):
        self.assertEqual(postfix_calc("10 5 -"), 5.0)

    def test_misc(self):
        self.assertEqual(postfix_calc("8"), 8.0)
        self.assertEqual(postfix_calc("1 2 + 4 *"), 12.0)
        self.assertAlmostEqual(postfix_calc("-2.0 -3.0 * 4 - 5 + 6 /"), 1.16666666, msg="Testing mixed operations.")

    def test00_interface(self):
        postfix_calc("1 1 +")

if __name__ == "__main__":
    unittest.main()
