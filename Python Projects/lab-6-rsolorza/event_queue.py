from priority_queue import *
import time


# An EventQueue contains a PriorityQueue and a virtual time, and contains
class EventQueue:
    def __init__(self):
        self.p_queue = empty_pqueue(comes_before)
        self.v_time = 0

    def __repr__(self):
        return "At time %d, EventQueue is: %r" % (self.v_time, self.p_queue)

    def __eq__(self, other):
        return type(other) == EventQueue and self.p_queue == other.p_queue and self.v_time == other.v_time


def comes_before(a, b):
    return a[1] < b[1]


def add_event(e_queue, event, time_delay):
    if time_delay < 0:
        print("Error, cannot add events into the past")
    else:
        e_queue.p_queue = enqueue(e_queue.p_queue, (event, time_delay + e_queue.v_time))


def run_events(e_queue):
    while not is_empty(e_queue.p_queue):
        temp_time = peek(e_queue.p_queue)[1] - e_queue.v_time
        time.sleep(temp_time)
        e_queue.v_time += temp_time
        func, e_queue.p_queue = dequeue(e_queue.p_queue)
        func[0](e_queue)
