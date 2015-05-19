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

    puts "Travelling From #{start_station} To #{end_station}"

    if stations_past.empty?
      puts "That Was A Short Trip..."
    else
      puts "Stations Past: #{stations_past.join(", ")}"
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
    line1 = find_line start_line
    line2 = find_line end_line

    binding.pry

    if line1 == line2
      line1.travel start_line, end_station
    else
      line1.travel start_line, "Union Square"
      line2.travel "Union Square", end_line
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
    puts "-----------------------"
    puts "          MTA"
    puts "-----------------------"
    puts "[v]  View Train Lines"
    puts "[p]  Plan Trip"
    puts ""
    puts "[q]  Quit Program"
    puts "-----------------------"
  end

  def main
    option = ''

    display_menu
    while option != 'q'
      print "> "
      option = gets.chomp.downcase

      receive_trip_info if option == 'p'
    end

  end

end


mta = MTA.new
mta.main

# line = Line.new("N", ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"])
# line.travel "Union Square", "Times Square"

# puts mta.find_line "N"
# mta.plan_trip "N", "", "N", ""
# Invalid line
# Invalid station



# line = new Line('N', ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th']);
#   this.lines.push(line);
#   line = new Line('L', ['8th', '6th', 'Union Square', '3rd', '1st']);
#   this.lines.push(line);
#   line = new Line('6', ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']);
# var MTA = {};
# MTA.lines = [];
# MTA.findLine = function(name) {
# MTA.planTrip = function(startLine, startStation, endLine, endStation) {
# MTA.loadLines = function() {
# MTA.main = function() {





