


// Define the lines
var line_N = {
	name: "N",
	stations: ["Time Square", "34th", "28th", "23rd", "Union Square", "8th"]
};
var line_L = {
	name: "L",
	stations: ["8th", "6th", "Union Square", "3rd", "1st"]
}
var line_6 = {
	name: "6",
	stations: ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"],
}

// Define the mta system
var mta = [line_N, line_L, line_6];


// Given as starting and stoping index, return an array of stop names between them
var createStopList = function(start, end) {
	stopList = [];
	while(start <= end) {
		stopList.push(line_N.stations[start])
		start++;
	}
	return stopList;
};




var planTrip = function(startLineName, startStation, endLineName, endStation) {

	// Find the stations on the starting line
	for(var i = 0; i < mta.length; i++) {
		if(mta[i].name === startLineName) {
			startLine = i;
		}
	}
	var allLineStops =  mta[startLine].stations;
	console.log(allLineStops);


	if(startLineName === endLineName && startStation === endStation) {
		alert("You are already at your destination");
	} else {


		// Check if the stops are on the same line
		if(startLineName === endLineName) {
			// Find the index of the starting station
			startStationIndex = mta[startLine].stations.indexOf(startStation);
			console.log(startStationIndex);

			// Find the index of the end station
			endStationIndex = mta[startLine].stations.indexOf(endStation);
			console.log(endStationIndex);

			// Create a list of stations that are passed through
			var lineStations = [];
			if(startStationIndex <= endStationIndex) {
				lineStations = createStopList(startStationIndex, endStationIndex).slice(1);
			} else {
				lineStations = createStopList(endStationIndex, startStationIndex).reverse().slice(1);
			}
			
			console.log("You must travel through the following stops on the " + startLineName + " Line: " 
				+ lineStations.join(", "));
			console.log(lineStations.length + " stops in total.");
		}
		else {

		}
	}

};








