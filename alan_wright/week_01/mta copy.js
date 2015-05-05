// MTA Lab
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
// Hints:

// Work out how you would do it on paper first! Then start to explain that process in Javascript.
// Get the program to work for a single line before trying to tackle multiple lines.
// Don't worry about prompting the user for input. Hard code some values to get it working. You can use prompt() later to make it more interactive.
// Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// The key to the lab is finding the index positions of each stop. (hint: indexOf())
// Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)

// var trainLines = [
// {
//   nLine: 'Time Square', '34th', '28th', '23rd', 'Union Square', '8th'
// },{
//   lLine: '8th', '6th', 'Union Square', '3rd', '1st'
// },{
//   6line: 'Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'
// }
// ];
//Stated the three train lines with the stops as seperate arrays
//total stops is the count of stations stopped at.
//
var nLine = ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'];
var lLine = ['8th', '6th', 'Union Square', '3rd', '1st'];
var sixLine = ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'];
var totalStops;

//takes the departure line and stop,  arrival line and stop 
// and dispays where u left from, your stops in between and if you have to change at union square
var tripPlanner = function (departLine, departStop, arriveLine, arriveStop) {
  totalStops = 0;
  //
  // if the start and stop station are on the same line then we can find the stops from the array
  // otherwise we have to break our journey at union square and change lines. 
  //
  if(departLine === arriveLine){ 
  var allStations = linePlanner(departLine, departStop, arriveStop);
  console.log('You are leaving ' + departStop + ' and are going through ' + allStations + ' and arriving at ' + arriveStop ); // tells you where u left where u went through and where you arrived.

  } else{
    //
    // we have to break the journey at union square
    // first get the departure line information
    // and then get the arrival line information
    // 
    var commonStation = commonElement(getLineArray(departLine),getLineArray(arriveLine));
    var allStations = linePlanner(departLine, departStop, commonStation);
    console.log('You are leaving ' + departStop + ' going through ' + allStations + commonStation);
    console.log('Change at '+ commonStation + ' to the ' + arriveLine);
    totalStops ++;//this adds one to the total stops because it doesn't include the last stop
    var allStations = linePlanner(arriveLine, commonStation, arriveStop);
    console.log('Your journey continues through the following stops:' + allStations + ' and arriving at ' + arriveStop);
 
  }
   console.log('The number of stops is: ' + (totalStops +1));
};

//
// Find the stations in between two stops in the right order
//
var linePlanner = function (departLine, departStop, arriveStop){ 
  var lineArray = getLineArray(departLine); 
  var dsIndex = findIndex(departStop, lineArray); 
  var asIndex = findIndex(arriveStop, lineArray);
  var allStations = ""; //empty var to store the stations it iterates through
  //
  // if the depart stop is less than the arrive stop index (which means you are going forward)
  // get the stations in between
  // and count the number of stops (note we ignore the last stop)
 
 if (dsIndex < asIndex){
  for (var x = dsIndex + 1; x < asIndex; x ++) {
    allStations = allStations + lineArray[x] + ', ';
    totalStops ++;
  }
}
  //
  // if the depart stop is greater than the arrive stop index (which means you are going backwards)
  // get the stations in between
  // and count the number of stops (note we ignore the last stop)
  //
 if (dsIndex > asIndex) {
  for (var x = dsIndex -1; x > asIndex; x --) {
    allStations += lineArray[x] + ', ';
    totalStops ++;
  }
 }




return allStations;
}
//
// Returns the index value of the station withing the line array
//
var findIndex = function (station, line) { 
  for (var i = 0; i < line.length; i++){
    if (station === line[i]){
      return i;
    }  

  }
 
}
//
// The returns the line station array given the name of the line
//
var getLineArray = function (lineName) {
  switch(lineName){
    case 'N':
    return nLine;
    case 'L':
    return lLine;
    case '6':
    return sixLine;
  }
 }


var commonElement = function (arrayOne, arrayTwo) {
  for(var i = 0; i < arrayOne.length; i++) {
    for(var j = 0; j < arrayTwo.length; j++){
      if(arrayOne[i] === arrayTwo[j]) {
        return arrayOne[i];
      }
    }

  }
}

















