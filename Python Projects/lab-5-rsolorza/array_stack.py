from array_list import *

# an ArrayStack is an array_list, following the last in first out (LIFO) order, i.e. the first element is the only...
#  accessible element, and you can only add to the top of the stack (index 0)


# None -> ArrayStack
# returns an empty ArrayStack
def empty_stack():
    return empty_list()


# ArrayStack, value -> ArrayStack
# returns a stack with given value pushed to top
def push(stack, value):
    return add(stack, stack.size, value)


# ArrayStack -> (value, ArrayStack)
# returns a value and an ArrayStack with the top value taken off, raises IndexError if empty
def pop(stack):
    return get(stack, length(stack) - 1), remove(stack, length(stack) - 1)[1]


# ArrayStack -> value
# returns the top value of an ArrayStack, raises IndexError if empty
def peek(stack):
    return get(stack, length(stack) - 1)


# ArrayStack -> int
# returns the size of a given ArrayStack
def size(stack):
    return length(stack)


# ArrayStack -> Boolean
# return true if given stack is empty, false if otherwise
def is_empty(stack):
    return length(stack) == 0

