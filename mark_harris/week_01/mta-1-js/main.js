/****************************************************************
	WEEK 1 - MTA
	
	
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



// For a given subway line name, find the index of that line
var findLineIndex = function(lineName) {
	for(var i = 0; i < mta.length; i++) {
		lineIndex = (mta[i].name === lineName) ? i : null;
	}
	return lineIndex;
};

// Given the starting and stopping index on a given line, return an array of stop names between them
var createStopList = function(line, source, destination) {
	var stopList = [];
	for(var i = Math.min(source, destination); i <= Math.max(source, destination); i++){
		stopList.push(mta[line].stations[i])
	}
	stopList = (source < destination) ? stopList : stopList.reverse();
	return stopList;
};

// Plan a trip for the user given the starting point and the destination
var planTrip = function(startLineName, startStation, endLineName, endStation) {

	// Check if the user is already at the destination
	if(startLineName === endLineName && startStation === endStation) {
		alert("You are already at your destination");
	} else {

		// Find the index for the starting and ending lines
		var startLineIndex = findLineIndex(startLineName);
		var endLineIndex = findLineIndex(endLineName);
		
		// Find the index for the starting and ending stations
		startStationIndex = mta[startLineIndex].stations.indexOf(startStation);		// Once tripStations has been functioned below
		endStationIndex = mta[endLineIndex].stations.indexOf(endStation);			// this can all be consolidated into the function call

		// Initialise a list of stations that are passed through on the trip
		var tripStations = [];
		
		// Check if the user needs to change trains
		if(startLineIndex === endLineIndex){
			tripStations = tripStations.concat(createStopList(startLineIndex, startStationIndex, endStationIndex).slice(1));
			console.log("You must travel through the following stops on the " + startLineName + " Line: " + tripStations.join(", "));
		}
		else {
			var startLineUnSqIndex = mta[startLineIndex].stations.indexOf("Union Square");
			var endLineUnSqIndex = mta[endLineIndex].stations.indexOf("Union Square");
		
			tripStations = tripStations.concat(createStopList(startLineIndex, startStationIndex, startLineUnSqIndex).slice(1));
			tripStations = tripStations.concat(createStopList(endLineIndex, endLineUnSqIndex, endStationIndex).slice(1));

			console.log("You must travel through the following stops on the " + startLineName + " Line: " + tripStations.slice(0,startLineUnSqIndex).join(", "));
			console.log("Change at Union Square.");
			console.log("Your journey continues through the following stops on the " + endLineName + " Line: " + tripStations.slice(startLineUnSqIndex).join(", "));
		}
		console.log(tripStations.length + " stops in total.\n\n");
	}

};








