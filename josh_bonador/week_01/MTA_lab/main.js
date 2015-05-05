// Objectives

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
// 

// Hints:

// Work out how you would do it on paper first! Then start to explain that process in Javascript.
// Get the program to work for a single line before trying to tackle multiple lines.
// Don't worry about prompting the user for input. Hard code some values to get it working. You can use prompt() later to make it more interactive.
// Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// The key to the lab is finding the index positions of each stop. (hint: indexOf())
// Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)

var nLine = ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'];
var lLine = ['8th', '6th', 'Union Square', '3rd', '1st'];
var sixLine = ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'];

var stops = [];

console.log("Displaying the 'N', 'L' and '6' lines respectively: ");
console.log('nLine:  ' + nLine.join(', '));
console.log('lLine:  ' + lLine.join(', '));
console.log('sixLine:  ' + sixLine.join(', '));
console.log(' ');
console.log('Use the function: planTrip(startingLine, startingStation, endingLine, endingStation');
console.log("Example: planTrip(lLine, '8th', sixLine, 'Grand Central')");
console.log(' ');

var planTrip = function(startLine, startStation, endLine, endStation) {
    for (var b = 0; b < startLine.length; b++) {
      if (startStation === startLine[b]) 
        var startDestination = startLine[b];
        var startIndex = startLine.indexOf(startDestination); // marks the index of the starting point
    }

    for (var a = 0; a < endLine.length; a++) {
      if (endStation === endLine[a])
        var endDestination = endLine[a];
        var endIndex = endLine.indexOf(endDestination); // marks the index of the end destination
    }

    if (startLine === endLine) {      
      if (startIndex < endIndex) {
        for (b = startIndex; b < (endIndex + 1); b++) {   // line 67-68: determines whether to go up or down the line
          stops.push(startLine[b]);                        // adds each stop travelled to an empty index
        }
      } else {
          for (b = startIndex; b > (endIndex - 1); b--) {
            stops.push(startLine[b]);                        // same thing except goes down the line
          }
      }

    console.log('You must travel through the following stops:'); // logs the stops if journey is in one line
    console.log('     ' + stops.join(', ')); 
    console.log('You must travel a total of ' + stopAmount + ' stops.');
    stops = [];
    }

    var unionIndex = startLine.indexOf('Union Square'); // finds the index of the Union Square on the first inputted train line
    var unionIndex2 = endLine.indexOf('Union Square'); // same thing for the second inputted train line

    if (startLine !== endLine) {

      if (startIndex === unionIndex) {
        stops.push(startLine[startIndex]);              // pushes Union Square to the stops array if user STARTS on UnionSq.
      } else if (startIndex < unionIndex) {
          for (b = startIndex; b < (unionIndex + 1); b++) {
              stops.push(startLine[b]);      // iterates towards UnionSQ, while pushing every stop on the way into stops array
         }
      } else {
          for (b = startIndex; b > (unionIndex - 1); b--) {
              stops.push(startLine[b]);      // same this except iterates in a different direction if conditions are met
          }
      }

      console.log('You must travel through the following stops:');  // logs the first trip up to the transfer at UnionSQ
      console.log('     ' + stops.join(', '));
      var stopAmount = stops.length; // stores the amount of stops in the first half of the trip
      stops = [];

      if (endIndex === unionIndex2) {
        stops.push(endLine[endIndex]) 
      } else if (endIndex < unionIndex2) {
          for (b = (unionIndex2 - 1); b > (endIndex - 1); b--) { // iterates FROM UnionSQ to the destination
              stops.push(endLine[b]);                            // logs the stops in order 
          }
      } else {
          for (b = (unionIndex2 + 1); b < (endIndex + 1); b++) { 
              stops.push(endLine[b]);
          }
      } 

      console.log('     Switch at Union Square');
      console.log('Then continue your journey through to:');
      console.log('     ' + stops.join(', '));
      stopAmount += stops.length;                                  // stores the amount of stops in the seconds half of the trip
      console.log('You must travel for a total of ' + stopAmount + ' stops.'); // logs the amount of stops in the trip
      stops = [];
    }
}



















