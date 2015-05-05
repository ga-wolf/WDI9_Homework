// MTA Lab
// Objectives:

// Apply your knowledge of Javascript to solve a real world problem.
// Get really good at array manipulation.
// Activity

// Create a program that models a simple subway system.

// The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:

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

var lines = {
'N': ['Times Square','34th','28th','23rd','Union Square','8th'],
'L': ['8th','6th','Union Square','3rd','1st'],
'6': ['Grand Central','33rd','28th','23rd','Union Square','Astor Place']
};

var unionSquareInd = function (line) { // Gets index of Union Square depending on which line you are on
	if (line === 'N') {
		return lines[line].indexOf('Union Square');

	} else if (line === 'L') {
		return lines[line].indexOf('Union Square');

	} else if (line === '6') {
		return lines[line].indexOf('Union Square');

	} else {
		return 'Line does not exist.'
	}
};

var directionOfUS = function (start,line) { // decides how many stops to go forwards or backwards to Union Square
	var direction = unionSquareInd(line) - lines[line].indexOf(start);
	return direction;
};

var firstLineTrip = function (start,line) { // lists the stops you will make before you switch at Union Square
	var direction = directionOfUS(start,line); // ^^
	var firstTrip = 'Travel through Line ' + line + ' past '; // Make this similar to secondLineTrip equivalent then tidy up ending!!

	if (direction > 0) {
		for (var i = lines[line].indexOf(start); i <= unionSquareInd(line); i++) {
			firstTrip += lines[line][i] + ', ';
		}

	} else if (direction < 0) {
		for (var i = lines[line].indexOf(start); i >= unionSquareInd(line); i--) {
			firstTrip += lines[line][i] + ', ';
		}

	} else {
		firstTrip = 'Start at Union Square on Line ' + line + ' to transfer.';
	}
	console.log(firstTrip.slice(0,-2) + '.');
};

var destinationDirection = function (end,line) { // determines which way to final destination
	var direction = lines[line].indexOf(end) - unionSquareInd(line);
	return direction;
};

var secondLineTrip = function (end,line) { // gets you to second line and to final destination
	var direction = destinationDirection(end,line);
	var secondTrip = 'On Line ' + line + ' your journey takes you to the following stops: ';

	if (direction > 0) {
		for (var i = unionSquareInd(line); i <= lines[line].indexOf(end); i++) {
			secondTrip += lines[line][i] + ', ';
		}
	} else if (direction < 0) {
		for (var i = unionSquareInd(line); i >= lines[line].indexOf(end); i--) {
			secondTrip += lines[line][i] + ', ';
		}
	} else {
		secondTrip = 'End at Union Square, Line ' + line + '.';
	}
	console.log(secondTrip.slice(0,-2) + '.');
};

var directionSameLine = function (start,line,end) { // determines if you move forward or backwards on same line
	var direction = lines[line].indexOf(end) - lines[line].indexOf(start);
	return direction;

};

var sameLineTrip = function (start,line,end) { // Logs trip which doesn't change line
	var trip = 'You must begin at ' + start + ' on Line ' + line + ' and then proceed via ';
	var direction = directionSameLine(start,line,end);

	if (direction > 0) {
		for (var i = lines[line].indexOf(start); i <= lines[line].indexOf(end); i++) {
			trip += lines[line][i] + ', ';
		}
	} else if (direction < 0) {
		for (var i = lines[line].indexOf(start); i >= lines[line].indexOf(end); i--) {
			trip += lines[line][i] + ', ';
		}
	} else {
		trip = 'derp.'
	}
	console.log(trip);
};

// FIGURE OUT HOW MANY STOPS IN TOTAL
var totalStops = function (indexTrip1,indexTrip2) {
	var amount1 = -indexTrip1 > 0 ? -indexTrip1 : indexTrip1;
	var amount2 = -indexTrip2 > 0 ? -indexTrip2 : indexTrip2;
	return amount1 + amount2;
};

var planTrip = function (startLine,start,endLine,end) {
	console.log('You are starting your journey at ' + start + ' on Line ' + startLine + ' and ending your journey at ' + end + ' on Line ' + endLine + '.');
	if (startLine !== endLine) { // Determines if change of line is required
		directionOfUS(start,startLine); // finds how many stops must occur and in which direction
		firstLineTrip(start,startLine); // plots the trip along the starting train line
		console.log('Hop off at Union Square, change to Line ' + endLine + ' and continue your journey.');
		destinationDirection(end,endLine); // finds how many stops must occur and in which direction
		secondLineTrip(end,endLine); // plots the trip along the final train line 
 } else {
 		sameLineTrip(start,startLine,end);
 }
 // console.log total stops!
 var total = totalStops(directionOfUS(start,startLine),destinationDirection(end,endLine));
 if (startLine === endLine && start === end) {
 		console.log('You do not have a journey to complete.')
 } else {
 console.log('Your journey is ' + total + ' stops long.')
	}
};

planTrip('N', 'Times Square', '6', '33rd');
planTrip('L','8th', 'L', '1st');
planTrip('6','Astor Place','6','Astor Place');





