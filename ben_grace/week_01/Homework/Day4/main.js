/////
//The only time a user will change is at union square...
/////


/////
// These are 3 main variables I'm going to need. A function needs to be written which iterates through each station and check the inputted end point and then print out the stops required to reach there.
/////
var lineN = { 
	title : 'lineN',
	stops : 'Times_Square_N, 34th_N, 28th_N, 23rd_N, Union_Square_N, 8th_N'.split(', ')
};
var lineL = { 
	title : 'lineL',
	stops : "8th_L, 6th_L, Union_Square_L, 3rd_L, 1st_L".split(', ') 
};
var line6 = { 
	title : 'line6',
	stops : "Times_Square_6, 34th_6, 28th_6, 23rd_6, Union_Square_6, 8th_6".split(', ')
};

var union6 = line6.stops.indexOf('Union_Square_6');
var unionL = lineL.stops.indexOf('Union_Square_L');
var unionN = lineN.stops.indexOf('Union_Square_N');

/////
//
/////


var changeAtUnion = function(stationOne, lineOne){
	//debugger
	if (lineOne === lineN.title){
		lineNMove(stationOne, 'Union_Square_N')
	}
	else if(lineOne === LineL.title){
		lineLMove(stationOne, unionL)
	}
	else if(lineOne === Line6.title){
		line6Move(stationOne, union6)
	}
}



var destination = lineN.stops.indexOf('28th_N')
console.log(destination)

lineNMove = function (stationOne, stationTwo){
	var travelLog = []; //Empty array which will return at the end based on what i returns in the for loop.
	if(stationOne === stationTwo){
		return "You are already at your destination"; // if statement to check if they're already at their station
	}
	//debugger
	var currentLocation = lineN.stops.indexOf(stationOne); //Saves the index number of the inputted startStation
	var destination = lineN.stops.indexOf(stationTwo); // Saves the index number of the inputted stationTwo

	if(currentLocation > destination){ //This checks to see if the currentLocation is further down the array then the destination. If so it flips the array and counts backwards.
		lineN.stops.reverse();
		for (i = destination; i < currentLocation; i++){ //loop that runs through the stops before the stationTwo index is reached.
			travelLog += " " + lineN.stops[i];
		}
	}
	else{
			for (i = currentLocation; i < destination; i++){ //loop that runs through the stops before the stationTwo index is reached.
			travelLog += " " + lineN.stops[i];
			}
		}
	return 'you will board at ' + stationOne + ' travel through stations' + travelLog + ' before reaching your destination at ' + stationTwo;
}


line6Move = function (stationOne, stationTwo){
	debugger;
	var travelLog = []; //Empty array which will return at the end based on what i returns in the for loop.
	if(stationOne === stationTwo){
		return "You are already at your destination"; // if statement to check if they're already at their station
	}
	//debugger
	var currentLocation = line6.stops.indexOf(stationOne); //Saves the index number of the inputted startStation
	var destination = line6.stops.indexOf(stationTwo); // Saves the index number of the inputted stationTwo

	if(currentLocation > destination){ //This checks to see if the currentLocation is further down the array then the destination. If so it flips the array and counts backwards.
		line6.stops.reverse();
		for (i = destination; i < currentLocation; i++){ //loop that runs through the stops before the stationTwo index is reached.
			travelLog += " " + line6.stops[i];
		}
	}
	else{
			for (i = currentLocation; i < destination; i++){ //loop that runs through the stops before the stationTwo index is reached.
			travelLog += " " + line6.stops[i];
			}
		}
	return 'you will board at ' + stationOne + ' travel through stations' + travelLog + ' before reaching your destination at ' + stationTwo;
}


lineLMove = function (stationOne, stationTwo){
	var travelLog = []; //Empty array which will return at the end based on what i returns in the for loop.
	if(stationOne === stationTwo){
		return "You are already at your destination"; // if statement to check if they're already at their station
	}
	debugger
	var currentLocation = lineL.stops.indexOf(stationOne); //Saves the index number of the inputted startStation
	var destination = lineL.stops.indexOf(stationTwo); // Saves the index number of the inputted stationTwo

	if(currentLocation > destination){ //This checks to see if the currentLocation is further down the array then the destination. If so it flips the array and counts backwards.
		lineL.stops.reverse();
		for (i = destination; i < currentLocation; i++){ //loop that runs through the stops before the stationTwo index is reached.
			travelLog += " " + lineL.stops[i];
		}
	}
	else{
			for (i = currentLocation; i < destination; i++){ //loop that runs through the stops before the stationTwo index is reached.
			travelLog += " " + lineL.stops[i];
			}
		}
	return 'you will board at ' + stationOne + ' travel through stations' + travelLog + ' before reaching your destination at ' + stationTwo;
}

var planTrip = function(lineOne, stationOne, lineTwo, stationTwo){
	//debugger;
	if(lineOne !== lineTwo){
		changeAtUnion(stationOne, lineOne)
	}
	console.log(lineTwo);
	console.log(line6.title);
	if(lineTwo === line6.title){
		return line6Move(stationOne, stationTwo)
	}
	
}







