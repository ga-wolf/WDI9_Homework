require 'pry'

print "Welcome to the subway trip planner!"

def get_stations
  return {
  :nline => "Times Square, 34th, 28th, 23rd, Union Square, 8th".split(', '),
  :lline => "8th, 6th, Union Square, 3rd, 1st".split(', '),
  :sixline => "Grand Central, 33rd, 28th, 23rd, Union Square, Astor Place".split(', ')}
end

def get_start_station
  print "Please enter the starting station: "
  start_loc = gets.chomp.to_s
  if station_checker(start_loc)
    return start_loc
  else 
    print "invalid station, please try again"
    get_start_station
  end
end

def get_end_station
  print "Please enter the destination station: "
  end_loc = gets.chomp.to_s
  if station_checker end_loc
    return end_loc
  else 
    print "invalid station, please try again"
    get_start_station
  end
end

def station_checker station
  return get_stations.values.flatten.include?(station)
end

def single_line_trip start_loc, end_loc
  get_stations.values.each { |line|
    if line.include?(start_loc) && line.include?(end_loc)
      print "THIS IS A SINGLE LINE TRIP!"
      return true
    end
  }
  print "This is not a single line trip :'("
  return false
end

def plan_trip 
  start_loc = get_start_station
  end_loc = get_end_station
  stations = get_stations
  if single_line_trip(start_loc, end_loc)
    trip = process_single_trip(start_loc, end_loc, stations)
  else
    process_multi_trip(start_loc, end_loc, stations)
  end
end

def process_single_trip start_loc, end_loc, stations
  line_name = ""
  result = []
  stations.each do |line, stations|
    if stations.include?(start_loc) && stations.include?(end_loc)
      line_name = line
    end
  end
  start_ind = stations[line_name].index(start_loc)
  end_ind = stations[line_name].index(end_loc)
  result.push(stations[line_name][start_ind..end_ind])
  print result
  return result
end

binding.pry