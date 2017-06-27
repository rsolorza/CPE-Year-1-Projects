# A CircularQueue is Queue, implemented with Python's built in list, with max capacity of 5000
class CircularQueue:
    def __init__(self):
        self.queue_contents = [None] * 5000
        self.queue_len = 0
        self.front = -1
        self.back = 0

    def __eq__(self, other):
        return type(other) == CircularQueue and self.queue_contents == other.queue_contents and \
               self.queue_len == other.queue_len and self.front == other.front and self.back == other.back

    def __repr__(self):
        if self.queue_len == 0:
            return "[]"
        if self.back > self.front:
            return self.queue_contents[self.back:].__repr__() + self.queue_contents[:self.front + 1].__repr__()
        return self.queue_contents[self.back:self.front+1].__repr__()


# None -> CircularQueue
# returns an empty CircularQueue
def empty_queue():
    return CircularQueue()


# Queue, Value -> Queue
# returns a Queue with the value added, if queue is max capacity, then raises IndexError
def enqueue(queue, value):
    if queue.queue_len == queue.queue_contents.__len__():
        raise IndexError
    if queue.front == queue.queue_contents.__len__() - 1:
        queue.front = -1
    queue.front += 1
    queue.queue_len += 1
    queue.queue_contents[queue.front] = value
    return queue


# Queue -> Queue
# returns a Queue with the next value removed, raises IndexError if empty
def dequeue(queue):
    if queue.queue_len == 0:
        raise IndexError
    temp = queue.queue_contents[queue.back]
    queue.queue_contents[queue.back] = None
    queue.back += 1
    queue.queue_len -= 1
    if queue.back == queue.queue_contents.__len__():
        queue.back = 0
    return temp, queue


# Queue -> value
# returns the next value in the Queue
def peek(queue):
    if queue.queue_len == 0:
        raise IndexError
    return queue.queue_contents[queue.back]


# Queue -> int
# returns the size of the Queue
def size(queue):
    return queue.queue_len


# Queue -> Boolean
# returns True if Queue is empty, false if otherwise
def is_empty(queue):
    return queue.queue_len == 0
