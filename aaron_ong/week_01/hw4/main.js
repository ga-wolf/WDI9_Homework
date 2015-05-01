







var travel = function(start, end) {
	startstation = lineID(start).stationIndex;
	endstation = lineID(end).stationIndex;
	linestart = lineID(start).lineIndex;
	lineend = lineID(end).lineIndex;
	interchange = commonStation(start, end)
	interchangestart = commonID(start, interchange);
	interchangeend = commonID(end, interchange);
	var stationsToPass = "";
	var stationsToPass2 = "";
	var count = 0;
		if (sameLine(start, end)) {
			if (startstation > endstation) {
				for (var x = startstation ; endstation <= x ; x--) {
					stationsToPass += ", " + lineArray[linestart][x]
					count += 1 
				}
			console.log("First travel through \n " + stationsToPass)	
			}
			else {
				for (var y = startstation ; endstation >= y ; y++) {
					stationsToPass += ", " + lineArray[linestart][y] 
					count += 1 
				}
			console.log("First travel through \n " + stationsToPass)	
			}		
		}
		else {
			if (startstation > interchangestart) {
				for (var x = startstation ; interchangestart <= x ; x--) {
					stationsToPass += ", " + lineArray[linestart][x] 
					count += 1 
				}
			console.log("First travel through \n " + stationsToPass)
			console.log("\nChange at " + interchange)	
			}
			if (startstation < interchangestart)
				for (var y = startstation ; interchangestart >= y ; y++) {
					stationsToPass += ", " + lineArray[linestart][y] 
					count += 1 
				}
			console.log("First travel through \n " + stationsToPass)
			console.log("\nChange at " + interchange)		
			if (interchangeend > endstation) {
				for (var x = interchangeend ; endstation <= x ; x--) {
					stationsToPass2 += ", " + lineArray[lineend][x] 
					count += 1 
				}
			console.log("then travel through \n " + stationsToPass2)	
			}
			if (interchangeend < endstation) {
				for (var y = interchangeend ; endstation >= y ; y++) {
					stationsToPass2 += ", " + lineArray[lineend][y] 
					count += 1 
				}
			console.log("then travel through \n " + stationsToPass2)		;
			}
			}	
	console.log("\n Total stations traveled: " + count)	;
	}




var lineID = function(station) {
	for (var i = 0 ; i < lineArray.length ; i++) {
		for (var x= 0 ; x < lineArray[i].length ; x++) {
			if (lineArray[i][x] === station) {
			return {stationIndex: x, lineIndex: i}
		}
		}	
	}
}

var commonStation = function(sta1, sta2) {
	for (var i = 0 ; i < lineArray[lineID(sta1).lineIndex].length ; i++) {
		for (var x= 0 ; x < lineArray[lineID(sta2).lineIndex].length ; x++) {
			if (lineArray[lineID(sta1).lineIndex][i] === lineArray[lineID(sta2).lineIndex][x]) {
				return lineArray[lineID(sta1).lineIndex][i];
			}
		}
	}
}

var commonID = function(station, common) {
	for (var i = 0 ; i < lineArray[lineID(station).lineIndex].length ; i++) {
		if (lineArray[lineID(station).lineIndex][i] === common) {
			return i
		}
	}
}


var sameLine = function(sta1, sta2) {
	for (var i = 0 ; i < lineArray[lineID(sta1).lineIndex].length ; i++) 
		return lineArray[lineID(sta1).lineIndex][i] === sta2
}
// Work out how you would do it on paper first! Then start to explain that process in Javascript.
// Get the program to work for a single line before trying to tackle multiple lines.
// Don't worry about prompting the user for input. Hard code some values to get it working. You can use prompt() later to make it more interactive.
// Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// The key to the lab is finding the index positions of each stop. (hint: indexOf())
// Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)



// MTA Lab
// Objectives:

// Apply your knowledge of Javascript to solve a real world problem.
// Get really good at array manipulation.
// Activity

// Create a program that models a simple subway system.

// The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:

// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.

// // console.log() shows output similar to this:
// // "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."
// There are 3 subway lines:
// The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
// The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
// All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
// Tell the user the number of stops AND the stops IN ORDER that they will pass throughor change at.
// Hints:







t1NorthShoreLine = ["Berowra", "Mount Kuring-gai", "Mount Colah", "Asquith", "Hornsby", "Waltara", "Wahroonga", "Warrawee", "Turramurra", "Pymble", "Gordon", "Killara", "Lindfield", "Rosefield", "Normanhurst", "Thornleigh", "Pennant Hills", "Beecroft", "Cheltenham", "Epping", "Macquiarie University", "Macquarie Park", "North Ryde", "Chatswood", "Artarmon", "St Leonards", "Wollstonecraft", "Waverton", "North Sydney", "Milsons Point", "Wynyard", "Town Hall", "Central", "Redfern", "Burwood", "Strathfield", "Lidcombe", "Auburn", "Clyde", "Granville", "Harris Park", "Parramatta"];
t1NorthernLine = [ "Hornsby", "Normanhurst", "Thornleigh", "Pennant Hills", "Beecroft", "Cheltenham", "Epping", "Macquiarie University", "Macquarie Park", "North Ryde", "Chatswood", "Eastwood", "Denistone", "Westryde", "Meadowbank", "Rhodes", "Concord West", "North Strathfield", "Strathfield", "Burwood", "Redfern", "Central" ,"Town Hall", "Wynyard", "Milsons Point", "North Sydney", "Waverton", "Wollstonecraft", "St Leonards", "Artarmon", "Chatswood"] ;
t1WesternLine = ["Emu Plains", "Penrith", "Kingswood", "Werrington", "St Marys", "Mount Druitt", "Rooty Hill", "Doonside", "Richmond", "Easy Richmond", "Clarendon", "Windsor", "Mulgrave", "Vineyard", "Riverstone", "Schofields", "Quakers Hill", "Marayonh", "Blacktown", "Seven Hills", "Toongabbie", "Pendle Hill", "Wentworthville", "Westmead", "Parramatta", "Harris Park", "Granville", "Clyde", "Auburn", "Lidcombe", "Strathfield", "Burwood", "Redfern", "Central", "Town Hall", "Wynyard", "Milsons Point", "North Sydney", "Waverton", "Wollstonecraft", "St Leonards", "Artarmon", "Chatswood"];
t2AirportLine = ["Macarthur", "Campbelltown", "Leumeah", "Minto", "Ingleburn", "Macquarie Fields", "Glenfield", "Holsworthy", "East Hills", "Panania", "Reversby", "Padstow", "Riverwood", "Narwee", "Beverly Hills", "Kingsgrove", "Bexley North", "Bardwell Park", "Turrella", "Wolli Creek", "International Airport", "Domestic Airport", "Mascot", "Green Square", "Sydenham", "Redfern", "Central", "Museum", "St James", "Circular Quay", "Wynyard", "Town Hall"];
t2InnerWestAndSouthLine = ["Macarthur", "Campbelltown", "Leumeah", "Minto", "Ingleburn", "Macquarie Fields", "Glenfield", "Casula", "Liverpool", "Warwick Farm", "Cabramatta", "Canley Vale", "Fairfield", "Yennora", "Guildford", "Merrylands", "Granville", "Clyde", "Auburn", "Lidcombe", "Flemington", "Homebush", "Strathfield", "Burwood", "Croydon", "Ashfield", "Summer Hill", "Lewisham", "Petersham", "Stanmore", "Newtown", "Macdonaldtown", "Redfern", "Central", "Town Hall", "Wynyard", "Circular Quay", "St James", "Museum"];
t3BankstownLine = ["Liverpool", "Warwick Farm", "Cabramatta", "Carramar", "Villawood", "Leightonfield", "Chester Hill", "Sefton", "Lidcombe", "Berala", "Regents Park", "Birrong", "Yagoona", "Bankstown", "Punchbowl", "Wiley Park", "Lakemba", "Belmore", "Campsie", "Canterbury", "Hurlstone Park", "Dulwich Hill", "Marrickville", "Sydenham", "St Peters", "Erskineville", "Redfern", "Central", "Town Hall", "Wynyard", "Circular Quay", "St James", "Museum"];
t4EasternSuburbsAndIllawarraLine = ["Waterfall", "Heathcode", "Engadine", "Loftus", "Cronulla", "Woolooware", "Caringbah", "Miranda", "Gymea", "Kirrawee", "Sutherland", "Jannali", "Como", "Oatley", "Mortdale", "Penshurst", "Hurstville", "Allawah", "Carlton", "Kogarah", "Rockdale", "Banksia", "Arncliffe", "Wolli Creek", "Tempe", "Sydenham", "Redfern", "Central", "Town Hall", "Martin Place", "Kings Cross", "Edge Cliff", "Bondi Junction"];
t5CumberlandLine = ["Campbelltown", "Leumeah", "Minto", "Ingleburn", "Macquarie Fields", "Glenfield", "Casula", "Liverpool", "Warwick Farm", "Cabramatta", "Canley Vale", "Fairfield", "Yennora", "Guildford", "Merrylands", "Harris Park", "Parramatta", "Westmead", "Wentworthville", "Pendle Hill", "Toongabbie", "Seven Hills", "Blacktown", "Marayong", "Quakers Hill", "Schofields"]
t6CarlingfordLine = ["Carlingford", "Telopea", "Dundas", "Rydalmere", "Rosehill", "Clyde", "Auburn", "Lidcombe", "Strathfield", "Burwood", "Redfern", "Central", "Townhall", "Wynyard", "Milsons Point", "North Sydney"];
t7OlympicParkLine = ["Lidcombe", "Olympic Park"];

lineArray = [t1NorthShoreLine, t1NorthernLine, t1WesternLine, t2AirportLine, t2InnerWestAndSouthLine, t3BankstownLine, t4EasternSuburbsAndIllawarraLine, t5CumberlandLine, t6CarlingfordLine, t7OlympicParkLine]


console.log("T1 North Shore Line");
console.log(t1NorthShoreLine);
console.log("T1 Northern Line");
console.log(t1NorthernLine);
console.log("T1 Western Line");
console.log(t1WesternLine);
console.log("T2 Airport Line");
console.log(t2AirportLine);
console.log("T2 Inner West & South Line");
console.log(t2InnerWestAndSouthLine);
console.log("T3 Bankstown Line");
console.log(t3BankstownLine);
console.log("T4 Eastern Suburbs & Illawarra Line");
console.log(t4EasternSuburbsAndIllawarraLine);
console.log("T5 Cumberland Line");
console.log(t5CumberlandLine);
console.log("T6 Carlingford Line");
console.log(t6CarlingfordLine);
console.log("T7 Olympic Park Line");
console.log(t7OlympicParkLine);

var startLoc = prompt("Where are you now?");
var endLoc = prompt("Where would you like to go?");
var capitalize = function(input) {
	return input.slice(0,1).toUpperCase() + input.slice(1).toLowerCase()
}
travel(capitalize(startLoc), capitalize(endLoc));

console.log("To travel, type : travel('start destination', 'end destination) ; example : travel('Mascot','Berowra')");