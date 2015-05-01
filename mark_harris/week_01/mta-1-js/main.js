


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
var createStopList = function(line, start, end) {
	stopList = [];
	while(start <= end) {
		stopList.push(mta[line].stations[start])
		start++;
	}
	return stopList;
};




var planTrip = function(startLineName, startStation, endLineName, endStation) {

	// Find the stations on the starting line
	for(var i = 0; i < mta.length; i++) {
		if(mta[i].name === startLineName) {
			startLineIndex = i;
		}
	}
	var allLineStops =  mta[startLineIndex].stations;
	console.log(allLineStops);

	// Find the stations on the ending line
	for(var i = 0; i < mta.length; i++) {
		if(mta[i].name === endLineName) {
			endLineIndex = i;
		}
	}
	var allLineStops =  mta[endLineIndex].stations;
	console.log(allLineStops);


	// Check if the user is already at the destination
	if(startLineName === endLineName && startStation === endStation) {
		alert("You are already at your destination");
	} else {


		// Check if the stops are on the same line
		if(startLineName === endLineName) {

			// Find the index of the starting station
			startStationIndex = mta[startLineIndex].stations.indexOf(startStation);
			console.log(startStationIndex);

			// Find the index of the end station
			endStationIndex = mta[startLineIndex].stations.indexOf(endStation);
			console.log(endStationIndex);

			// Create a list of stations that are passed through
			var lineStations = [];
			if(startStationIndex <= endStationIndex) {
				lineStations = createStopList(startLineIndex, startStationIndex, endStationIndex).slice(1);
			} else {
				lineStations = createStopList(startLineIndex, endStationIndex, startStationIndex).reverse().slice(1);
			}
			
			console.log("You must travel through the following stops on the " + startLineName + " Line: " 
				+ lineStations.join(", "));
			console.log(lineStations.length + " stops in total.");
		}
		else {
			// Find the index of the starting station
			startStationIndex = mta[startLineIndex].stations.indexOf(startStation);
			console.log(startStationIndex);

			// Find the index of the end station
			endStationIndex = mta[endLineIndex].stations.indexOf(endStation);
			console.log(endStationIndex);

			var toUS = mta[startLineIndex].stations.indexOf("Union Square");
			var fromUS = mta[endLineIndex].stations.indexOf("Union Square");
			console.log(toUS);
			console.log(fromUS);

			numTripStops = 0;

			// Create a list of stations that are passed through going to Union Square
			var lineStations = [];
			if(startStationIndex <= toUS) {
				lineStations = createStopList(startLineIndex, startStationIndex, toUS).slice(1);
			} else {
				lineStations = createStopList(startLineIndex, toUS, startStationIndex).reverse().slice(1);
			}



			console.log("You must travel through the following stops on the " + startLineName + " Line: " 
				+ lineStations.join(", "));
			console.log("Change at Union Square.");
			numTripStops += lineStations.length;


			// Create a list of stations that are passed through going from Union Square
			var lineStations = [];
			if(endStationIndex <= fromUS) {
				lineStations = createStopList(endLineIndex, endStationIndex, fromUS).reverse().slice(1);
			} else {
				lineStations = createStopList(endLineIndex, fromUS, endStationIndex).slice(1);
			}
			console.log(lineStations);
			numTripStops += lineStations.length;


			console.log("Your journey continues through the following stops: " + lineStations.join(", "));
			console.log(numTripStops + " stops in total.");
		}
	}

};








