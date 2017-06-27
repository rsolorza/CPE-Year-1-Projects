# TODO: 3 (all), 4 (all)
# from array_list import *
from linked_list import *
import sys


# None -> None
# function loads a given file name, and throws exceptions if not found, or if no file name is given
# Handles IOError if file not found, and IndexError if no command-line argument given
def main():
    try:
        file_name = sys.argv[1]
        file = open(file_name)

        run_program(process_file(file))
        file.close()
    except IOError:
        print("File is not found")
    except IndexError:
        print("Error: Please enter a text file name")


# A songName, Artist, and Album are all Strings, representing the Song Name, artist, and album from a song, respectively
# An Index is a UNIQUE int to a song, IE, no other song should have the same index

# A Song represents a song in a Music Playlist with fields songName, Artist, Album, and Index
class Song:
    def __init__(self, song_name, artist, album, index):
        self.song_name = song_name  # a songName
        self.artist = artist        # an Artist
        self.album = album          # an Album
        self.index = index          # an Index

    def __repr__(self):
        return "%d--%s--%s--%s" % (self.index, self.song_name, self.artist, self.album)

    def __eq__(self, other):
        return type(other) == Song and self.song_name == other.song_name and self.artist == other.artist \
                              and self.album == other.album and self.index == other.index

# A List is one of:
# - an AnyList
# - an ArrayList
# A Database is a List containing Songs, which correspond to songs in a music playlist
# a FileString is a String from a file that corresponds to a song, that should be in the form:
# index--songName--artist--album


# File, Database (optional), Index (Only if inputted database) -> Database
# returns a database filled with songs from a given formatted file. If database given, Songs from file are added to end
# Note: Index should correspond to Index of song
def process_file(file, database=empty_list(), index=0):
    line = 0
    file_string = "\n"
    while file_string != "":
        file_string = file.readline()
        line += 1
        if file_string != '\n' and file_string != '':
            temp_song = splice_line(file_string, line, index)
            if temp_song is not None:
                database = add(database, index, temp_song)
                index += 1
    return database


# a Line is an int corresponding to which line a FileString is from

# FileString, Line, Index -> Song (or None)
# Helper function to Process file, if properly formatted, returns a Song from given String, None otherwise
# Note: a Line does not always equal Index, if a line is formatted wrong, the index DOES NOT increment
def splice_line(file_string, line, index):
    if "\n" in file_string:
        file_string = file_string[0:-1]
    temp_arr = [None] * 3
    i = 0
    while "--" in file_string:
        temp_arr[i] = file_string[0: file_string.index("--")]
        file_string = file_string[file_string.index("--") + 2:]
        i += 1
    temp_arr[i] = file_string
    if temp_arr.__contains__(None) or i != 2:
        print("Line %d: malformed song information" % line)
        return None
    return Song(temp_arr[0], temp_arr[1], temp_arr[2], index)


# Database -> None
# The "Main Menu" of the Music Catalog. Takes a Database to display the Songs. ~Handles~ EOFError
def run_program(database):
    sort_order = 0
    searching_database = empty_list()  # A Database, sorted by lineNumber ALWAYS
    for i in range(length(database)):
        searching_database = add(searching_database, i, get(database, i))

    while True:
        try:
            print("Song Catalog\n" +
                  "   1) Print Catalog\n" +
                  "   2) Song Information\n" +
                  "   3) Sort\n" +
                  "   4) Add Songs\n" +
                  "   0) Quit\n" +
                  "Enter selection: ")
            user_input = input()
            if user_input == "0":
                break
            elif user_input == "1":
                print_catalog(database)
            elif user_input == "2":
                song_information(searching_database)
            elif user_input == "3":
                temp = sort_database(database, sort_order)
                sort_order, database = temp[1], temp[0]
            elif user_input == "4":
                searching_database = add_songs(searching_database)
                database = searching_database
                if sort_order != 0:
                    database = sort_help(database, sort_order)

            else:
                print("Invalid option")
        except EOFError:
            sys.exit()


# Database -> None
# Prints the contents of the Database to the console
def print_catalog(database):
    foreach(database, print)
    print()


# Database -> None
# Prompts the user for a song to fetch information from, and prints the song information to console
# Note: Database HAS to be sorted by line number. Handles ValueError if input is not an int
def song_information(database):
    print("Enter song number: ")
    try:
        user_input = int(input())
        if 0 <= user_input < length(database):
            temp = get(database, user_input)
            if temp.index == user_input:
                print("Number: %d\n" % temp.index +
                      "Title: %s\n" % temp.song_name +
                      "Artist: %s\n" % temp.artist +
                      "Album: %s\n" % temp.album)
        else:
            print("Invalid song Number")

    except ValueError:
        print("Invalid song Number")


# Database, int -> (Database, int)
# returns a tuple with the Database and the sort order after exiting the program
# Prompts the user for how they want a Database sorted, sorts the database if it is a valid entry, otherwise lets the
# user know that it is not a valid choice
# Note: No effect can be seen until user 'Prints Catalog', 'Sort Order' int correspondence can be seen with String
# that is printed to the console. Handles a raised ValueError
def sort_database(database, sort_order):
    print("Sort songs \n" +
          "   0) By Number\n" +
          "   1) By Title\n" +
          "   2) By Artist\n" +
          "   3) By Album\n" +
          "Sort by: ")
    sort_choice = input()
    try:
        sort_order = int(sort_choice)
        database = sort_help(database, sort_order)
    except ValueError:
        print("Invalid Sort Option")
    finally:
        return database, sort_order


# Database, int -> Database, raises ValueError
# returns Database sorted according to a sort order. Helper function to 'Sort'. Raises ValueError if invalid sortOrder
def sort_help(database, sort_order):
    if sort_order == 0:
        database = sort(database, less_than_by_number)
    elif sort_order == 1:
        database = sort(database, less_than_by_title)
    elif sort_order == 2:
        database = sort(database, less_than_by_artist)
    elif sort_order == 3:
        database = sort(database, less_than_by_album)
    else:
        raise ValueError
    return database


# Song, Song -> Boolean
# returns True if song 1's index is less than song2. False if otherwise (including equal)
def less_than_by_number(song1, song2):
    return song1.index < song2.index


# Song, Song -> Boolean
# compares Songs in this order: SongName, Artist, Album, Index. Only moves on to next item if equal (except Index)
# returns True if finds comparison item is less than, False if greater than, otherwise moves onto next comparison item
def less_than_by_title(song1, song2):
    if song1.song_name < song2.song_name:
        return True
    elif song1.song_name == song2.song_name:
        if song1.artist < song2.artist:
            return True
        elif song1.artist == song2.artist:
            if song1.album < song2.album:
                return True
            elif song1.album == song2.album:
                return song1.index < song2.index
    return False


# Song, Song -> Boolean
# compares Songs in this order: Artist, Album, SongName Index. Only moves on to next item if equal (except Index)
# returns True if finds comparison item is less than, False if greater than, otherwise moves onto next comparison item
def less_than_by_artist(song1, song2):
    if song1.artist < song2.artist:
        return True
    elif song1.artist == song2.artist:
        if song1.album < song2.album:
            return True
        elif song1.album == song2.album:
            if song1.song_name < song2.song_name:
                return True
            elif song1.song_name == song2.song_name:
                return song1.index < song2.index
    return False


# Song, Song -> Boolean
# compares Songs in this order: Album, Artist, SongName, Index. Only moves on to next item if equal (except Index)
# returns True if finds comparison item is less than, False if greater than, otherwise moves onto next comparison item
def less_than_by_album(song1, song2):
    if song1.album < song2.album:
        return True
    elif song1.album == song2.album:
        if song1.artist < song2.artist:
            return True
        elif song1.artist == song2.artist:
            if song1.song_name < song2.song_name:
                return True
            elif song1.song_name == song2.song_name:
                return song1.index < song2.index
    return False


# Database -> Database
# Returns a Database, and adds in songs from a user prompted song file.
# Note: Database HAS TO BE sorted by INDEX number. Handles IOError, if user given file is not found
def add_songs(database):
    print("Enter name of file to load: ")
    file_name = input()
    try:
        file = open(file_name)
        database = process_file(file, database, length(database))
        file.close()
    except IOError:
        print("'" + file_name + "': No such file name or directory")
    finally:
        return database


if __name__ == '__main__':
    main()
