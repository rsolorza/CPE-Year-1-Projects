from huffman_bits_io import *
import array_list
import linked_list
import os
import unittest


"""
blank_hash_table = array_list.empty_list()


def build_hash():
    global blank_hash_table
    for i in range(256):
        blank_hash_table = array_list.add(blank_hash_table, i, 0)


def reset_hash():
    global blank_hash_table
    for i in range(256):
        blank_hash_table = array_list.set(blank_hash_table, i, 0)
"""


# A Huffman Tree is either:
# - a Node
# - A leaf
# A Huffman Leaf holds the ASCII representation of a character, and the frequency it appears in a file
class HuffmanLeaf:
    def __init__(self, num_representation, frequency):
        self.num_representation = num_representation    # An ASCII value, as an unsigned int
        self.frequency = frequency                      # an int representing frequency of character

    def __repr__(self):
        return "{%d %d}" % (self.num_representation, self.frequency)

    def __eq__(self, other):
        return type(other) == HuffmanLeaf and self.num_representation == other.num_representation and \
               self.frequency == other.frequency


# a Huffman Node represents an internal Node that contains a character value, a frequency, and a left and right subtree
# Left subtree's frequency is less than the right subtree, if frequencies are equal, then you compare ASCII values
class HuffmanNode:
    def __init__(self, num_representation, frequency, left, right):
        self.num_representation = num_representation    # an ASCII value, as an unsigned int
        self.frequency = frequency                      # an int representing frequency of left and right nodes
        self.right = right                              # A HuffmanTree
        self.left = left                                # A HuffmanTree

    def __repr__(self):
        return "[%d, %d] (%r %r)" % (self.num_representation, self.frequency, self.left, self.right)

    def __eq__(self, other):
        return type(other) == HuffmanNode and self.num_representation == other.num_representation and \
               self.frequency == other.frequency and self.left == other.left and self.right == other.right


# A HuffmanCharacter represents an encoded character, with properties ASCII_Value, binary_representation, and frequency
class HuffmanCharacter:
    def __init__(self, ascii_value, binary_representation, frequency):
        self.ascii_value = ascii_value                      # ASCII value as an unsigned int
        self.binary_representation = binary_representation  # String of 0's and 1's which represents huffman code
        self.frequency = frequency                          # int representing number of times character appears in file

    def __repr__(self):
        return "ASCII Value: %d, Huffman Value: %s, Frequency: %d\n" % \
               (self.ascii_value, self.binary_representation, self.frequency)

    def __eq__(self, other):
        return type(other) == HuffmanCharacter and self.ascii_value == other.ascii_value and \
            self.binary_representation == other.binary_representation and self.frequency == other.frequency


# None -> ArrayList
# Returns an ArrayList of length 256 with all 0's
def build_empty_hash_table():
    empty_hash = array_list.empty_list()
    for i in range(256):
        empty_hash = array_list.add(empty_hash, i, 0)
    return empty_hash


# String -> ArrayList
# function takes in a String, which is the name to a file, and outputs an ArrayList with the number of instances ...
# of characters in that file are counted. Note, file HAS TO BE a proper file, which is handled in HuffmanEncode()
def count_occurrences(file_name):
    file = open(file_name)
    count_arr = build_empty_hash_table()
    # reset_hash()
    # count_arr = blank_hash_table
    file_string = file.readline()
    while file_string != "":
        for i in range(file_string.__len__()):
            count_arr = array_list.set(count_arr, ord(file_string[i]),
                                        array_list.get(count_arr, ord(file_string[i])) + 1)
        file_string = file.readline()

    file.close()
    return count_arr


# HuffmanTree -> String
# returns a String representation of all the character values in the given HuffmanTree
def build_string(huff_tree, return_string=""):
    if huff_tree is None:
        return ""
    if type(huff_tree) == HuffmanLeaf:
        return_string += str(chr(huff_tree.num_representation))
    if type(huff_tree) != HuffmanLeaf:
        return_string = build_string(huff_tree.left, return_string)
        return_string = build_string(huff_tree.right, return_string)
    return return_string


# HuffmanTree, HuffmanTree -> boolean
# returns True if given A is less than given B, and false if otherwise. By definition, a comes before b if the
# occurrence count of a is smaller than that of b. If those are the same, you compare the ASCII value of the character
def comes_before(a, b):
    if a.frequency < b.frequency:
        return True
    if a.frequency > b.frequency:
        return False
    return a.num_representation < b.num_representation


# ArrayList -> HuffmanTree
# given a list of occurrences, returns a sorted HuffmanTree
def build_tree(occurrences):
    temp_list = linked_list.empty_list()
    for i in range(array_list.length(occurrences)):
        if array_list.get(occurrences, i) != 0:
            temp_list = linked_list.insert_sorted(temp_list,
                                                  HuffmanLeaf(i, array_list.get(occurrences, i)), comes_before)
    if temp_list is None:
        return None

    while temp_list.tail is not None:
        temp1, temp_list = linked_list.remove(temp_list, 0)
        temp2, temp_list = linked_list.remove(temp_list, 0)
        temp3 = combine_trees(temp1, temp2)
        temp_list = linked_list.insert_sorted(temp_list, temp3, comes_before)

    return temp_list.head


# HuffmanTree, HuffmanTree -> HuffmanTree
# returns the combined HuffmanTree of given HuffmanTrees
def combine_trees(a, b):
    if a.num_representation < b.num_representation:
        return HuffmanNode(a.num_representation, a.frequency + b.frequency, a, b)
    return HuffmanNode(b.num_representation, a.frequency + b.frequency, a, b)


# HuffmanTree -> ArrayList
# returns a HashTable with the Huffman codes from a given tree
def make_hash_table(huff_tree, a_list=None, acc="", counter=0):
    if a_list is None:
        a_list = build_empty_hash_table()
        # reset_hash()
        # a_list = blank_hash_table

    if huff_tree is None:
        return a_list, counter

    if type(huff_tree) == HuffmanLeaf:
        a_list = array_list.set(a_list, huff_tree.num_representation,
                                HuffmanCharacter(huff_tree.num_representation, acc, huff_tree.frequency))
        return a_list, counter + 1

    a_list, counter = make_hash_table(huff_tree.left, a_list, acc + "0", counter)
    a_list, counter = make_hash_table(huff_tree.right, a_list, acc + "1", counter)
    return a_list, counter


# String, String -> String
# given two file names, the function writes to a file, and returns pre-order string representation
# if first file is not found, then returns None
def huffman_encode(file_in, file_out):
    try:
        temp_tree = build_tree(count_occurrences(file_in))
        hash_table, count = make_hash_table(temp_tree)

        hb_writer = HuffmanBitsWriter(file_out)
        hb_writer.write_byte(count)

        for i in range(array_list.length(hash_table)):
            if array_list.get(hash_table, i) != 0:
                hb_writer.write_byte(i)
                hb_writer.write_int(array_list.get(hash_table, i).frequency)
        file = open(file_in)
        file_string = file.readline()

        while file_string != "":
            for i in range(file_string.__len__()):
                hb_writer.write_code(array_list.get(hash_table, ord(file_string[i])).binary_representation)
            file_string = file.readline()

        hb_writer.close()
        file.close()
        return build_string(temp_tree)

    except IOError:
        print("Error, file '%s' not found" % file_in)


# String, String -> None
# given two File names as String, function writes from a Huffman compressed file to a text file. If file writing to
# has text already, program erases it, and decompresses the file
def huffman_decode(file_in, file_out):
    try:
        a_list, hb_reader, temp = count_occurrences_header(file_in)
        huff_tree = build_tree(a_list)
        temp_tree = huff_tree
        file = open(file_out, "w")
        if type(huff_tree) == HuffmanLeaf:
            for i in range(temp):
                file.write(chr(huff_tree.num_representation))
        else:
            while temp != 0:
                if hb_reader.read_bit():
                    temp_tree = temp_tree.right
                else:
                    temp_tree = temp_tree.left
                if type(temp_tree) is HuffmanLeaf:
                    file.write(chr(temp_tree.num_representation))
                    temp_tree = huff_tree
                    temp -= 1
        file.close()
        hb_reader.close()

    except IOError:
        print("Error, file '%s' not found" % file_in)


# String -> ArrayList, HuffmanBitsReader, int
# given a fileName, function returns an ArrayList filled with the number of occurrences of a character in a file, the
# HuffmanBitsReader which starts immediately after the header, and an int representing total characters in a file
def count_occurrences_header(file_in):
    hb_reader = HuffmanBitsReader(file_in)
    acc = 0
    a_list = build_empty_hash_table()
    # reset_hash()
    # a_list = blank_hash_table
    num_characters = hb_reader.read_byte()

    for i in range(num_characters):
        ascii_value = hb_reader.read_byte()
        occurrences = hb_reader.read_int()
        a_list = array_list.set(a_list, ascii_value, occurrences)
        acc += occurrences
    return a_list, hb_reader, acc


class TestCases(unittest.TestCase):
    """
    def test_huffman_tree(self):
        test_tree1 = HuffmanLeaf(32, 3)
        test_tree2 = HuffmanLeaf(100, 1)
        test_tree3 = HuffmanLeaf(99, 2)
        test_tree4 = HuffmanLeaf(98, 3)
        test_tree5 = HuffmanLeaf(97, 4)
        test_tree = HuffmanNode(32, 13, HuffmanNode(32, 6, test_tree1, test_tree4),
                                HuffmanNode(97, 7, HuffmanNode(99, 3, test_tree2, test_tree3), test_tree5))

        self.assertEqual(test_tree.__repr__(),
                         "[32, 13] ([32, 6] ({32 3} {98 3}) [97, 7] ([99, 3] ({100 1} {99 2}) {97 4}))")
        self.assertEqual(test_tree, HuffmanNode(32, 13, HuffmanNode(32, 6, test_tree1, test_tree4), HuffmanNode(97, 7,
                                                        HuffmanNode(99, 3, test_tree2, test_tree3), test_tree5)))
        self.assertEqual(test_tree1.__repr__(), "{32 3}")
        self.assertEqual(test_tree1, HuffmanLeaf(32, 3))

    def test_huffman_character(self):
        huff_char1 = HuffmanCharacter(32, "101", 5)
        huff_char2 = HuffmanCharacter(32, "101", 5)

        self.assertEqual(huff_char1, huff_char2)
        self.assertEqual(huff_char1.__repr__(), "ASCII Value: 32, Huffman Value: 101, Frequency: 5\n")

    def test_comes_before(self):
        test_tree1 = HuffmanLeaf(32, 3)
        test_tree2 = HuffmanLeaf(100, 1)
        test_tree3 = HuffmanLeaf(32, 1)
        test_tree4 = HuffmanLeaf(33, 3)

        huff1 = HuffmanNode(32, 4, test_tree1, test_tree2)
        huff2 = HuffmanNode(32, 2, test_tree3, test_tree2)
        huff3 = HuffmanNode(33, 4, test_tree4, test_tree2)

        self.assertFalse(comes_before(huff1, huff2))
        self.assertTrue(comes_before(huff2, huff1))
        self.assertTrue(comes_before(huff1, huff3))

    def test_count_occurrences(self):
        test1 = count_occurrences("textfile.txt")
        self.assertEqual(array_list.get(test1, 97), 3)
        self.assertEqual(array_list.get(test1, 98), 2)
        self.assertEqual(array_list.get(test1, 99), 1)

    def test_build_string(self):
        test_tree1 = HuffmanLeaf(32, 3)
        test_tree2 = HuffmanLeaf(100, 1)
        test_tree3 = HuffmanLeaf(99, 2)
        test_tree4 = HuffmanLeaf(98, 3)
        test_tree5 = HuffmanLeaf(97, 4)
        test_tree = HuffmanNode(32, 13, HuffmanNode(32, 6, test_tree1, test_tree4),
                                HuffmanNode(97, 7, HuffmanNode(99, 3, test_tree2, test_tree3), test_tree5))
        self.assertEqual(build_string(test_tree), " bdca")

    def test_build_tree(self):
        test1 = count_occurrences("textfile.txt")
        tree_1 = build_tree(test1)
        self.assertEqual(tree_1.__repr__(), "[97, 6] ({97 3} [98, 3] ({99 1} {98 2}))")

    def test_make_hash_table(self):
        # test1 = build_empty_hash_table()
        reset_hash()
        test1 = blank_hash_table
        array_list.set(test1, 97, 3)
        array_list.set(test1, 98, 2)
        array_list.set(test1, 99, 1)

        tree1 = build_tree(test1)
        test_list, count = make_hash_table(tree1)

        self.assertEqual(array_list.get(test_list, 97).__repr__(), "ASCII Value: 97, Huffman Value: 0, Frequency: 3\n")
        self.assertEqual(array_list.get(test_list, 98).__repr__(), "ASCII Value: 98, Huffman Value: 11, Frequency: 2\n")
        self.assertEqual(array_list.get(test_list, 99).__repr__(), "ASCII Value: 99, Huffman Value: 10, Frequency: 1\n")

        self.assertEqual(count, 3)

    def test_count_occurrences_header(self):
        test_list, temp, _ = count_occurrences_header("textfile_encoded_soln.bin")
        self.assertEqual(array_list.get(test_list, 97), 3)
        self.assertEqual(array_list.get(test_list, 98), 2)
        self.assertEqual(array_list.get(test_list, 99), 1)
        temp.close()

    def test_01_textfile_encode(self):
        s = huffman_encode("textfile.txt", "textfile_encoded.bin")
        self.assertEqual(s, "acb")
        # capture errors by running 'diff' on your encoded file
        # with a *known* solution file
        # err = os.system("diff textfile_encoded.bin textfile_encoded_soln.bin")

        # For us Windows folk
        err = os.system("FC /B textfile_encoded.bin textfile_encoded_soln.bin")

        self.assertEqual(err, 0)

    def test_02_empty_text_file_encode(self):
        s = huffman_encode("empty_text_file.txt", "empty_text_file_encoded.bin")
        self.assertEqual(s, "")
        # capture errors by running 'diff' on your encoded file
        # with a *known* solution file
        # err = os.system("diff empty_text_file_encoded.bin empty_text_file_encoded_soln.bin")

        # For us Windows folk
        err = os.system("FC /B empty_text_file_encoded.bin empty_text_file_encoded_soln.bin")

        self.assertEqual(err, 0)

    def test_03_one_character_encode(self):
        s = huffman_encode("one_character.txt", "one_character_encoded.bin")
        self.assertEqual(s, "a")
        # capture errors by running 'diff' on your encoded file
        # with a *known* solution file
        # err = os.system("diff empty_text_file_encoded.bin empty_text_file_encoded_soln.bin")

        # For us Windows folk
        err = os.system("FC /B one_character_encoded.bin one_character_encoded_soln.bin")

        self.assertEqual(err, 0)

    def test_01_textfile_decode(self):
        huffman_decode("textfile_encoded_soln.bin", "textfile_decoded.txt")
        # capture errors by running 'diff' on your encoded file
        # with a *known* solution file
        # err = os.system("diff textfile_decoded.txt textfile.txt")

        # For us Windows folk
        err = os.system("FC /B textfile_decoded.txt textfile.txt")
        self.assertEqual(err, 0)

    def test_02_empty_text_file_decode(self):
        huffman_decode("empty_text_file_encoded_soln.bin", "empty_text_file_decoded.txt")
        # capture errors by running 'diff' on your encoded file
        # with a *known* solution file
        # err = os.system("diff empty_text_file_decoded.txt empty_text_file.txt")

        # For us Windows folk
        err = os.system("FC /B empty_text_file_decoded.txt empty_text_file.txt")

        self.assertEqual(err, 0)

    def test_03_one_character_decode(self):
        huffman_decode("one_character_encoded_soln.bin", "one_character_decoded.txt")
        # capture errors by running 'diff' on your encoded file
        # with a *known* solution file
        # err = os.system("diff empty_text_file_decoded.txt empty_text_file.txt")

        # For us Windows folk
        err = os.system("FC /B one_character_decoded.txt one_character.txt")

        self.assertEqual(err, 0)

    def test_03_nonexistent_file(self):
        huffman_encode("blah.txt", "foo.bin")
        huffman_decode("blah.bin", "foo.txt")
    """
    def test_all_files(self):
        huffman_encode("file0.txt", "file0_encoded.bin")
        huffman_decode("file0_encoded_soln.bin", "file0.txt")

        huffman_encode("file1.txt", "file1_encoded.bin")
        huffman_decode("file1_encoded_soln.bin", "file1.txt")

        huffman_encode("file2.txt", "file2_encoded.bin")
        huffman_decode("file2_encoded_soln.bin", "file2.txt")

        huffman_encode("file2b.txt", "file2b_encoded.bin")
        huffman_decode("file2b_encoded_soln.bin", "file2b.txt")

        huffman_encode("file3.txt", "file3_encoded.bin")
        huffman_decode("file3_encoded_soln.bin", "file3.txt")

        huffman_encode("file_blank.txt", "file_blank_encoded.bin")
        huffman_decode("file_blank_encoded_soln.bin", "file_blank.txt")

        huffman_encode("file_one_char.txt", "file_one_char_encoded.bin")
        huffman_decode("file_one_char_encoded_soln.bin", "file_one_char.txt")

        huffman_encode("file_WarAndPeace.txt", "file_WarAndPeace_encoded.bin")
        huffman_decode("file_WarAndPeace_encoded_soln.bin", "file_WarAndPeace.txt")

        huffman_encode("file_WarAndPeace_intro.txt", "file_WarAndPeace_intro_encoded.bin")
        huffman_decode("file_WarAndPeace_intro_encoded_soln.bin", "file_WarAndPeace_intro.txt")

        huffman_encode("textfile.txt", "textfile_encoded.bin")
        huffman_decode("textfile_encoded_soln.bin", "textfile.txt")


if __name__ == '__main__':
    # build_hash()
    unittest.main()
