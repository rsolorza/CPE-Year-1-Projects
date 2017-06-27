#
#   Bit-packing reader and writer for Huffman encoder and decoder
#
#   2017-04-30 - D. Koller
#

import unittest
import struct


# --------------------------------------------------------------------
# HuffmanBitsWriter is a HuffmanBitsWriter(string)
class HuffmanBitsWriter:
    # string -> None
    # side effect: open a file with file name 'fname' for writing in binary mode
    def __init__(self, fname):
        self.file = open(fname, 'wb')  # open a file with file name fname
        self.n_bits = 0  # Number of accumulated bits so far
        self.byte = 0  # accumulated bits represented as byte

    # None -> None
    # side effect: writes remaining bits and closes file
    def close(self):
        # need to pad remaining bits in byte with 0s and write them to file
        if self.n_bits > 0:
            self.byte = self.byte << (7 - self.n_bits)
            self.file.write(struct.pack('B', self.byte))
        self.file.close()

    # byte -> None
    # side effect: writes an unsigned integer as a single byte to file
    def write_byte(self, byte):
        self.file.write(struct.pack('B', byte))  # 1 byte unsigned int

    # int -> None
    # side effect: writes an unsigned integer as 4 bytes to file
    def write_int(self, int):
        self.file.write(struct.pack('>I', int))  # 4 bytes unsigned int
        # little endian !?

    # string -> None
    # side effect: writes a sequence of '0's and '1's as single bits to file
    def write_code(self, code):  # code is a string of '0's and '1's
        for bit in code:
            if bit == '1': self.byte += 1
            if self.n_bits == 7:
                self.file.write(struct.pack('B', self.byte))
                self.byte = 0
                self.n_bits = 0
            else:
                self.byte = self.byte << 1
                self.n_bits += 1


# --------------------------------------------------------------------
# HuffmanBitsReader is a HuffmanBitsReader(string)
class HuffmanBitsReader:
    # string -> None
    # side effect: open a file with file name 'fname' for reading in binary mode
    def __init__(self, fname):
        self.file = open(fname, 'rb')
        self.n_bits = 0
        self.byte = 0
        self.mask = 0

    # None -> None
    # side effect: closes opened file
    def close(self):
        self.file.close()

    # None -> Boolean
    # side effect: reads a single bit from opened file and returns True or False
    def read_bit(self):
        if self.mask == 0:  # all bits consumed, need to read in the next byte
            self.byte = self.read_byte()
            self.mask = 1 << 7
        bit = self.byte & self.mask
        self.mask = self.mask >> 1
        if bit == 0:
            return False
        else:
            return True

    # None -> int
    # side effect: reads a 1 byte from opened file and returns as unsigned int
    def read_byte(self):
        return struct.unpack('B', self.file.read(1))[0]  # 1 byte unsigned int

    # None -> int
    # side effect: reads a 4 byte from opened file and returns as unsigned int
    def read_int(self):
        return struct.unpack('>I', self.file.read(4))[0]  # 4 bytes unsigned int


#
# unit tests
#
class TestList(unittest.TestCase):
    def test_huffman_io_byte(self):
        hbw = HuffmanBitsWriter('huffman_io_test.bin')
        hbw.write_byte(42)
        hbw.close()
        hbr = HuffmanBitsReader('huffman_io_test.bin')
        self.assertEqual(hbr.read_byte(), 42)
        hbr.close()

    def test_huffman_io_int(self):
        hbw = HuffmanBitsWriter('huffman_io_test.bin')
        hbw.write_int(420)
        hbw.close()
        hbr = HuffmanBitsReader('huffman_io_test.bin')
        self.assertEqual(hbr.read_int(), 420)
        hbr.close()

    def test_huffman_io_code1(self):
        hbw = HuffmanBitsWriter('huffman_io_test.bin')
        hbw.write_code('1001')
        hbw.close()
        hbr = HuffmanBitsReader('huffman_io_test.bin')
        self.assertEqual(hbr.read_bit(), True)
        self.assertEqual(hbr.read_bit(), False)
        self.assertEqual(hbr.read_bit(), False)
        self.assertEqual(hbr.read_bit(), True)
        hbr.close()

    def test_huffman_io_code2(self):
        hbw = HuffmanBitsWriter('huffman_io_test.bin')
        hbw.write_code('100110011001')
        hbw.close()
        hbr = HuffmanBitsReader('huffman_io_test.bin')
        self.assertEqual(hbr.read_bit(), True)
        self.assertEqual(hbr.read_bit(), False)
        self.assertEqual(hbr.read_bit(), False)
        self.assertEqual(hbr.read_bit(), True)
        self.assertEqual(hbr.read_bit(), True)
        self.assertEqual(hbr.read_bit(), False)
        self.assertEqual(hbr.read_bit(), False)
        self.assertEqual(hbr.read_bit(), True)
        self.assertEqual(hbr.read_bit(), True)
        self.assertEqual(hbr.read_bit(), False)
        self.assertEqual(hbr.read_bit(), False)
        self.assertEqual(hbr.read_bit(), True)
        hbr.close()


if __name__ == '__main__':
    unittest.main()
