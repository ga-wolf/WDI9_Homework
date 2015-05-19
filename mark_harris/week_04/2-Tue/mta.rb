# Title: MTA Lab
# Activity:

# Students should create a program that models a simple subway system.

# The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the total number of stops for the trip.

# There are 3 subway lines:
# The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
# The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
# The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
# All 3 subway lines intersect at Union Square, but there are no other intersection points.
# For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.



# Define the subway network
MTA = { "N" => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
        "L" => ["8th", "6th", "Union Square", "3rd", "1st"],
        "6" => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor" ]
  };

# Request input from the user
def prompt(msg)
  print "#{msg}: "
  gets.chomp
end

# Append the stations to the trip
def build_leg(line, start, stop, trip)
  while start != stop do
    start = (start < stop) ? start + 1 : start - 1
    trip.push line[start]
  end
  return trip
end

# Get the trip information
origin_station = prompt "What is the starting station?"
origin_line = prompt "What line is the starting station on?"
destination_station = prompt "What is the destination station?"
destination_line = prompt "What line is the destination station on?"

# Set up the trip display
puts "\n\nTrip: #{origin_station} on the #{origin_line} Line ==> #{destination_station} on the #{destination_line} Line:"
puts "*****************************************************"
puts "Starting at #{origin_station} on the #{origin_line} Line, go to:"

trip = []

if ( origin_line == destination_line )

  # Find the index of the 2 stations
  origin_index = MTA[origin_line].index(origin_station)
  destination_index = MTA[origin_line].index(destination_station)

  # Build the trip
  trip = build_leg(MTA[origin_line], origin_index, destination_index, trip)

else

  # Find the index of the 2 stations and Union Square
  origin_index = MTA[origin_line].index(origin_station)
  origin_union_index = MTA[origin_line].index("Union Square")
  dest_union_index = MTA[destination_line].index("Union Square")
  dest_index = MTA[destination_line].index(destination_station)
  
  # Build the trip with the change at Union Square
  trip = build_leg(MTA[origin_line], origin_index, origin_union_index, trip)
  trip = trip[0..-2].push "Change at Union Square to the #{destination_line} Line and go through:"
  trip = build_leg(MTA[destination_line], dest_union_index, dest_index, trip)

end

# Display the trip
puts trip
puts "Total stations: #{trip.length}\n\n"























