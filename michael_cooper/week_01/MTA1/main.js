// Objectives:

// Apply your knowledge of Javascript to solve a real world problem.
// Get really good at array manipulation.
// Activity

// Create a program that models a simple subway system.

// The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:

// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.

// // console.log() shows output similar to this:
// // "Your must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."
// There are 3 subway lines:
// The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
// The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
// All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
// Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.

// extras if you finish early: try to DRY up your code, comment what you're doing so you could explain it to someone else, add the prompt() to read the user's start and stop stations interactively

// Joel Turnbull [3:51 PM]
// if you want a bigger challenge: do a second version of MTA where all stations appearing on multiple lines (28th, 23rd) can be used to change lines. how much do you need to change your existing code to do this?

// Joel Turnbull [3:53 PM]
// also: see if you can avoid asking the user for their line -- just ask for the station and work out which line they're on for them

var lines = {
  'N': "Times Square, 34th, 28th, 23rd, Union Square, 8th".split(", "),
  'L': "8th, 6th, Union Square, 3rd, 1st".split(", "),
  '6': "Grand Central, 33rd, 28th, 23rd, Union Square, Astor Place".split(", ")
};

var tripPart1 = [];
var tripPart2 = [];

// var start = function () {
  console.log("Welcome to the Subway trip planner");
// };

var planTrip = function(startName, stopStart, endName, stopEnd) {
  var lineStart = lines[startName];
  var lineEnd = lines[endName];

  var tripPart1 = [];
  var tripPart2 = [];
  if (stopStart.toLowerCase() === stopEnd.toLowerCase()) {
    return "Trip is not possible, you are already at your destination.";
  };
  // Check to ensure that the person is not trying to have the same start + end points.

  var multiLine = false;
  if (lineStart !== lineEnd) {
    multiLine = true;
  };
  // This determines if their trip is going to be on a single line or not.

  if (!multiLine) {
    var ssIndex1 = lineStart.indexOf(stopStart);
    var seIndex1 = lineEnd.indexOf(stopEnd);
  } else{
    var ssIndex1 = lineStart.indexOf(stopStart);
    var sLineSwap1 = lineStart.indexOf('Union Square');
    var sLineSwap2 = lineEnd.indexOf('Union Square');
    var seIndex2 = lineEnd.indexOf(stopEnd);
  }
  // Storing the index values makes life much easier later. 

  if (!multiLine) {
    tripLog(ssIndex1, seIndex1, lineStart, tripPart1);
    console.log("You must travel through the following stops on the " + startName + " Line: " + tripPart1.join(", "));
    console.log("There are " + (tripPart1.length-1) + " stops in total.")
  } else {
    tripLog(ssIndex1, sLineSwap1, lineStart, tripPart1);
    tripLog(sLineSwap2, seIndex2, lineEnd, tripPart2);
    console.log("You must travel through the following stops on the " + startName + " Line: "+ tripPart1.join(", "));
    console.log("Then switch at Union Square")
    console.log("Then you must travel through the following stops on the " + endName + " Line: " + tripPart2.join(", "))
    console.log("There are " + ((tripPart1.length-1) + (tripPart2.length-1)) + " stops in total.")
  }
};

var tripLog = function(ssPos, sePos, line, array) {
  if (line[ssPos] === 'Union Square' && line[sePos] === 'Union Square') {
    array.push(line[ssPos]);
    return;
  }
  if (ssPos < sePos) {
    for (var i = ssPos; i < sePos+1; i++) {
        array.push(line[i]);
    }
  } else {
    for (var i = ssPos; i > sePos-1; i--) {
        array.push(line[i]);
    }
  }
};



