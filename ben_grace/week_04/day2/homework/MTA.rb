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
require 'pry'

$lines = {
  :line_n => "Times Square, 34th, 28th_N, 23rd_N, Union Square, 8th_N".split(', '),
  :line_l => "8th_L, 6th, Union Square, 3rd, 1st".split(', '),
  :line_6 => "Grand Central, 33rd, 28th_6, 23rd_6, Union Square, Astor Place".split(', ')
}

$travel_total = []

$line_n = $lines[:line_n]
$line_l = $lines[:line_l]
$line_6 = $lines[:line_6]


$union_6 = $lines[:line_6][4]
$union_l = $lines[:line_l][2]
$union_n = $lines[:line_n][4]

line_one = gets.chomp
line_two = gets.chomp
station_one = gets.chomp
station_two = gets.chomp


def same_station station_one, station_two
  if station_one == station_two
    puts "you are already at your destination"
  end
end
######
######
def move_line_n station_one, station_two
  $line_n
  same_station station_one, station_two
  current_location = $line_n.index station_one
  destination_location = $line_n.index station_two 
  if current_location > destination_location
    #This prints the travel log from the destination first, then reverses the array to immitate travelling backwards down the array.
    $travel_total += $line_n[destination_location..current_location].reverse
  else
    $travel_total += $line_n[current_location..destination_location]
  end
  binding.pry
end
######
######
def move_line_l station_one, station_two
  $line_l
  same_station station_one, station_two
  current_location = $line_l.index station_one #receives the index in the line_l that corresponds to the station selected in station one
  destination_location = $line_l.index station_two #receives the index in the line_l that corresponds to the station selected in station two
  if current_location > destination_location
    #This prints the travel log from the destination first, then reverses the array to immitate travelling backwards down the array.
    $travel_total += $line_l[destination_location..current_location].reverse
  else
    $travel_total += $line_l[current_location..destination_location]
  end
  binding.pry
end
######
######
def move_line_6 station_one, station_two
  $line_6
  same_station station_one, station_two
  current_location = $line_6.index station_one
  destination_location = $line_6.index station_two 
  if current_location > destination_location
     #This prints the travel log from the destination first, then reverses the array to immitate travelling backwards down the array.
    $travel_total += $line_6[destination_location..current_location].reverse
  else
    $travel_total += $line_6[current_location..destination_location]
  end
  binding.pry
end

#Gets the first line to union from current location
def change_at_union line_one, station_one
  if line_one == $line_n
    move_line_n station_one, $unionN
  end

  if line_one == $line_6
    move_line_6 station_one, $union_6
  end

  if line_one == $line_l
    move_line_l station_one, $union_l
  end
# binding.pry
end

#Gets the second line from union to the desired destination
def move_from_union line_two, station_two
  if line_two == $line_n
    move_line_n $union_n, station_two
  end

  if line_two == $line_6
    move_line_6 $union_6, station_two
  end

  if line_two == $line_l
    move_line_l $union_l, station_two
  end
  # binding.pry
end

#method to run if the passenger is not changing lines
def travel_same_line line_one, station_one, station_two
  if line_one == $line_n
    move_line_n station_one, station_two
  end

  if line_one == $line_6
    move_line_6 station_one, station_two
  end

  if line_one == $line_l
    move_line_l station_one, station_two
  end
end

def travel line_one, station_one, line_two, station_two
    if line_one != line_two
      change_at_union line_one, station_one
      move_from_union line_two, station_two
      $travel_total
    end
    if line_one == line_two
      travel_same_line line_one, station_one, station_two
    end
    binding.pry
end
 

travel $line_l, '8th_L', $line_l, '8th_L'

# move_line_l '6th', '1st'

print $travel_total.uniq
