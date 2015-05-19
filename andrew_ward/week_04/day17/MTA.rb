# Subway

require 'rainbow'

def starting_line
  print Rainbow("What Line are you starting your journey on? N, L or Six? ").red
  gets.chomp.capitalize.to_sym
end

def start_stop
  print Rainbow("What station are you beginning your journey at? ").red
  gets.chomp
end

def index_of_start_stop (start_line, lines, starting_stop)
  lines[start_line].find_index(starting_stop)
end

def start_line_union_square_index (start_line, lines)
  lines[start_line].index "Union Square"
end

def trip_function (num,array)
  trip = "Your #{num} trip will take you past "
  array.each do |stop|
    trip += "#{stop}, "
  end
  puts Rainbow(trip.slice(0..-3) + ".").cyan
end

def destination_line_union_square_index (dest_line, lines)
  lines[dest_line].index "Union Square"
end

def destination_line
  print Rainbow("What Line are you ending your journey on? N, L or Six? ").red
  gets.chomp.capitalize.to_sym
end

def destination_stop
  print Rainbow("What station are you ending your journey at? ").red
  final_stop = gets.chomp
end


def index_of_final_stop (dest_line,lines,final_stop)
  lines[dest_line].index(final_stop)
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

  # Find starting stop
  starting_stop = start_stop

  # Index of starting station
  start_ind = index_of_start_stop(start_line, lines, starting_stop)

  # Find final line
  final_line = destination_line

  # Find destination stop
  final_stop = destination_stop

  # Index of destination
  final_index = index_of_final_stop(final_line,lines, final_stop)

  puts Rainbow("You will begin your journey on line #{start_line} at #{starting_stop} and end on line #{final_line} at #{final_stop}.").yellow

  # No journey
  if start_line == final_line && start_ind == final_index
    puts "There is no spoon."

  elsif starting_stop == "Union Square" && final_stop == "Union Square"
    puts "You do not require a train ride."

  # Same line journey
  elsif start_line == final_line

    # Determines which direction and how far the trip is
    only_trip_length = final_index - start_ind

    if only_trip_length < 0
      only_trip = lines[start_line][final_index..start_ind].reverse
    elsif only_trip_length > 0
      only_trip = lines[start_line][start_ind..final_index]
    end

    trip_function "single-line", only_trip

    # Stop count
    if (only_trip.length - 1) > 1
      puts Rainbow("Your journey is #{only_trip.length - 1} stops long").green
    else
      puts Rainbow("Your journey is only 1 stop.").green
    end

  # Multi-line journey
  else

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
      first_trip = lines[start_line][start_ind..start_union_index]
    end

    # First trip function
    trip_function "first", first_trip

    # Notifies how long first line trip is
    # if starting_stop == "Union Square"
    #   puts "Simply switch lines here at Union Square"
    if (first_trip.length - 1) > 1
      puts "Your trip on Line #{start_line} is #{first_trip.length - 1} stops long"
    elsif (first_trip.length - 1 <= 1) && starting_stop != "Union Square"
      puts "Your trip on Line #{start_line} is only 1 stop."
    end
    puts Rainbow("Switch line to Line #{final_line}.").magenta

    # Union Square index of second line
    dest_union_index = destination_line_union_square_index(final_line, lines)


    # Determines which direction and how far final trip is
    final_trip_length = final_index - dest_union_index

    # Array of second trip
    if final_trip_length < 0
      final_trip = lines[final_line][final_index..dest_union_index].reverse
    elsif final_trip_length > 0
      final_trip = lines[final_line][dest_union_index..final_index]
    elsif final_trip_length == 0
      final_trip = lines[final_line][dest_union_index..final_index]
    end

    # Final trip function
    trip_function "final", final_trip

    # Notifies how long first line trip is
    if final_stop == "Union Square"
      puts "Get out at Union Square"
    elsif (final_trip.length - 1) > 1
      puts "Your trip on Line #{final_line} is #{final_trip.length - 1} stops long"
    else
      puts "Your trip on Line #{final_line} is only 1 stop."
    end

    # Stop count
    puts Rainbow("Total trip length is #{first_trip.length + final_trip.length - 2} stops.").green

  end


end

the_big_function
































