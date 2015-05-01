// The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
// The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.

// All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)

var lineN = ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'];

var planTrip = function(startLine, startStation, endLine, endStation) {
  var startIDX = startLine.indexOf(startStation);
  var endIDX = endLine.indexOf(endStation);
  var stationsPast = [];

  direction = (endIDX > startIDX) ? 'Forwards' : 'Backwards';
  console.log(direction);

  for (var i = startIDX; i <= endIDX; i++) {
    if (i !== startIDX && i !== endIDX) {
      stationsPast.push(startLine[i]);
    }
  }
}

planTrip(lineN, 'Times Square', lineN, 'Union Square'); //Going forwards
planTrip(lineN, '34th', lineN, 'Times Square');         //Going backwards