/****************************************************************
	
	WEEK 1 - MTA 
	
	+ Working for single line trips
	+ Working for trips that require 1 change of trains via Union Square
	+ Requests the origin and destination line/station via prompt()
	+ Dry code with commenting
	+ Removed need to specify the subway line when planning a trip :: ASSUMES UNIQUE STATION NAMES
	+ User input is checked for validity
	+ Can display trips made up of any number of sub-trips
	
	- Can only handle 1 change of train via "Union Square"
	
****************************************************************/

// Define the subway lines that make up the transit system
var mta = [
	line_N = {
		name: "N",
		stations: ["Time Square", "34th", "28th", "23rd", "Union Square", "8th"]
	},
	line_6 = {
		name: "6",
		stations: ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"],
	},
	line_L = {
		name: "L",
		stations: ["8th", "6th", "Union Square", "3rd", "1st"]
	}
];

// Display the lines and stations for error checking
for(var i = 0; i < mta.length; i++){
	console.log(mta[i].stations);
}
console.log("\n\n\n");






// For a given subway line name and station name, find the line and station indexes
var findStationIndex = function(lineIndex, stationName) {
	var stationIndex = mta[lineIndex].stations.indexOf(stationName);
	return stationIndex;
};

// Given the starting and stopping index on a given line
// return an array of stop names between them (inclusive)
var createStationList = function(line, origin, destination) {
	var stationList = [];
	for(var i = Math.min(origin, destination); i <= Math.max(origin, destination); i++){
		stationList.push([mta[line].name, mta[line].stations[i]])
	}
	stationList = (origin < destination) ? stationList : stationList.reverse();
	return stationList;
};

// Given the array of stops on a route [[line name, station name],...]
//display the route to the user and return the number of stations passed through
var displayRoute = function (route) {
	stationCount = 0;
	
	console.log("You must travel on the " + route[0][0] + " Line");
	
	for(var i = 1; i < route.length; i++) {
		// Line changes are indicated by a change in line name
		// Station name is repeated with new line name
		if(route[i-1][0] !== route[i][0]) {
			console.log("Change to the " + route[i][0] + " Line at " + route[i][1]);
		} else {
			console.log("Station: " + route[i][1]);
			stationCount++;
		}	
	}
	return stationCount;
};

// Plan a trip for the user given the starting point and destination
var planTrip = function(startStation, endStation) {

	// Check if the user is already at the destination
	if(startStation === endStation) {
		alert("You are already at your destination");
	} else {
		
		// Confirm to the user what the trip being processed is
		console.log("Travelling from " + startStation + " to " + endStation + ":\n");
		
		// List to hold all subway lines the start and end stations are on
		var stationLines = [[],[]];
		
		// Find lines that the starting and ending stations are on
		for(var i = 0; i < mta.length; i++) {
			if(mta[i].stations.indexOf(startStation) !== -1) {
				stationLines[0].push(i);
			}
			if(mta[i].stations.indexOf(endStation) !== -1) {
				stationLines[1].push(i);
			}
		}
		
		
		// Set the subway lines to the same value if they both appear on the same line
		var startLine = null;
		var endLine = null;
		for(var i = 0; i < stationLines[0].length && startLine === null; i++ ) {
			var index = stationLines[1].indexOf(stationLines[0][i]);
			if(index !== -1) {
				startLine =  i;
				endLine = startLine;
			}
		}
		
		// Set default values if no match is found
		if(startLine === null || endLine === null) {
			startLine = stationLines[0][0];
			endLine = stationLines[1][0];
		}
		
		// Find the indexes for the origin and destination stations
		var startStationIndex = findStationIndex(startLine, startStation);
		var endStationIndex = findStationIndex(endLine, endStation);
		
		// Initialise a list of stations that are passed through 
		var journeyLegs = [];
		var stationsOnRoute = [];
		
		
		/***************************************************
			The following code creates an array of journey legs
			When more changes are needed simply add on a journey leg
			
			Task: Find an intelligent way of adding multiple journey legs as needed
		***************************************************/
		// Create a list of sub-trips that make up the total trip, separated by a change of train
		if(startLine === endLine){
			journeyLegs.push([startLine, startStationIndex, endStationIndex]);
		} else {
			journeyLegs.push([startLine, startStationIndex, findStationIndex(startLine, "Union Square")]);
			journeyLegs.push([endLine, findStationIndex(endLine, "Union Square"), endStationIndex]);
		}
		
		// For each leg of the trip, attach the list of stations travelled through
		for(var i = 0; i < journeyLegs.length; i++) {
			stationsOnRoute = stationsOnRoute.concat(createStationList(journeyLegs[i][0], journeyLegs[i][1], journeyLegs[i][2]));
		}
			
		// Display the route that is travelled along
		var stationCount = displayRoute(stationsOnRoute);
		console.log(stationCount + " stops in total.\n\n");			
	}
}

var checkInput = function(startStation, endStation) {
	
	var check1 = false;
	var check2 = false;
	
	for(var i = 0; i < mta.length; i++) {
		if(mta[i].stations.indexOf(startStation) !== -1) {
			check1 = true;
		}
		if(mta[i].stations.indexOf(endStation) !== -1) {
			check2 = true;
		}
	}	
	
	if(check1 && check2) {
		planTrip(startStation, endStation)
	} else {
		alert("Sorry, the station you entered can't be found\nPlease try again");
	}
	
}


// List of subway lines to show when prompting user
var listOfLines = [];
for(var i = 0; i< mta.length; i++) {
	listOfLines.push(mta[i].name);
}

/*
var startStation = prompt("What subway station are you starting at:\n" + mta[findLineIndex(startLineName)].stations.join(", "));
var endStation = prompt("What subway station are you ending at:\n" + mta[findLineIndex(endLineName)].stations.join(", "));
checkInput(startLineName, startStation, endLineName, endStation);
*/

checkInput("34th","23rd");
checkInput("34th","8th");
checkInput("8th","23rd");
checkInput("34th","33rd");
checkInput("33rd","34th");
checkInput("Union Square","1st");
checkInput("Union Circle","1st");
