

# A size is an int representing current size of a List
# A Capacity is an int representing the current capacity of a List
# A List is a class containing an array, and a size and capacity variables.
class List:
    def __init__(self):
        self.my_list = [None]      # an array
        self.size = 0               # a Size
        self.capacity = 1    # a Capacity

    def __eq__(self, other):
        return type(other) == List and self.size == other.size and self.capacity == other.capacity and \
               self.my_list == other.my_list

    def __repr__(self):
        if self.size == 0:
            return "{}"
        return_value = "{"
        for value in self.my_list:
            if value is None:
                break
            return_value += str(value) + ", "
        return return_value[0:-2] + "}"


# None -> List
# returns an empty List
def empty_list():
    return List()


# List -> List
# returns a list, only with the capacity doubled
def double_array_capacity(array_list):
    temp = [None] * (array_list.capacity * 2)
    for i in range(array_list.size):
        temp[i] = array_list.my_list[i]
    array_list.my_list = temp
    array_list.capacity *= 2
    return array_list


# List -> List
# returns a list, only with the capacity tripled
def triple_array_capacity(array_list):
    temp = [None] * (array_list.capacity * 3)
    for i in range(array_list.size):
        temp[i] = array_list.my_list[i]
    array_list.my_list = temp
    array_list.capacity *= 3
    return array_list


# List -> List
# returns a list, only with the capacity doubled
def increment_array_capacity(array_list):
    temp = [None] * (array_list.capacity + 1)
    for i in range(array_list.size):
        temp[i] = array_list.my_list[i]
    array_list.my_list = temp
    array_list.capacity += 1
    return array_list


# List, int, Value -> List
# returns a List, with a Value added at a given index to a given List
def add(array_list, index, value):
    if index > array_list.size or index < 0:
        raise IndexError()
    if array_list.size == array_list.capacity:
        double_array_capacity(array_list)
    temp = array_list.my_list[index]
    array_list.my_list[index] = value
    for i in range(index, array_list.size):
        temp, array_list.my_list[i + 1] = array_list.my_list[i + 1], temp
    array_list.size += 1
    return array_list


# List, int, Value -> List
# returns a List, with a Value added at a given index to a given List
def add_alternate1(array_list, index, value):
    if index > array_list.size or index < 0:
        raise IndexError()
    if array_list.size == array_list.capacity:
        triple_array_capacity(array_list)
    temp = array_list.my_list[index]
    array_list.my_list[index] = value
    for i in range(index, array_list.size):
        temp, array_list.my_list[i + 1] = array_list.my_list[i + 1], temp
    array_list.size += 1
    return array_list


# List, int, Value -> List
# returns a List, with a Value added at a given index to a given List
def add_alternate2(array_list, index, value):
    if index > array_list.size or index < 0:
        raise IndexError()
    if array_list.size == array_list.capacity:
        increment_array_capacity(array_list)
    temp = array_list.my_list[index]
    array_list.my_list[index] = value
    for i in range(index, array_list.size):
        temp, array_list.my_list[i + 1] = array_list.my_list[i + 1], temp
    array_list.size += 1
    return array_list


# List -> int
# returns the length of a given List
def length(array_list):
    return array_list.size


# List, int -> Value
# returns the value of a given index in a given List
def get(array_list, index):
    if index >= array_list.size or index < 0:
        raise IndexError()
    return array_list.my_list[index]


# List, int, Value -> List
# returns a List, where at a given index, the value is changed to a given Value in a given List
def set(array_list, index, value):
    if index >= array_list.size or index < 0:
        raise IndexError()
    array_list.my_list[index] = value
    return array_list


# List, int -> List
# returns a List, with a value removed at a given index in a given List
def remove(array_list, index):
    if index >= array_list.size or index < 0:
        raise IndexError()
    temp = array_list.my_list[index]
    array_list.my_list[index] = None
    for i in range(index, array_list.size - 1):
        array_list.my_list[i], array_list.my_list[i + 1] = array_list.my_list[i + 1], array_list.my_list[i]
    array_list.size -= 1
    return temp, array_list


# List, function -> None
# Loops through the list, and applies the current value to the function
def foreach(array_list, some_func):
    for i in range(length(array_list)):
        some_func(array_list.my_list[i])


# ArrayList, int, int -> ArrayList
# returns a given ArrayList, only with the two given indexes swapped places. Helper function for sort_list
def swap(array_list, i1, i2):
    temp = get(array_list, i1)
    array_list = set(array_list, i1, get(array_list, i2))
    array_list = set(array_list, i2, temp)
    return array_list


# ArrayList, function -> ArrayList
# Given a List, and a function which compares two Values in given AnyList and returns only booleans, returns a sorted...
# ... AnyList by using Insertion Sort
def sort(array_list, less_than):
    for i in range(1, length(array_list)):
        current = get(array_list, i)
        j = i
        while j >= 1 and less_than(current, get(array_list, j - 1)):
            swap(array_list, j, j - 1)
            j -= 1
    return array_list
