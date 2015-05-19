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

require "pry"

# Define the subway network
mta = { :"N Line" => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
        :"L Line" => ["8th", "6th", "Union Square", "3rd", "1st"],
        :"6 Line" => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor" ]
  };


# Request input from the user
def prompt(msg)
  print "#{msg}: "
  gets.chomp
end

# Find the indexes of the stations needed
def find_stations(mta, origin_station, destination_station)

  # Find the lines the stations are on
  lines = find_lines mta, origin_station, destination_station

  # Find the indexes on the found lines
  origin_index = mta[lines[0]].index(origin_station)
  origin_union_index = mta[lines[0]].index("Union Square")
  dest_union_index = mta[lines[1]].index("Union Square")
  dest_index = mta[lines[1]].index(destination_station)

  # Return an array of the results
  stations = [lines[0], origin_index, origin_union_index, lines[1], dest_union_index, dest_index]
end

# Find the lines the stations are on
def find_lines mta, origin_station, destination_station
  lines = [[],[]]
  mta.each do |line, stations|
    lines[0].push line if stations.include?(origin_station)
    lines[1].push line if stations.include?(destination_station)
  end

  if lines[0] & lines[1] != []
    common_line = lines[0] & lines[1]
    return [ common_line[0], common_line[0] ]   # The 1st line both stations are on
  else
    return [ lines[0][0], lines[1][0] ]         # The 1st line the staions are found on
  end
end

# Create the list of stations including the connection if needed
def build_trip(mta, stations)
  if ( stations[0] == stations[3] )
    # Build the trip
    trip = build_leg(mta[stations[0]], stations[1], stations[5], trip)
  else
    # Build the trip with the change at Union Square
    trip = build_leg(mta[stations[0]], stations[1], stations[2], trip)
    trip = trip[0..-2].push "Change at Union Square to the #{stations[3]} and go through:"
    trip = build_leg(mta[stations[3]], stations[4], stations[5], trip)
  end

  return trip
end

# Append the stations along the trip
def build_leg(line, start, stop, trip)
  trip = trip || []
  while start != stop do
    start += (start < stop) ? 1 : - 1
    trip.push line[start]
  end
  return trip
end

# Display the trip and number of stations
def display_trip(trip)
  puts trip
  puts "Total stations: #{trip.length}\n\n"
end

# Plan the requested trip
def plan_trip (mta, start_station, end_station)

  # Check if the user is already at the destination
  if(start_station == end_station)
    puts "You are already at your destination\n\n"
  else
    # Find the station indexes
    stations = find_stations mta, start_station, end_station

    # Build the trip
    trip = build_trip mta, stations

    #Display the trip
    puts "\n\nTrip: #{start_station} ==> #{end_station}: "
    puts "********************************"
    puts "Starting at #{start_station} on the #{stations[0]}:"
    display_trip trip
  end

end

# Get the trip information
origin_station = prompt "What is the starting station?"
destination_station = prompt "What is the destination station?"

# Plan the trip
plan_trip mta, origin_station, destination_station



















