var nLine = {
	name: "nLine",	
	stations: ["Time Square", "34thN","28thN","23rdN","Union Square","8thN"]
};
var lLine = {
	name: "lLine",
	stations:['8thL','6thL','Union Square','3rdL','1stL']
};
var sixLine ={ 
	name: "sixLine",
	stations:['Grand Central','33rd6','28th6','23rd6','Union Square','Astor Place']
};

var trainStation = {
	calcStat: function calcStations(startPos, endPos){
		var counter = 0;
		var stationsPassed = "";
		if(startPos - endPos < 0){
			for(i=startPos; i < endPos+1; i++){
				counter++;
				stationsPassed += endLine.stations[i] +", ";
			}
			console.log(counter);
			console.log(stationsPassed);
		}
		else if(startPos - endPos >=0){
			for(i=startPos; i > endPos; i--){
				counter ++;
				stationsPassed += endLine.stations[i] + ", ";
			}
			console.log(counter);
			console.log(stationsPassed);
		}
	},
	planTrip: function planTrip(startLine, startStat, endLine, endStat){
		var startPos = startLine.stations.indexOf(startStat); // start position
		var endPos = endLine.stations.indexOf(endStat); // end position

		var sCounter = 0; 
		var stationsPassed = "";

		var sUsq = startLine.stations.indexOf("Union Square");
		var eUsq = endLine.stations.indexOf("Union Square");

		//If the user passes in a station that does not exist, run this
		if(endPos < 0){
			//If the end station doesn't exist, log this
			console.log(endStat + " station does not exist");
			return "";
		} else if (startPos < 0){
			//If the start station doesn't exist, log this
			console.log(endStat + " station does not exist");
			return "";
		}
		//If the start line is equal to the end line run this.
		if(startLine == endLine){
			//Check in which direction the traveller is going. 
			//If they're travelling forwards in the line
			if((startPos - endPos) < 0){
				for (i=startPos; i<endPos; i++){
					sCounter++;
					stationsPassed += startLine.stations[i] + ", ";
				}
			} //Otherwise if they're travelling backwards in the line. 
			else if((startPos - endPos) > 0){
				for(i=startPos; i>(endPos) ;i--){
					sCounter++;
					stationsPassed += startLine.stations[i] + ", ";
			}
		} else {
			// Otherwise if they're travelling to the same station, log this;
			console.log("You are already at " + startStat);
		}
		//Log the final amount of stations they've passed through and their names. 
		console.log("You must travel through the following stops on the " 
		+ startLine.name +": " + stationsPassed);
		console.log("Total stations passed is " + sCounter);
	
		} else if(startStat === "Union Square"){
			//If the start station is Union Square then ignore the startLine. 
			//Find out if the end station is before or after Union Square
			if(eUsq - endPos < 0){
				//If its after, loop through stations going forward. 
				for(i=eUsq; i < endPos; i++){
					sCounter++;
					stationsPassed += endLine.stations[i] +", ";
				}
			
				console.log("You must travel through the following stops on the " 
						+ endLine.name +": " + stationsPassed);
				console.log("Total stations passed is " + sCounter);
			} else if(eUsq - endPos > 0){
				//If before, loop through stations going backwards. 
				for(i=eUsq; i > endPos; i--){
					sCounter ++;
					stationsPassed += endLine.stations[i] + ", ";
				}
				console.log("Total stations passed is " + sCounter);
				console.log("You must travel through the following stops on the " 
						+ endLine.name +": " + stationsPassed);
			} else{
				console.log ("You are already at Union Square");
			}
			console.log("true");
		} else {

		//if Start position and End position are on different lines
		// First check if startPos is ahead of or behind union square

			if(startPos - sUsq < 0){ 
			//If its before Union Square, loop through the stations going forward starting from the start station and ending at Union Square
				for(i=startPos; i < sUsq; i++){
					sCounter++;
					stationsPassed += startLine.stations[i] +", ";
				}
				console.log("You must travel through the following stops on the " 
						+ startLine.name +": " + stationsPassed);
				//Then check if the end position is before or after union square
				if(eUsq - endPos < 0){
					//If its after, loop through the line  going forward from Union Square;
					for(i=eUsq; i < endPos; i++){
						sCounter++;
						stationsPassed += endLine.stations[i] +", ";
					}
					// console.log(sCounter++);
					console.log( "Alight at Union Square, change to the " + endLine.name +". Now travel through the following stops on the " 
						+ endLine.name + ": " + stationsPassed);
					console.log("You have arrived at " + endStat + " after passing through " + sCounter + " stations.");
				} else if(eUsq - endPos >= 0){
					//If its before, loop through the line going backward from Union Square; 
					for(i=eUsq; i > endPos; i--){
						sCounter ++;
						stationsPassed += endLine.stations[i] + ", ";
					}
					console.log(sCounter++);
					console.log(stationsPassed);
				}
				else{

				}
			} else if (startPos - sUsq > 0){
				//If its after Union Square, loop through the stations going backward starting from the start station and ending at Union Square
					for(i=startPos; i>sUsq; i--){
						sCounter++;	
						stationsPassed += startLine.stations[i] +", ";
					}	
					console.log(sCounter);
					console.log(stationsPassed);		
				if(eUsq - endPos < 0){
					for(i=eUsq; i < endPos+1; i++){
						sCounter++;
						stationsPassed += endLine.stations[i] +", ";
					}
					console.log(sCounter++);
					console.log(stationsPassed);
				} else if(eUsq - endPos >= 0){
					for(i=eUsq; i > endPos; i--){
						sCounter ++;
						stationsPassed += endLine.stations[i] + ", ";
					}
					console.log(sCounter++);
					console.log(stationsPassed);
				}
			}

		}
	}

}


trainStation.planTrip(nLine, "Time Square", nLine, "Time Square");

trainStation.planTrip(nLine,"Time Square",lLine,"6thL");

trainStation.planTrip(nLine,"Union Square", lLine, "Union Square");

trainStation.planTrip(nLine, "Time Square", nLine, "Union Square");

trainStation.planTrip(lLine, "Union Square", nLine, "Time Square");

trainStation.planTrip(lLine, "Union Square", nLine,"8thN");