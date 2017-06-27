

# A size is an int representing current size of a List
# A Capacity is an int representing the current capacity of a List
# A List is a class containing an array, and a size and capacity variables.
class List:
    def __init__(self, my_list=[None], capacity=1):
        self.my_list = my_list      # an array
        self.size = 0               # a Size
        self.capacity = capacity    # a Capacity

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
            return_value += value + ", "
        return return_value[0:-2] + "}"


# None -> List
# returns an empty List
def empty_list():
    return List([None])


# List -> List
# returns a list, only with the capacity doubled
def double_array_capacity(array_list):
    temp = [None] * (array_list.capacity * 2)
    for i in range(0, array_list.size):
        temp[i] = array_list.my_list[i]
    array_list.my_list = temp
    array_list.capacity *= 2


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
