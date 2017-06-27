from event_queue import *
import sys


def print_each_second(equeue):
    print('\ttime {}: every one'.format(equeue.v_time))
    add_event(equeue, print_each_second, 1)


def print_each_five_seconds(equeue):
    print('\ttime {}: every five'.format(equeue.v_time))
    add_event(equeue, print_each_five_seconds, 5)


def print_fifteen(equeue):
    print('\ttime {}: fifteen'.format(equeue.v_time))


def stop(equeue):
    print('\ttime {}: stopping'.format(equeue.v_time))
    sys.exit(0)


if __name__ == '__main__':
    equeue = EventQueue()

    add_event(equeue, print_each_second, 1)
    add_event(equeue, print_each_five_seconds, 5)
    add_event(equeue, print_fifteen, 15)
    add_event(equeue, stop, 20)

    run_events(equeue)
