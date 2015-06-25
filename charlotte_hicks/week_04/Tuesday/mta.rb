# Activity:

# Students should create a program that models a simple subway system.

# The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the total number of stops for the trip.

# There are 3 subway lines:
# The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
# The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
# The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
# All 3 subway lines intersect at Union Square, but there are no other intersection points.
# For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.
# Hints:

# Don't worry about user input initially: get it working with hardcoded values first, and wire up the user interface once that's working
# Consider diagraming the lines by sketching out the subway lines and their stops and intersection.
# Make subway lines keys in a hash, while the values are an array of all the stops on each line.
# The key to the lab is to find the intersection of the lines at Union Square.
# Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)


#N line :  Times Square, 34th, 28th, 23rd, Union Square, 8th
#L line :                        8th, 6th, Union Square, 3rd, 1st
#6 line : Grand Central, 33rd, 28th, 23rd, Union Square, Astor Place

################ HASH OF LINES AND THEIR STATIONS ####################

train_lines_and_stations = {
"N" => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
"L" => ["8th", "6th", "Union Square", "3rd", "1st"],
"6" => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
}


################ USER INPUT ####################

#Ask the user what station and line they are departing from
print "What line are you leaving from?: "
start_line = gets.chomp
print "What station are you leaving from?: "
start_station = gets.chomp

#Ask the user which station and line they would like to arive at
print "What line is your desination on?: "
finish_line = gets.chomp
print "What station is your destination at?: "
finish_station = gets.chomp

################ FINDING INDEXES ####################

#finds where the start station is located in the array
start_station_index = train_lines_and_stations[start_line].index(start_station)
#finds the index of Union Square on the start line
start_union_square_index = train_lines_and_stations[start_line].index("Union Square")

#finds where the finish station is located in the array
finish_station_index = train_lines_and_stations[finish_line].index(finish_station)
#finds the index of Union Square on the start line
finish_union_square_index = train_lines_and_stations[finish_line].index("Union Square")

################ DETERMINING OUTPUT ####################

#Checks to see if they have put in the same destination as their starting point and lets them know
if start_line == finish_line && start_station == finish_station
  print "Go home, you're drunk." "\n"

#Runs if both the starting and finishing stations are on the same line
elsif start_line == finish_line
  if start_station_index < finish_station_index #if the start comes before the end on the array
    trip = train_lines_and_stations[start_line].slice(start_station_index..finish_station_index)
  else
    trip = train_lines_and_stations[start_line].slice(finish_station_index..start_station_index)
  end
  print "You will need to travel through #{trip.length} stops to reach your destination" "\n"

elsif  
  if start_station_index < start_union_square_index #if the start comes before union square on the array
    #slices from the start station index to the index of Union Square
    start = train_lines_and_stations[start_line].slice(start_station_index..start_union_square_index)
  else
    start = train_lines_and_stations[start_line].slice(start_union_square_index..start_station_index).reverse
  end

  if finish_station_index > finish_union_square_index #if the finish comes before union square on the array
    #slices from the finish station index to the index of Union Square
    finish = train_lines_and_stations[finish_line].slice(finish_union_square_index..finish_station_index)
  else
    finish = train_lines_and_stations[finish_line].slice(finish_station_index..finish_union_square_index).reverse
  end
  #Joins the two halves of the trip together and then flattens them
  trip = (start << finish).flatten.uniq

  print "You will need to travel through #{trip.length} stops, changing at Union Square, to reach your destination" "\n"
end







