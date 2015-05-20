require 'pry'
require 'rainbow'

class Line

  def initialize name, stations
    @name = name
    @stations = stations
  end

  def travel start_station, end_station
    start_idx = @stations.index start_station
    end_idx = @stations.index end_station

    stations_past = Array.new @stations

    # If idx's are in the wrong order adjust variables to suit.  Couldn't find a
    # way of doing a backwards selection e.g. stations_past[4..0]
    if start_idx > end_idx
      stations_past.reverse!
      start_idx = stations_past.index start_station
      end_idx = stations_past.index end_station
    end

    # Create an array of stations past by slicing stations_past and excluding the
    # start/end elements
    stations_past = stations_past[start_idx..end_idx]
    stations_past.shift
    stations_past.pop

    puts Rainbow("Travelling From #{start_station} To #{end_station} (Line #{@name})").black.bg(:yellow)

    if !stations_past.empty?
      puts Rainbow("Stations Past: #{stations_past.join(", ")} (#{stations_past.length})").black.bg(:yellow)
    end
  end

  # Getters
  def get_name
    @name
  end

  def get_stations
    @stations
  end

end










class MTA

  # Initialize the program with pre-defined lines/stations
  def initialize
    @lines = []

    @lines << Line.new("N", ["TIMES SQUARE", "34TH", "28TH", "23RD", "UNION SQUARE", "8TH"])
    @lines << Line.new("L", ["8TH", "6TH", "UNION SQUARE", "3RD", "1ST"])
    @lines << Line.new("6", ["GRAND CENTRAL", "33RD", "28TH", "23RD", "UNION SQUARE", "ASTOR PLACE"])
  end

  # Instance Methods
  def plan_trip start_line, start_station, end_line, end_station
    # line1 = find_line start_line
    # line2 = find_line end_line

    if start_line == end_line
      start_line.travel start_station, end_station
    else
      start_line.travel start_station, "UNION SQUARE"
      end_line.travel "UNION SQUARE", end_station
    end
  end

  def receive_trip_info
    while true
      print "Start Line: "
      start_line = find_line gets.chomp.upcase
      break if start_line
    end

    while true
      print "Start Station: "
      start_station = gets.chomp.upcase
      break if start_line.get_stations.index(start_station) != nil
    end

    while true
      print "End Line: "
      end_line = find_line gets.chomp.upcase
      break if end_line
    end

    while true
      print "End Station: "
      end_station = gets.chomp.upcase
      break if end_line.get_stations.index(end_station) != nil
    end

    plan_trip start_line, start_station, end_line, end_station
  end

  def find_line name
    result = nil

    @lines.each do |line|
      result = line if line.get_name == name
    end

    result
  end

  def display_menu
    system "clear"
    puts Rainbow("-----------------------").red
    puts Rainbow("          MTA").red
    puts Rainbow("-----------------------").red
    puts Rainbow("[v]  View Train Line Info").red
    puts Rainbow("[p]  Plan Trip").red
    puts Rainbow("[c]  Clear Menu").red
    puts ""
    puts Rainbow("[q]  Quit Program").red
    puts Rainbow("-----------------------").red
  end

  def display_train_info
    @lines.each do |line|
      puts Rainbow("#{line.get_name} - #{line.get_stations.join(", ")}").black.bg(:yellow)
    end
  end

  def main
    option = ''

    display_menu
    while option != 'q'
      print "> "
      option = gets.chomp.downcase

      receive_trip_info if option == 'p'
      display_menu if option == 'c'
      display_train_info if option == 'v'
    end

  end

end


mta = MTA.new
mta.main





