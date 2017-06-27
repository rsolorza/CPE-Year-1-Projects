from linked_list import *

# a ListStack is a linked_list, following the last in first out (LIFO) order, i.e. the first element is the only...
#  accessible element, and you can only add to the top of the stack (index 0)


# None -> ListStack
# returns an empty ListStack
def empty_stack():
    return empty_list()


# ListStack, value -> stack
# returns a stack with given value pushed to top
def push(stack, value):
    return add(stack, 0, value)


# ListStack -> (value, ListStack)
# returns a value and an ListStack with the top value taken off, raises an IndexError if empty
def pop(stack):
    if is_empty(stack):
        raise IndexError
    return stack.head, stack.tail


# ListStack -> value
# returns the top value of an ListStack, raises an IndexError if Empty
def peek(stack):
    if is_empty(stack):
        raise IndexError
    return stack.head


# ListStack -> int
# returns the size of a given ListStack
def size(stack):
    return length(stack)


# ListStack -> Boolean
# return true if given stack is empty, false if otherwise
def is_empty(stack):
    return stack is None

