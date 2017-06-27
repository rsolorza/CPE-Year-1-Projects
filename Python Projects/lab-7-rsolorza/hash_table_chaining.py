

# a HashTable is a Python builtin list, where every index is either:
# - None
# - Value
# - LinkedList (of Values)
class HashTable:
    def __init__(self):
        self.table = [None] * 8
        self.num_items = 0
        self.table_len = 8
        self.num_collisions = 0

    def __repr__(self):
        return "%r" % self.table

    def __eq__(self, other):
        return type(other) == HashTable and self.table == other.table and self.num_items == other.num_items and \
               self.table_len == other.table_len and self.num_collisions == other.num_collisions


# None -> HashTable
# returns an empty HashTable
def empty_hash_table():
    return HashTable()


# HashTable, int, Value -> HashTable
# returns a HashTable with value inserted at given int index
def insert(table, key, value):
    index = hash(key) % table.table_len
    temp = table.table[index]
    if temp is not None:
        temp = table.table[index]
        a = 0
        while temp is not None:
            if temp.head[1] == key:
                table.num_collisions += 1
                table.table[index] = set(table.table[index], a, (value, key))
                break
            temp = temp.tail
            a += 1
    if temp is None:
        if table.table[index] is not None:
            table.num_collisions += 1
        table.table[index] = Pair((value, key), table.table[index])
        table.num_items += 1

    if load_factor(table) > 1.5:
        temp = table.table
        table.table = [None] * (table.table_len * 2)
        table.table_len *= 2
        table.num_items = 0
        table.num_collisions = 0
        for i in range(temp.__len__()):
            while temp[i] is not None:
                table = insert(table, temp[i].head[1], temp[i].head[0])
                temp[i] = temp[i].tail
    return table


# HashTable, int -> Value
# returns a Value associated with a given key, in a given HashTable
def get(table, key):
    index = hash(key) % table.table_len
    temp = table.table[index]
    while temp is not None:
        if temp.head[1] == key:
            return temp.head[0]
        temp = temp.tail
    raise LookupError


# HashTable, int -> HashTable
# returns a HashTable with the given key removed
def remove(table, key):
    index = hash(key) % table.table_len
    temp = table.table[index]
    b = 0
    while temp is not None:
        if temp.head[1] == key:
            _, table.table[index] = remove_list(table.table[index], b)
            table.num_items -= 1
            return table
        temp = temp.tail
        b += 1
    raise LookupError


# HashTable -> int
# returns the number of items in the HashTable
def size(table):
    return table.num_items


# HashTable -> int
# returns the load factor (numItems / sizeTable) of a HashTable
def load_factor(table):
    return table.num_items / table.table_len


# HashTable -> int
# returns number of collisions of a given HashTable
def collisions(table):
    return table.num_collisions


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
# returns an AnyList, with the value at a given index is changed in a given AnyList
def set(any_list, index, value):
    if (index >= 0 and any_list is None) or index < 0:
        raise IndexError()
    if index == 0:
        return Pair(value, any_list.tail)
    return Pair(any_list.head, set(any_list.tail, index-1, value))


# AnyList, int -> AnyList
# returns an AnyList, which is the same as the given AnyList, only with an element removed at a given index
def remove_list(any_list, index):
    if (index >= 0 and any_list is None) or index < 0:
        raise IndexError()
    if index == 0:
        return any_list.head, any_list.tail
    temp = remove_list(any_list.tail, index-1)
    return temp[0], Pair(any_list.head, temp[1])
