import unittest

#* Section 1 (Git)

#persnickety

#* Section 2 (Data Definitions)

#* 1)
#a Celsius variable is a float representing Temperature in Celsius
#a Fahrenheit variable is a float representing the converted Celsius temperature


#* 2)
#a Price variable is an integer representing price in cents of the item

#* 3)
#a Name is a String representing the name of the item
#a PriceRecord represents an item to be bought
class PriceRecord:
    def __init__(self, name, price):
        self.name = name    #a name
        self.price = price  #a price

    def __repr__(self):
        return self.name + " costs $" + self.price

    def __eq__(self, other):
        return type(other) == PriceRecord and self.name == other.name and self.price == other.price


#* 4)
#a URL is a String representing a web URL
#a Date is a String representing the last time the web page was accessed
#an OpenTab represents a tab open in a web browser
class OpenTab:
    def __init__(self, url, date):
        self.URL = url    #a URL
        self.date = date  #a Date

    def ___repr__(self):
        return self.URL + "Was last accessed on " + self.date

    def __eq__(self, other):
        return type(other) == OpenTab and self.URL == other.URL and self.date == other.date


#* Section 3 (Signature, Purpose Statements, Headers)

#* 1)
#add_sales_tax float -> float
#returns total cost, with sales tax
def add_sales_tax(price):
    pass


#* 2)
#findPrice String -> double
#returns the price of a given item
def find_price(item_name):
    pass


#* 3)
#computeMedianIncome Region, List -> double
#returns the median income of a region from a given database
def compute_median_income(region, database):
    pass


#* 4)
#find_cities Region, List -> List
#returns a List of Cities from a given database that are inside a given region
def find_cities(region, database):
    pass


#* Section 4 (Test Cases)

#* 1)
#return_second int, int, int -> int
#returns the second largest int of 3 given ints
def return_second(num1, num2, num3):
    pass


def test_edges(self):
    self.assertEqual(return_second(2, 2, 2), 2)
    self.assertEqual(return_second(0, 2, 2), 2)
    self.assertEqual(return_second(2, 2, 0), 2)


def test_general(self):
    self.assertEqual(return_second(0, 1, 2), 1)
    self.assertEqual(return_second(1, 0, 2), 1)
    self.assertEqual(return_second(1, 2, 0), 1)


def test_negative(self):
    self.assertEqual(return_second(-1, 1, 5), 1)
    self.assertEqual(return_second(-1, -2, -3), -2)


#* 2)
#has_capital String -> boolean
#returns true if the given String contains a capital, false otherwise
def has_capital(a_string):
    pass


def test_no_capital(self):
    self.assertFalse(has_capital('abcd'))


def test_yes_capital(self):
    self.assertTrue(has_capital('abCd'))


def test_null_string(self):
    self.assertFalse('')


#* 3)
#find_north String, String -> String
#returns a String containing the northern most state given two Strings, defaults to easternmost state if equal
def find_north(state1, state2):
    pass


def test_first_north(self):
    self.assertEqual(find_north("Maine", "Texas"), "Maine")


def test_second_north(self):
    self.assertEqual(find_north("Texas", "Maine"), "Maine")


def test_same_longitude(self):
    self.assertEqual(find_north("New Mexico", "Arizona"), "New Mexico")


#* Section 5 (Whole Functions)

#* 1)
#feet_to_meter double -> double
#returns a double representing number of meters from a given number of feet
def f2m(feet):
    return feet * 0.3048


#* 2)
#a Frequency variable is a double representing frequency, in Hertz, of a given note
#a Duration variable is a double representing duration, in seconds, of a given note
#a Note represents a musical Note with fields of Frequency and Duration
class Note:
    def __init__(self, frequency, duration):
        self.frequency = frequency  #a Frequency
        self.duration = duration    #a Duration

    def __repr__(self):
        return "Note: " + self.frequency + " Hertz lasting: " + self.duration + "seconds"

    def __eq__(self, other):
        return type(other) == Note and self.frequency == other.frequency and self.duration == other.duration


#* 3)
#up_one_octave Note -> Note
#returns a Note which is one octave above a given Note
def up_one_octave(musicNote):
    return Note(musicNote.frequency * 2, musicNote.duration)


#* 4)
#up_one_octave_m Note -> None
#mutates a given Note object so that its frequency is doubled (up one octave)
def up_one_octave_m(music_note):
    music_note.frequency *= 2
    return None


#below are test cases for part 1-4 of Section 5
class TestCases(unittest.TestCase):
    def test_f2m(self):
        self.assertAlmostEqual(f2m(1.0), 0.3048)
        self.assertEqual(f2m(0.0), 0)
        self.assertAlmostEqual(f2m(-2.3), -.70104)

    def test_note(self):
        note = Note(440.0, 2.0)
        self.assertEqual(note.frequency, 440.0)
        self.assertEqual(note.duration, 2.0)
        note.frequency = 880.0
        self.assertEqual(note.frequency, 880.0)

    def test_up_one_octave_1(self):
        note1 = Note(440.0, 2.0)
        note2 = Note(440.0, 2.0)
        note3 = up_one_octave(note1)
        self.assertEqual(note3, Note(880.0, 2.0))
        self.assertIsInstance(note3, Note)
        self.assertEqual(note1, note2)
        self.assertNotEqual(note1, note3)

    def test_up_one_octave_m(self):
        note = Note(440.0, 2.0)
        up_one_octave_m(note)
        self.assertEqual(note.frequency, 880.0)
        self.assertEqual(note.duration, 2.0)
        note2 = Note(261.625565, 3.0)
        up_one_octave_m(note2)
        self.assertAlmostEqual(note2.frequency, 523.25113)
        self.assertEqual(note2.duration, 3.0)

    if __name__ == '__main__':
        unittest.main()
