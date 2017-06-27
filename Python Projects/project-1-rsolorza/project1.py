import unittest


# A Head is a String representing a value in a List
# A Tail is a StrList

# A StrList is one of:
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


# a Name is a string representing a class to be constructed Name
# field_names is a StrList containing the fields in a class to be constructed
# a ClassShape represents a class to be constructed
class ClassShape:
    def __init__(self, name, field_names):
        self.name = name                # a Name
        self.field_names = field_names  # a field_names StrList

    def __eq__(self, other):
        return type(other) == ClassShape and self.name == other.name and self.field_names == other.field_names

    def __repr__(self):
        return "%r, %r" % (self.name, self.field_names)


# NumList -> int
# returns the length of a given NumList
def length(num_list, size=0):
    if num_list == "mt":
        return size
    return length(num_list.tail, size+1)


# a block_of_code is a StrList, with every 'head' representing a line of code, not including 'mt'

# StrList -> String
# returns a String formatted as lines of code from a given block_of_code
def join_lines(lines_of_code):
    if lines_of_code == "mt":
        return ""
    return lines_of_code.head + "\n" + join_lines(lines_of_code.tail)  # a block_of_code


# StrList -> StrList
# return a block_of_code from a given field_names StrList, in the form self.*name* = *name*\n, for every given 'head'
def fields_to_assignments(names):
    if names == "mt":
        return "mt"
    return Pair("        self." + names.head + " = " + names.head, fields_to_assignments(names.tail))


# StrList -> String
# returns a String representing the field names to go into a header of an __init__ method from a given field_names List
def commasep(names):
    if names == "mt":
        return ""
    return ", " + names.head + commasep(names.tail)


# StrList -> StrList
# returns a block_of_code representing the entirety of an init method, from a given field_names StrList
def init_method(names):
    header = "    def __init__(self" + commasep(names) + "):"
    if names == 'mt':
        return Pair(header, Pair("        pass", "mt"))
    return Pair(header, fields_to_assignments(names))


# StrList -> StrList
# returns a block_of_code to set up the comparing of instance variables of the __eq__ method, from a given ...
# ... field_names StrList
def comparison_setup(names):
    if names == "mt":
        return Pair("                )", "mt")
    return Pair("                and self." + names.head + " == other." + names.head, comparison_setup(names.tail))


# ClassShape -> StrList
# returns a block_of_code representing the entirety of the __eq__ method of a given ClassShape
def eq_method(class_shape):
    return Pair("    def __eq__(self, other):",
                Pair("        return (type(other) == " + class_shape.name, comparison_setup(class_shape.field_names)))


# ClassShape -> String
# returns a String in the form 'return "*name*({!r} ...)".format(
def repr_string(class_shape):
    return_string = '        return "' + class_shape.name + "("
    if class_shape.field_names == "mt":
        return return_string + ')".format()'
    for num in range(0, length(class_shape.field_names) - 1):
        return_string += "{!r}, "
    return_string += '{!r})".format('
    return return_string


# StrList -> String
# returns a String in the form self.*instance*, ..., self.instance)
def repr_format_string(names):
    if names == "mt":
        return ""
    if names.tail == "mt":
        return "self." + names.head + ")"
    return "self." + names.head + ", " + repr_format_string(names.tail)


# ClassShape -> StrList
# returns a block_of_code representing the entirety of the __repr__ function of a given ClassShape
def repr_method(class_shape):
    return Pair("    def __repr__(self):",
                Pair(repr_string(class_shape) + repr_format_string(class_shape.field_names), "mt"))


# ClassShape -> String
# returns a String representing the entirety of a Class from a given ClassShape
def render_class(class_shape):
    return "class " + class_shape.name + ":" + "\n" + \
           join_lines(init_method(class_shape.field_names)) + "\n" + \
           join_lines(eq_method(class_shape)) + "\n" + \
           join_lines(repr_method(class_shape))


# Tests: holds all of the tests for this project
class TestCases(unittest.TestCase):
    def test_List(self):
        pair1 = Pair(1, Pair(2, "mt"))
        pair2 = Pair(1, Pair(2, "mt"))
        self.assertEqual(pair1, pair2)
        self.assertEqual(pair1.__repr__(), "1, 2, 'mt'")

    def test_class_shape(self):
        class1 = ClassShape("Plate", Pair("diameter", Pair("material", "mt")))
        class2 = ClassShape("Plate", Pair("diameter", Pair("material", "mt")))
        self.assertEqual(class1, class2)
        self.assertEqual(class1.__repr__(), "'Plate', 'diameter', 'material', 'mt'")

    def test_render_class(self):
        class1 = ClassShape("Plate", Pair("diameter", Pair("material", "mt")))
        str1 = "class Plate:" + "\n" +\
               "    def __init__(self, diameter, material):" + "\n" +\
               "        self.diameter = diameter" + "\n" +\
               "        self.material = material" + "\n" +\
               "" + "\n" +\
               "    def __eq__(self, other):" + "\n" +\
               "        return (type(other) == Plate" + "\n" +\
               "                and self.diameter == other.diameter" + "\n" +\
               "                and self.material == other.material" + "\n" +\
               "                )" + "\n" +\
               "" + "\n" +\
               "    def __repr__(self):" + "\n" +\
               '        return "Plate({!r}, {!r})".format(self.diameter, self.material)' + "\n"

        self.assertEqual(render_class(class1), str1)

    def test_render_class_2(self):
        class1 = ClassShape("Empty", "mt")
        str1 = "class Empty:" + "\n" +\
               "    def __init__(self):" + "\n" +\
               "        pass" + "\n" +\
               "" + "\n" +\
               "    def __eq__(self, other):" + "\n" +\
               "        return (type(other) == Empty" + "\n" +\
               "                )" + "\n" +\
               "" + "\n" +\
               "    def __repr__(self):" + "\n" +\
               '        return "Empty()".format()' + "\n"
        self.assertEqual(render_class(class1), str1)

if __name__ == "__main__":
    unittest.main()


