import sys
sys.setrecursionlimit(8000)


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


# (sorted)LinkedList, value, function -> LinkedList
# returns a sorted LinkedList, with a value inserted at the proper place, according to the given function
def insert_sorted(a_list, value, comes_before):
    if a_list is None:
        return Pair(value, None)
    if comes_before(value, a_list.head):
        return Pair(value, a_list)
    return Pair(a_list.head, insert_sorted(a_list.tail, value, comes_before))


# AnyList -> int
# returns the length of a given AnyList
def length(any_list, leng=0):
    if any_list is None:
        return leng
    return length(any_list.tail, leng+1)


# A PriorityQueue contains a comes_before function, and a LinkedList representing the actual
# PriorityQueue
# A comes_before function represents the function which compares two values, and returns True or
# False, and determines the order of the PriorityQueue
class PriorityQueue:
    def __init__(self, comes_before, p_list=empty_list()):
        self.comes_before = comes_before    # a comes_before function
        self.p_list = p_list                # A LinkedList

    def __repr__(self):
        return self.p_list.__repr__()

    def __eq__(self, other):
        return type(other) == PriorityQueue and self.p_list == other.p_list and self.comes_before == other.comes_before


# None -> PriorityQueue
# returns an empty PriorityQueue
def empty_pqueue(comes_before):
    return PriorityQueue(comes_before)


# PriorityQueue, Value -> PriorityQueue
# puts the given value into the proper position
def enqueue(p_queue, value):
    return PriorityQueue(p_queue.comes_before, insert_sorted(p_queue.p_list, value, p_queue.comes_before))


# PriorityQueue -> (value, PriorityQueue)
# given a PriorityQueue, dequeues the object of highest priority, returns it, and the shortened priority queue
def dequeue(p_queue):
    if p_queue.p_list is None:
        raise IndexError
    return p_queue.p_list.head, PriorityQueue(p_queue.comes_before, p_queue.p_list.tail)


# PriorityQueue -> Value
# returns the value of highest priority in a PriorityQueue
def peek(p_queue):
    if p_queue.p_list is None:
        raise IndexError
    return p_queue.p_list.head


# PriorityQueue -> int
# returns the size of the PriorityQueue
def size(p_queue):
    return length(p_queue.p_list)


# PriorityQueue -> Boolean
# returns True if given PriorityQueue is empty, false if otherwise
def is_empty(p_queue):
    return p_queue.p_list is None
