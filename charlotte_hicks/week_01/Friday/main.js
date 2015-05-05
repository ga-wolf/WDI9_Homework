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

// EG: planTrip('N', 'Times Square', '6', '33rd');



//array of stations
var trainLines = [
  {
    name: "lineN",
    stations: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"]
  },

  {
    name: "lineL",
    stations: ["8th", "6th", "Union Square", "3rd", "1st"]
  },

  {
    name: "line6",
    stations: ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
  }
]

//start the func-ception 
var planTrip = function(startLine,startStation,endLine,endStation) {
  var startLine = startLine;
  lineChange();

}


// determine if you need to change lines

var lineChange = function(startLine,endLine){
  if (startLine !== endLine) {
    findIndexOfStart();
    findIndexOfEnd();
    console.log("Change at Union Square.");
  }
  else {
    findIndexesOnSameLine();
  }
}





//if they don't need to change station, go through here
var findIndexesOnSameLine = function(startLine,startStation,endStation) {                          
  if (startLine === trainLines[0]) {
      var train = trainLines[0];
      var x = trainLines[0].stations.indexOf(startStation);
      var y = trainLines[0].stations.indexOf(endStation); 
      sliceArraysOnSameLine();
  }
  else if (startLine === trainLines[1]) {
      var train = trainLines[1];
      var x = trainLines[1].stations.indexOf(startStation);
      var y = trainLines[1].stations.indexOf(endStation); 
      sliceArraysOnSameLine();
  }
  else {
      var train = trainLines[2];
      var x = trainLines[2].stations.indexOf(startStation);
      var y = trainLines[2].stations.indexOf(endStation); 
      sliceArraysOnSameLine();
  }
}

//if they do need to change station, find the start of the trip
var findIndexOfStart = function() {
  if (startLine === trainLines[0]) {
      var x = trainLines[0].stations.indexOf(startStation);
      var y = trainLines[0].stations.indexOf('Union Square'); 
      sliceStartArray();
  }
  else if (startLine === trainLines[1]) {
      var x = trainLines[1].stations.indexOf(startStation);
      var y = trainLines[1].stations.indexOf('Union Square'); 
      sliceStartArray();
  }
  else {
      var x = trainLines[2].stations.indexOf(startStation);
      var y = trainLines[2].stations.indexOf('Union Square'); 
      sliceStartArray();
  }
}

//if they do need to change station, find the end of the trip

var findIndexOfEnd = function() {
  if (startLine === trainLines[0]) {
      var a = trainLines[0].stations.indexOf(endStation);
      var b = trainLines[0].stations.indexOf('Union Square');
      sliceEndArray();
  }
  else if (startLine === trainLines[1]) {
      var a = trainLines[1].stations.indexOf(endStation);
      var b = trainLines[1].stations.indexOf('Union Square'); 
      sliceEndArray();
  }
  else {
      var a = trainLines[2].stations.indexOf(endStation);
      var b = trainLines[2].stations.indexOf('Union Square'); 
      sliceEndArray();
  }
}







  





var sliceArraysOnSameLine = function(x,y) {   //<<<need to find a way to define train and stations
                                              //this doesn't work, variables don't seem to work, putting the whole thing in again doesn't work. Possibly need to loop or put another massive if else in again.
  if (x < y) {
    trainLines.stations.slice(x,y);
  }
  else {
    trainLines.stations.slice(x,-y);
  }
}

var sliceStartArray = function(x,y) {
  if (x < y) {
    trainLines.stations.slice(x,y);
  }
  else {
    trainLines.stations.slice(x,-y);
  }
}

var sliceEndArray = function(a,b) {
  if (a > b) {
    trainLines.stations.slice(a,b);
  }
  else {
    trainLines.stations.slice(a,-b);
  }
}






var joinTrip = function() {

}























