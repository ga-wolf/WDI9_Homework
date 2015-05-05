/****************************************************************
	
	WEEK 1 - MTA 
	
	- Working for single line trips
	- Working for trips that require 1 change of trains via Union Square
	- Requests the origin and destination line/station via prompt()
	- Dry code with commenting
	- Removed need to specify the subway line when planning a trip :: ASSUMES UNIQUE STATION NAMES
	
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






// For a given subway line name, find the index of that line in mta[]
var findLineIndex = function(lineName) {
	for(var i = 0; i < mta.length; i++) {
		if(mta[i].name === lineName) { return i;};
	}
};

// For a given subway line name and station name, find the line and station indexes
var findStation = function(lineName, stationName) {
	var lineIndex = findLineIndex(lineName);
	var stationIndex = mta[lineIndex].stations.indexOf(stationName);
	return {lineIndex: lineIndex, stationIndex: stationIndex};
};

// Given the starting and stopping index on a given line, return an array of stop names between them (inclusive)
var createStopList = function(line, origin, destination) {
	var stopList = [];
	for(var i = Math.min(origin, destination); i <= Math.max(origin, destination); i++){
		stopList.push([mta[line].name, mta[line].stations[i]])
	}
	stopList = (origin < destination) ? stopList : stopList.reverse();
	return stopList;
};

// Given the array of stops on route [[line name, station name],...], display the route to user and return the number of stations passed through
var displayRoute = function (tripRoute) {
	stationCount = 0;
	console.log("You must travel through the following stops on the " + tripRoute[1][0] + " line");
	for(var i = 1; i < tripRoute.length; i++) {
		// Line changes are indicated by a change in line name but repetition of station name
		if(tripRoute[i-1][0] !== tripRoute[i][0]) {
			console.log("Change to the " + tripRoute[i][0] + " line at " + tripRoute[i][1]);
		} else {
			console.log("Station: " + tripRoute[i][1]);
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
		
		// Create lists to hold all the subway lines the start and end stations are on
		var startStationLines = [];
		var endStationLines = [];
		
		// Find what lines the origin and destination stations are on and add to the lists
		for(var i = 0; i < mta.length; i++) {
			if(mta[i].stations.indexOf(startStation) !== -1) {
				startStationLines.push(i);
			}
			if(mta[i].stations.indexOf(endStation) !== -1) {
				endStationLines.push(i);
			}
		}
		
		// Set the subway lines to the same value if they both appear on the same line
		var startLineName = null;
		var endLineName = null;
		for(var i = 0; i < startStationLines.length && startLineName === null; i++ ) {
			index = endStationLines.indexOf(startStationLines[i]);
			if(index !== -1) {
				startLineName = mta[startStationLines[i]].name;
				endLineName = mta[endStationLines[index]].name;
			}
		}		
		
		// Set default values if no match is found
		if(startLineName === null && endLineName === null) {
			startLineName = mta[startStationLines[0]].name;
			endLineName = mta[endStationLines[0]].name;
		}
		
		// Find the indexes for the origin and destination stations  (object = [lineIndex: , stationIndex: ])
		var origin = findStation(startLineName, startStation);
		var destination = findStation(endLineName, endStation);

		// Initialise a list of stations that are passed through on the trip
		var tripStations = [];
		var tripParts = [];
		
		// Check if the user needs to change trains
		if(origin['lineIndex'] === destination['lineIndex']){
			
			// Create the list of stations between the origin and destination
			tripParts.push(createStopList(origin['lineIndex'], origin['stationIndex'], destination['stationIndex']));
		}
		else {
			
			// Find the index of the intersecting station
			var intersectIndex_In = findStation(startLineName, "Union Square");
			var intersectIndex_Out = findStation(endLineName, "Union Square");
			
			// Create the list of stations between the origin and intersect station, then append stations to reach the destination
			tripParts.push(createStopList(origin['lineIndex'], origin['stationIndex'], intersectIndex_In["stationIndex"]));
			tripParts.push(createStopList(destination['lineIndex'], intersectIndex_Out["stationIndex"], destination['stationIndex']));
		}
		
		// String the entire trip together
		for(var i = 0; i < tripParts.length; i++) {
			tripStations = tripStations.concat(tripParts[i]);
		}
		
		// Display the route that is travelled along
		var stationCount = displayRoute(tripStations);
		console.log(stationCount + " stops in total.\n\n");
	}
};


var listOfLines = [];
for(var i = 0; i< mta.length; i++) {
	listOfLines.push(mta[i].name);
}

/*
var startStation = prompt("What subway station are you starting at:\n" + mta[findLineIndex(startLineName)].stations.join(", "));
var endStation = prompt("What subway station are you ending at:\n" + mta[findLineIndex(endLineName)].stations.join(", "));
planTrip(startLineName, startStation, endLineName, endStation);
*/

planTrip("34th","23rd");
planTrip("34th","8th");
planTrip("8th","23rd");
planTrip("34th","33rd");
planTrip("33rd","34th");
planTrip("Union Square","1st");

