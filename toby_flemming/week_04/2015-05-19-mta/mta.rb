class Line

  def initialize name, stations
    @name = name
    @stations = stations
  end

  def self.travel start_station, end_station
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

    @lines << Line.new("N", ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"])
    @lines << Line.new("L", ["8th", "6th", "Union Square", "3rd", "1st"])
    @lines << Line.new("6", ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"])
  end

  # Instance Methods
  def plan_trip start_line, start_station, end_line, end_station
    line1 = find_line start_line
    line2 = find_line end_line

    # Validate lines
    if !line1 || !line2

    if line1 == line2
      line1.travel start_line, end_station
    else
      line1.travel start_line, "Union Square"
      line2.travel "Union Square", end_line
    end
  end

  def find_line name
    result = nil

    @lines.each do |line|
      result = line if line.get_name == name
    end

    result
  end

end


mta = MTA.new

# puts mta.find_line "N"
mta.plan_trip "N", "", "N", ""



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





