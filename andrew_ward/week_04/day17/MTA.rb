# Subway

def starting_line
  puts "What line are you starting your journey on? N, L or Six?"
  gets.chomp.capitalize.to_sym
end

def index_of_start_stop (start_line, lines)
  puts "What station are you beginning your journey at?"
  starting_stop = gets.chomp
  puts "You will start your journey at #{starting_stop} on line #{start_line.to_s}"
  lines[start_line].find_index(starting_stop)
end

def start_line_union_square_index (start_line, lines)
  lines[start_line].index "Union Square"
end

def first_trip_function (array)
  trip = "Your trip will take you past "
  array.each do |stop|
    trip += "#{stop} and "
  end
  puts trip + "."
end

def destination_line_union_square_index (dest_line, lines)
  lines[dest_line].index "Union Square"
end

def destination_line
  puts "What line are you ending your journey on? N, L or Six?"
  gets.chomp.capitalize.to_sym
end

def index_of_final_stop (dest_line,lines)
  puts "What station are you ending your journey at?"
  final_stop = gets.chomp
  puts "You will end your journey at #{final_stop} on line #{dest_line.to_s}"
  lines[dest_line].index(final_stop)
end

def final_trip_function (array)
  trip = "Your trip will take you past "
  array.each do |stop|
    trip += " #{stop} and "
  end
  puts trip + "."
end



#################################################################

#                     THE BIG DOG                               #

#################################################################


def the_big_function

  lines = {
    :N => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    :L => ["8th", "6th", "Union Square", "3rd", "1st"],
    :Six => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
  }

  # Find start line
  start_line = starting_line

  # Index of starting station
  start_ind = index_of_start_stop(start_line, lines)

  # Union Square index of first line
  start_union_index = start_line_union_square_index(start_line,lines)

  # Determines which direction and how far first trip is
  first_trip_length = start_union_index - start_ind

  # Array of first trip
  if first_trip_length < 0
    first_trip = lines[start_line][start_union_index..start_ind].reverse
  elsif first_trip_length > 0
    first_trip = lines[start_line][start_ind..start_union_index]
  elsif first_trip_length == 0
    puts "CHEERS M8"
  end

  # First trip function
  first_trip_function first_trip
  puts "Your trip on line #{start_line} is #{first_trip.length - 1} stops long."

  # Find final line
  final_line = destination_line

  # Union Square index of second line
  dest_union_index = destination_line_union_square_index(final_line, lines)

  # Index of destination
  final_index = index_of_final_stop(final_line,lines)

  # Determines which direction and how far final trip is
  final_trip_length = final_index - dest_union_index

  # Array of second trip
  if final_trip_length < 0
    final_trip = lines[final_line][final_index..dest_union_index].reverse
  elsif final_trip_length > 0
    final_trip = lines[final_line][dest_union_index..final_index]
  elsif final_trip_length == 0
    puts "CHEERS M8"
  end

  # Final trip function
  final_trip_function final_trip
  puts "Your trip on line #{final_line} is #{final_trip.length - 1} stops long."

  # Stop count
  puts "Total trip length is #{first_trip.length + final_trip.length - 2} stops."

end

the_big_function
































