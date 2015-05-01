var nLine;
var lLine;
var sixLine;

nLine = {
	name: "nLine",	
	stations: ["Time Square", "34thN","28thN","23rdN","Union Square","8thN"]
};
lLine = {
	name: "lLine",
	stations:['8thL','6thL','Union Square','3rdL','1stL']
};
sixLine ={ 
	name: "sixLine",
	stations:['Grand Central','33rd6','28th6','23rd6','Union Square','Astor Place']
};

function planTrip(startLine, startStat, endLine, endStat){
	var startPos = startLine.stations.indexOf(startStat); // start position
	var endPos = endLine.stations.indexOf(endStat); // end position

	var sCounter = 0; 
	var stationsPassed = "";

	var sUsq = startLine.stations.indexOf("Union Square");
	var eUsq = endLine.stations.indexOf("Union Square");

	//If the start line is equal to the end line run this.
	if(startLine == endLine){
		if((startPos - endPos) < 0){
			for (i=startPos; i<endPos+1; i++){
				sCounter++;
				stationsPassed += startLine.stations[i] + ", ";
			}
		} else if((startPos - endPos) >= 0){
			for(i=startPos; i>(endPos-1);i--){
				sCounter++;
				stationsPassed += startLine.stations[i] + ", ";
			}
		}

		console.log("You must travel through the following stops on the " 
		+ startLine.name +": " + stationsPassed);
		console.log("Total stations passed is " + sCounter);
	
	} else if(startStat === "Union Square"){
		if(eUsq - endPos < 0){
			for(i=eUsq; i < endPos+1; i++){
				sCounter++;
				stationsPassed += endLine.stations[i] +", ";
			}
			console.log(sCounter++);
			console.log(stationsPassed);
		} else if(eUsq - endPos >= 0){
			for(i=eUsq; i >= endPos; i--){
				sCounter ++;
				stationsPassed += endLine.stations[i] + ", ";
			}
			console.log(sCounter++);
			console.log(stationsPassed);
		}
		console.log("true");
	} else {

		//if Start pos and End pos are on different lines
		// First check if startPos is ahead of or behind union square

		if(startPos - sUsq < 0){
			for(i=startPos; i<sUsq; i++){
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
				for(i=eUsq; i >= endPos; i--){
					sCounter ++;
					stationsPassed += endLine.stations[i] + ", ";
				}
				console.log(sCounter++);
				console.log(stationsPassed);
			}
			else{

			}
		}
		else if (startPos - sUsq > 0){
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
				for(i=eUsq; i >= endPos; i--){
					sCounter ++;
					stationsPassed += endLine.stations[i] + ", ";
				}
				console.log(sCounter++);
				console.log(stationsPassed);
			}
		}

	}
	// number of stations  
	// for(i = 0; i < startLine.length; i++){
	// }

}

planTrip(nLine,"Time Square",lLine,"6thL");
planTrip(nLine,"Union Square", lLine, "Union Square");
