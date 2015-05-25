require 'pry'

train_system = {
:n_line => ['Times Square', '34th', '28thN', '23rdN', 'Union Square', '8thN'],
:l_line => ['8thL', '6th', 'Union Square', '3rd', '1st'],
:six_line => ['Grand Central', '33rd', '28th6', '23rd6', 'Union Square', 'Astor Place']
}


def goto_union trip_array, union_index
  puts "You will be travelling through these stops:"
  trip_array[0..union_index].each do |station|
    puts "    #{station}"
  end
end

def goto_destination trip_array, union_index
  puts "Continue along these stops to reach destination:"
  trip_array[union_index..(trip_array.length - 1)].each do |station|
    puts "    #{station}"
  end
end

def plan_transfer_line trip_array
  binding.pry
  union_index = trip_array.index("Union Square")
  goto_union(trip_array, union_index)
  puts "**Transfer at Union Square**"
  goto_destination(trip_array, union_index)
end

def plan_same_line start_index, end_index, start_line           # Logs the journey if both stations on the same line
  puts "You will be travelling on these stops" 
  train_system[start_line][start_index..end_index].each do |station|
    puts "    #{station}" 
  end
end



puts "Out of 'n_line', 'l_line' and 'six_line', where are you starting?"
start_line = gets.chomp.to_sym

puts "What station are you starting at?"
start_station = gets.chomp.to_s

puts "Out of 'n_line', 'l_line' and 'six_line', where are you ending your trip?"
end_line = gets.chomp.to_sym

puts "What station do you want to go to?"
end_station = gets.chomp.to_s


# start_line = train_system[:n_line] 
# start_station = 'Times Square'
# end_line = train_system[:six_line]
# end_station = '23rd6'

start_index = train_system[start_line].index(start_station)
end_index = train_system[end_line].index(end_station)

start_union_index = train_system[start_line].index('Union Square')
end_union_index = train_system[end_line].index('Union Square')

binding.pry

if start_line == end_line
  plan_same_line(start_index, end_index, start_line)
end

if start_index < start_union_index
  if end_union_index > end_index
    trip_array = (train_system[start_line][start_index..start_union_index] + train_system[end_line][end_index..end_union_index].reverse).uniq!
    plan_transfer_line(trip_array)
  else 
    trip_array = (train_system[start_line][start_index..start_union_index] + train_system[end_line][end_index..end_union_index]).uniq!  
    plan_transfer_line(trip_array)
  end
else 
  if end_union_index > end_index
    trip_array = (train_system[start_line][start_index..start_union_index].reverse + train_system[end_line][end_index..end_union_index].reverse).uniq!
    plan_transfer_line(trip_array)
  else 
    trip_array = (train_system[start_line][start_index..start_union_index] + train_system[end_line][end_index..end_union_index]).uniq!  
    plan_transfer_line(trip_array)
  end
end
