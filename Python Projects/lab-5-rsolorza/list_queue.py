from linked_list import *


# a Queue represents a structure with elements, that can be added (enqueued) or removed (dequeued)
class Queue:
    def __init__(self):
        self.front = empty_list()    # a LinkedList
        self.reverse = empty_list()  # a LinkedList
        self.queue_len = 0           # an int representing current size of queue

    def __repr__(self):
        return "" + self.front.__repr__() + reverse(self.reverse).__repr__()

    def __eq__(self, other):
        return type(other) == Queue and self.front == other.front and self.reverse == other.reverse


# None -> ListQueue
# returns an empty List Queue
def empty_queue():
    return Queue()


# Queue, Value -> Queue
# returns a Queue with the value added to the Queue
def enqueue(queue, value):
    if queue.front is None:
        queue.front = Pair(value, None)
    else:
        queue.reverse = add(queue.reverse, 0, value)
    queue.queue_len += 1
    return queue


# Queue -> Value, Queue
# returns a Queue with the next value removed
def dequeue(queue):
    if is_empty(queue):
        raise IndexError
    temp = 0
    if queue.front.tail is None:
        temp = queue.front.head
        queue.front = reverse(queue.reverse)
        queue.reverse = empty_list()
    else:
        temp = queue.front.head
        queue.front = queue.front.tail
    queue.queue_len -= 1
    return temp, queue


# Queue -> Value
# returns next value in the Queue
def peek(queue):
    if is_empty(queue):
        raise IndexError
    return queue.front.head


# List -> List
# returns the reversed of the given List
def reverse(linked):
    temp = empty_list()
    while linked is not None:
        temp = add(temp, 0, linked.head)
        linked = linked.tail
    return temp


# Queue -> int
# returns the size of a given queue
def size(queue):
    return queue.queue_len


# Queue -> Boolean
# returns True if Queue is empty, false if otherwise
def is_empty(queue):
    return queue.queue_len == 0
