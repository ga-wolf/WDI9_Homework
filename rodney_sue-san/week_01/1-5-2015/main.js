/*
---------------------------------------------------MTA------------------------------------------------------

MTA Lab
Objectives:

Apply your knowledge of Javascript to solve a real world problem.
Get really good at array manipulation.
Activity

Create a program that models a simple subway system.

The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:

planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.

// console.log() shows output similar to this:
// "Your must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// "Change at Union Square."
// "Your journey continues through the following stops: 23rd, 28th, 33rd."
// "7 stops in total."
There are 3 subway lines:
The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
*/
//-------------------------------------------------MTA------------------------------------------------------




var nLine = "Times Square,34th,28th,23rd,Union Square,Astor Place".split(",");
var lLine = "8th,6th,Union Square,3rd,1st".split(",");
var sixLine = "Grand Central,33rd,28th,23rd,Union Square,Astor Place".split(",");



var planTrip = function(fromLine, fromStation, toLine, toStation){
	
	var onStops = [];
	var offStops = [];

	var onLineName = lineChoice(fromLine);
	var offLineName = lineChoice(toLine);

	var union = "Union Square";

//-------------------------------------------Same Train Line------------------------------------------


	if(fromLine.join() === toLine.join()){	

			var travelInfo = "Take the " + onLineName + "\nGet on at: "+ fromStation; 	
			var yourStop = "\nGet off at your destination: " + toStation;
			var sStops= 0;
																															
			onStops = stationRoute(fromLine, fromStation, toLine, toStation);

			if(fromStation === toStation){		
					sStops = 0;
			}else{
					onStops.pop();											//dont need last stop
					sStops = sStops + onStops.length;
			}

			onStops.shift();												// dont need starting station
			

			if(onStops.length>1){
		
				travelInfo += "\nTravel past the following stops: "+ onStops + yourStop;

			}else{

				travelInfo += yourStop;
			}
			console.log("\n\n------------------------------------------------------------------------------------------");
			console.log("                      " + fromStation+ " to "+ toStation);
			console.log("------------------------------------------------------------------------------------------");
			console.log(travelInfo + "\n"+  (sStops) + " stops to your destination");
			



//---------------------------------------Need to transfer to another Line-------------------------------------
	}else{

			offStops = stationRoute(toLine, union, toLine, toStation);
			onStops = stationRoute(fromLine, fromStation, fromLine, union);			//because you need to transfer union square
			onStops.pop();																											//is at the end onStops and start offStops
			onStops.shift();																										//dont need first or last stops 
															

			var stops = onStops.length + offStops.length;

			offStops.pop();																											//got rid of last stop for message purpose
			var travelInfo = "Take the " + onLineName + "\nGet on at: " + fromStation;
			var travelThrough = "\nTravel past the following stops: ";
			var transfer = "\nGet off and transfer at: " + offStops.shift();
			var lineToTake = "\nTake the " + offLineName;
			var yourStop = "\nGet off at your destination " + toStation;


			if(onStops.length >= 1){
				travelInfo += travelThrough + onStops.toString() + transfer + lineToTake;
			}else{
				travelInfo += transfer+ lineToTake;
			}

			if(offStops.length >= 1){
				travelInfo += travelThrough + offStops.toString() + yourStop;
			}else{
				travelInfo += yourStop;
			}

			console.log("\n\n------------------------------------------------------------------------------------------");
			console.log("                 "+onLineName+ ": " + fromStation+ " to "+ offLineName+ ": "+ toStation);
			console.log("------------------------------------------------------------------------------------------");
			console.log(travelInfo +   "\n" + stops + " stops to your destination.");
			

	}

}

	function lineChoice(line){
			if(line.join() === nLine.join() ){
				return " N Line";
			}else if( line.join() === lLine.join() ){
				return " L Line";
			}else{
				return " 6 Line";
			}
	}


	function stationRoute(fromLine, fromStation, toLine, toStation){	//return an array of stations from point A-B
			var a =  fromLine.indexOf(fromStation);
			var b =  toLine.indexOf(toStation);
			var stations = [];

			if(a > b){
				for(var i = a; i >= b; i--){
					stations.push(fromLine[i]);
				}
			}else{
				for(var i = a; i <= b; i++){
					stations.push(fromLine[i]);
				}
			}

		return stations;	
	}							
	




planTrip(nLine, 'Astor Place', nLine, 'Union Square'  );
console.log("\n nLine = Times Square,34th,28th,23rd,Union Square,Astor Place" );
console.log(" lLine = 8th,6th,Union Square,3rd,1st");
console.log(" 6Line = Grand Central,33rd,28th,23rd,Union Square,Astor Place"); 

planTrip(nLine, '23rd', sixLine, 'Astor Place'  );
console.log("\n nLine = Times Square,34th,28th,23rd,Union Square,Astor Place" );
console.log(" lLine = 8th,6th,Union Square,3rd,1st");
console.log(" 6Line = Grand Central,33rd,28th,23rd,Union Square,Astor Place"); 

planTrip(nLine, '28th', nLine, '28th');
console.log("\n nLine = Times Square,34th,28th,23rd,Union Square,Astor Place" );
console.log(" lLine = 8th,6th,Union Square,3rd,1st");
console.log(" 6Line = Grand Central,33rd,28th,23rd,Union Square,Astor Place"); 

planTrip(nLine, '28th', nLine, 'Astor Place');
console.log("\n nLine = Times Square,34th,28th,23rd,Union Square,Astor Place" );
console.log(" lLine = 8th,6th,Union Square,3rd,1st");
console.log(" 6Line = Grand Central,33rd,28th,23rd,Union Square,Astor Place"); 	

