// The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
// The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.

// All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)

var FORWARDS  = 'Forwards';
var BACKWARDS = 'Backwards';

var Line = function(name, stations) {
  this.name = name;
  this.stations = stations;
  this.stationsPast = [];
}

// The following function allows users to travel from one station to another
// provided they are on the same line.  This means that each line will only be
// concerned with how users travel on THAT line.
Line.prototype.travel = function(startStation, endStation) {
  var startIDX = this.stations.indexOf(startStation);
  var endIDX = this.stations.indexOf(endStation);

  // Based on the indexes determine which direction the train has to be travelling.
  direction = (endIDX > startIDX) ? FORWARDS : BACKWARDS;

  // Travel down the line (from startStation to endStation) while keeping track
  // of the stations that have passed along the way.
  if (direction === FORWARDS) {
    for (var i = startIDX; i <= endIDX; i++) {
      this.pushStations(i, startIDX, endIDX);
    }
  } else {
    var i = startIDX;
    while (i !== endIDX) {
      this.pushStations(i, startIDX, endIDX);
      i--;

      if (i < 0) {
        i = this.stations.length - 1;
      }
    }
  }

  // After reaching the endStation, report what stations the train passed on its
  // journey.
  console.log('Stations past: ' + this.stationsPast.join(', '));
}

// Used to push stations that have passed.  The reason why this is a function is
// to keep travel dry.  Travel is pushing stations for 'Forwards' and 'Backwards'
// directions and even though its a relatively simple conditional i may have to
// add to it later.
Line.prototype.pushStations = function(i, startIDX, endIDX) {
  if (i !== startIDX && i !== endIDX) {
    this.stationsPast.push(this.stations[i]);
  }
}














var line = new Line('N', ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th']);
//line.travel('Times Square', 'Union Square');
line.travel('Union Square', 'Times Square');
// planTrip(lineN, 'Times Square', lineN, 'Union Square'); //Going forwards
// planTrip(lineN, '34th', lineN, 'Times Square');         //Going backwards