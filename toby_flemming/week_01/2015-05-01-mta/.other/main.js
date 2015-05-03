/*
 _     _
| |   (_)
| |    _ _ __   ___
| |   | | '_ \ / _ \
| |___| | | | |  __/
\_____/_|_| |_|\___|

*/

var Line = function(name, stations) {
  this.name = name;
  this.stations = stations;
  this.stationsPast = [];
}

// The following function allows users to travel from one station to another
// provided they are on the same line.  This means that each line will only be
// concerned with how users travel on THAT line.
Line.prototype.travel = function(startStation, endStation) {
  var FORWARDS  = 'Forwards';
  var BACKWARDS = 'Backwards';
  this.stationsPast = [];

  $('.station.selected').toggleClass('selected');
  var startIDX = this.stations.indexOf(startStation);
  var endIDX = this.stations.indexOf(endStation);
  $('.station#' + endIDX).toggleClass('selected');

  if (startIDX > endIDX) {
    this.stations.reverse();
    startIDX = this.stations.indexOf(startStation);
    endIDX = this.stations.indexOf(endStation);
  }

  // Travel down the line (from startStation to endStation) while keeping track
  // of the stations that have passed along the way.
    for (var i = startIDX + 1; i <= endIDX; i++) {
      this._pushStations(i, startIDX, endIDX);
    }

  // After reaching the endStation, report what stations were involved.
  console.log('Travelling from ' + startStation + ' to ' + endStation + ' (along line ' + this.name + ')');
  console.log('Stations past along the way: ' + this.stationsPast.join(', '));

}

// Used to push stations that have passed.  The reason why this is a function is
// to keep travel dry.  Travel is pushing stations for 'Forwards' and 'Backwards'
// directions and even though its a relatively simple conditional i may have to
// add to it later.
Line.prototype._pushStations = function(i, startIDX, endIDX) {
  if (i !== startIDX && i !== endIDX) {
    this.stationsPast.push(this.stations[i]);
  }
}











/*
___  ________ ___
|  \/  |_   _/ _ \
| .  . | | |/ /_\ \
| |\/| | | ||  _  |
| |  | | | || | | |
\_|  |_/ \_/\_| |_/

*/

console.log('--------------------------------------');
console.log('MTA Lab - Call MTA.main() to begin!');
console.log('--------------------------------------');
var MTA = {};
MTA.lines = [];

MTA._findLine = function(name) {
  var result;

  this.lines.forEach(function(line) {
    if (line.name === name) {
      result = line;
      return;
    }
  });

  if (!result)console.log("Line '" + name + "' not found.");
  return result;
}

MTA.planTrip = function(startLine, startStation, endLine, endStation) {
  var switchLines;
  var line1, line2; // Holds Line objects when a line switch is needed
  var UNION_SQUARE = 'Union Square';

  switchLines = (startLine !== endLine) ? true : false;
  if (switchLines) {
    line1 = this._findLine(startLine);
    line2 = this._findLine(endLine);

    console.log('Line switch required.  Heading to ' + UNION_SQUARE + '.');

    // Get to the common station
    line1.travel(startStation, UNION_SQUARE);

    // Switch trains and finish journey
    console.log('Switching from line ' + startLine + ' to line ' + endLine);
    line2.travel(UNION_SQUARE, endStation);
  } else {
    line1 = this._findLine(startLine);
    line1.travel(startStation, endStation);
  }
}

MTA.loadLines = function() {
  var line;

  line = new Line('N', ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th']);
  this.lines.push(line);
  line = new Line('L', ['8th', '6th', 'Union Square', '3rd', '1st']);
  this.lines.push(line);
  line = new Line('6', ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']);
  this.lines.push(line);
}

MTA.main = function() {
  var startLine, endLine;
  var startStation, endStation;

  MTA.loadLines();

  while (startLine === undefined)startLine = this._findLine( prompt('Enter Start Line:') );
  while (startStation === undefined)startStation = this._findStation( prompt('Enter Start Station:') );
  while (endLine === undefined)endLine = this._findLine( prompt('Enter End Line:') );
  while (endStation === undefined)endStation = this._findStation( prompt('Enter End Line:') );
}
























