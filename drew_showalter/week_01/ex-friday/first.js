// MTA Lab
// Objectives:
// Apply your knowledge of Javascript to solve a real world problem.
// Get really good at array manipulation.

// Activity
// Create a program that models a simple subway system.
// The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:


var lineN = {
	title:'The N Line',
	stops:('Times Square,34th,28th,23rd,Union Square,8th').split(',')
}
var lineL = {
	title:'The L Line',
	stops:('8th,6th,Union Square,3rd,1st').split(',')
}
var line6 = {
	title:'The 6 Line',
	stops:('Grand Central,33rd,28th,23rd,Union Square,Astor Place').split(',')
}

var changingLines = function(firstLine, secondLine) {
	return ((firstLine === secondLine) ? false : true);
}

var retLine = function(namer) {
	if (namer === lineL.title) {
		return lineL;
	} else if (namer === lineN.title) {
		return lineN;
	} else {
		return line6;
	}
}

var motion = function(start, stop , line) {
	arra = [];
	startNum = retLine(line).stops.indexOf(start);
	stopNum = retLine(line).stops.indexOf(stop);
	if (startNum < stopNum) {
		for ( var i = startNum + 1 ; i <= stopNum ; i++ ) {
			arra.push(retLine(line).stops[i]);
		}
	} else {
		for ( var i = startNum ; i > stopNum ; i-- ) {
			arra.push(retLine(line).stops[i]);
		}
	}
	return arra;
}

var getTrip = function(firstLine, start, secondLine, stop) {
	var tripF = [];
	if (changingLines(firstLine, secondLine)) {
		console.log('im runnin this bitch twice!')
		return tripF.concat(motion(start, 'Union Square', retLine(firstLine)), motion('Union Square', stop, retLine(secondLine)));
	} else {
		console.log('im runnin this bitch once!')
		return motion(start,stop,retLine(firstLine));
	}
	return tripF;
} // This is only a suggested function name and signature.

console.log(changingLines('The N Line', 'The N Line'));
console.log(changingLines('The L Line', 'The 6 Line'));
console.log(motion('8th', '3rd', 'The L Line'));
console.log(motion('Astor Place', 'Union Square', 'The 6 Line'));
console.log(getTrip('The 6 Line', 'Astor Place', 'The 6 Line', 'Union Square'));
console.log(getTrip('The L Line', '8th', 'The L Line', 'Union Square'));
console.log(getTrip('The L Line', '8th', 'The N Line', 'Times Square'));
//console.log(planTrip(lineL,'1st', lineL, '8th'));
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

//Object.keys('the object') = ['key 1', 'key 2']