

# A Head is any data type representing a value in a List
# A Tail is an AnyList

# An AnyList is one of:
# - None
# - a Pair(Head, Tail)
class Pair:
    def __init__(self, head, tail):
        self.head = head  # a Head
        self.tail = tail  # a Tail

    def __eq__(self, other):
        return type(other) == Pair and self.head == other.head and self.tail == other.tail

    def __repr__(self):
        return "{%r, %r}" % (self.head, self.tail)


# None -> AnyList
# Returns an Empty AnyList
def empty_list():
    return None


# AnyList, int, Value -> AnyList
# returns an AnyList, with the values changed such that at a given index, the value is changed to the given value in a
# given AnyList
def add(any_list, index, value):
    if (index >= 1 and any_list is None) or index < 0:
        raise IndexError()
    if index == 0:
        return Pair(value, any_list)
    return Pair(any_list.head, add(any_list.tail, index-1, value))


# AnyList -> int
# returns the length of a given AnyList
def length(any_list, size=0):
    if any_list is None:
        return size
    return length(any_list.tail, size+1)


# AnyList, int -> Value
# returns the Value of a given index in a given AnyList
def get(any_list, index):
    if (index >= 0 and any_list is None) or index < 0:
        raise IndexError()
    if index == 0:
        return any_list.head
    return get(any_list.tail, index-1)


# AnyList, int, Value -> AnyList
# returns an AnyList, with the value at a given index is changed in a given AnyList
def set(any_list, index, value):
    if (index >= 0 and any_list is None) or index < 0:
        raise IndexError()
    if index == 0:
        return Pair(value, any_list.tail)
    return Pair(any_list.head, set(any_list.tail, index-1, value))


# AnyList, int -> AnyList
# returns an AnyList, which is the same as the given AnyList, only with an element removed at a given index
def remove(any_list, index):
    if (index >= 0 and any_list is None) or index < 0:
        raise IndexError()
    if index == 0:
        return any_list.head, any_list.tail
    temp = remove(any_list.tail, index-1)
    return temp[0], Pair(any_list.head, temp[1])


# AnyList, function -> None
# Loops through the List and applies function to given value
def foreach(any_list, func):
    if any_list is None:
        return
    func(any_list.head)
    foreach(any_list.tail, func)


# AnyList, function -> AnyList
# Given a List, and a function which compares two Values in given AnyList and returns only booleans, returns a sorted...
# ... AnyList by using Insertion Sort
def sort(any_list, less_than):
    return_value = None
    while any_list is not None:
        if return_value is None or less_than(any_list.head, return_value.head):
            return_value = add(return_value, 0, any_list.head)
        else:
            temp = return_value.tail
            index = 1
            while temp is not None and not less_than(any_list.head, temp.head):
                temp = temp.tail
                index += 1
            return_value = add(return_value, index, any_list.head)
        any_list = any_list.tail
    return return_value


# (sorted)LinkedList, value, function -> LinkedList
# returns a sorted LinkedList, with a value inserted at the proper place, according to the given function
def insert_sorted(a_list, value, comes_before):
    if a_list is None:
        return Pair(value, None)
    if comes_before(value, a_list.head):
        return Pair(value, a_list)
    return Pair(a_list.head, insert_sorted(a_list.tail, value, comes_before))

