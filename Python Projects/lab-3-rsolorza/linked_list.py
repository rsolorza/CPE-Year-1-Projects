

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
