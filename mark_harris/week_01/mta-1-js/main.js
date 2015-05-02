/****************************************************************
	
	WEEK 1 - MTA 
	
	- Working for single line trips
	- Working for trips that require 1 change of trains via Union Square
	- Requests the origin and destination line/station via prompt()
	- Dry code with commenting
	
****************************************************************/

// Define the subway lines that make up the transit system
var mta = [
	line_N = {
		name: "N",
		stations: ["Time Square", "34th", "28th", "23rd", "Union Square", "8th"]
	},
	line_L = {
		name: "L",
		stations: ["8th", "6th", "Union Square", "3rd", "1st"]
	},
	line_6 = {
		name: "6",
		stations: ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"],
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
		stopList.push(mta[line].stations[i])
	}
	stopList = (origin < destination) ? stopList : stopList.reverse();
	return stopList;
};

// Plan a trip for the user given the starting point and destination
var planTrip = function(startLineName, startStation, endLineName, endStation) {

	// Check if the user is already at the destination
	if(startLineName === endLineName && startStation === endStation) {
		alert("You are already at your destination");
	} else {

		// Find the indexes for the origin and destination stations  (object = [lineIndex: , stationIndex: ])
		var origin = findStation(startLineName, startStation);
		var destination = findStation(endLineName, endStation);

		// Initialise a list of stations that are passed through on the trip
		var tripStations = [];
		
		// Check if the user needs to change trains
		if(origin['lineIndex'] === destination['lineIndex']){
			// Create the list of stations between the origin and destination
			tripStations = tripStations.concat(createStopList(origin['lineIndex'], origin['stationIndex'], destination['stationIndex']).slice(1));
			console.log("You must travel through the following stops on the " + startLineName + " Line: " + tripStations.join(", "));
		}
		else {
			// Find the index of the intersecting station
			var intersectIndex_In = findStation(startLineName, "Union Square");
			var intersectIndex_Out = findStation(endLineName, "Union Square");
			
			// Create the list of stations between the origin and intersect station, then append stations to reach the destination
			tripStations = tripStations.concat(createStopList(origin['lineIndex'], origin['stationIndex'], intersectIndex_In["stationIndex"]));
			// the -1 removes the head of the list to prevent duplication. Leave it in when indicating a change of line with multiple intersections
			tripStations = tripStations.concat(createStopList(destination['lineIndex'], intersectIndex_Out["stationIndex"], destination['stationIndex']).slice(1));

			// Display the trip to the user ( the -1 is because the starting station isn't returned by createStopList)  // Change that??
			console.log("You must travel through the following stops on the " + startLineName + " Line: " + tripStations.slice(1,intersectIndex_In["stationIndex"]).join(" --> "));
			console.log("Change at Union Square.");
			console.log("Your journey continues through the following stops on the " + endLineName + " Line: " + tripStations.slice(intersectIndex_In["stationIndex"]).join(" --> "));
		}
		console.log(tripStations);
		console.log(tripStations.length + " stops in total.\n\n");
	}
};


var listOfLines = [];
for(var i = 0; i< mta.length; i++) {
	listOfLines.push(mta[i].name);
}


var startLineName = prompt("What subway line are you starting on:\n" + listOfLines.join(", "));
var startStation = prompt("What subway station are you starting at:\n" + mta[findLineIndex(startLineName)].stations.join(", "));
var endLineName = prompt("What subway line are you ending on:\n" + listOfLines.join(", "));
var endStation = prompt("What subway station are you ending at:\n" + mta[findLineIndex(endLineName)].stations.join(", "));
planTrip(startLineName, startStation, endLineName, endStation);

/*
planTrip("N", "34th", "N", "23rd");
planTrip("N", "34th", "N", "8th");
planTrip("N", "34th", "6", "33rd");
planTrip("N", "8th", "N", "23rd");
planTrip("6", "33rd", "N", "34th");
*/
