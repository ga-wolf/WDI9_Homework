// MTA Lab
// Objectives:
// Apply your knowledge of Javascript to solve a real world problem.
// Get really good at array manipulation.

// Activity
// Create a program that models a simple subway system.
// The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:


//constructor function to return an object with train name, stops array, color of the line, and whether or not the line is a sub-line of another line or not.
var trainFactory = function (title, stops, color, sub) {
  var train = {};
  train.title = title;
  train.stops = stops;
  train.color = color;
  train.sub = sub;
  //returns an array of the stops between your start and stop point on this line
  train.start = function () {
  	return this.stops[0];
  }
  train.end = function () {
  	return this.stops[this.stops.length - 1];
  }
  train.motion = function (start, stop) {
		arra = [];
		startNum = this.stops.indexOf(start);
		stopNum = this.stops.indexOf(stop);
		if (startNum < stopNum) {
			for ( var i = startNum ; i <= stopNum ; i++ ) {
				arra.push(this.stops[i]);
			}
		} else {
			for ( var i = startNum ; i >= stopNum ; i-- ) {
				arra.push(this.stops[i]);
			}
		}
		return arra;
	}
	//returns two arrays of the stops between the stop listed and the end of the line BOTH DIRECTIONS
	return train;
}

//a massive fucking array of all the train lines, expressed as objects, within suburban Sydney
var trainLines = [
trainFactory("Northshore Line",(("Berowra,Mount Kuring-gai,Mount Colah,Asquith,Hornsby,Waltara,Wahroonga,Warrawee,Turramurra,Pymble,Gordon,Killara,Lindfield,Roseville,Chatswood,Artarmon,St Leonards,Wollstonecraft,Waverton,North Sydney,Milsons Point,Wynyard,Town Hall,Central,Redfern,Burwood,Strathfield,Lidcombe,Auburn,Clyde,Granville,Harris Park,Parramatta").split(',')),"yellow",true),
trainFactory("Northshore Line",(("Normanhurst,Thornleigh,Pennant Hills,Beecroft,Cheltenham,Epping,Macquiarie University,Macquarie Park,North Ryde,Chatswood").split(',')),"yellow",false),
trainFactory("North Line",(("Hornsby,Normanhurst,Thornleigh,Pennant Hills,Beecroft,Cheltenham,Epping,Macquiarie University,Macquarie Park,North Ryde,Chatswood,Eastwood,Denistone,Westryde,Meadowbank,Rhodes,Concord West,North Strathfield,Strathfield").split(',')),"yellow",false),
trainFactory("Western Line",(("Emu Plains,Penrith,Kingswood,Werrington,St Marys,Mount Druitt,Rooty Hill,Doonside,Blacktown,Seven Hills,Toongabbie,Pendle Hill,Wentworthville,Westmead,Parramatta").split(',')),"yellow",true),
trainFactory("Western Line",(("Richmond,Easy Richmond,Clarendon,Windsor,Mulgrave,Vineyard,Riverstone,Schofields,Quakers Hill,Marayonh,Blacktown").split(',')),"yellow",false),
trainFactory("Airport Line",(("Glenfield,Holsworthy,East Hills,Panania,Reversby,Padstow,Riverwood,Narwee,Beverly Hills,Kingsgrove,Bexley North,Bardwell Park,Turrella,Wolli Creek,International Airport,Domestic Airport,Mascot,Green Square,Central,Museum,St James,Circular Quay,Wynyard,Town Hall").split(',')),"green",true),
trainFactory("Airport Line",(("Turrella,Sydenham,Redfern,Central").split(',')),"green",false),
trainFactory("Inner West & South Line",(("Macarthur,Campbelltown,Leumeah,Minto,Ingleburn,Macquarie Fields,Glenfield,Casula,Liverpool,Warwick Farm,Cabramatta,Canley Vale,Fairfield,Yennora,Guildford,Merrylands,Granville,Clyde,Auburn,Lidcombe,Flemington,Homebush,Strathfield,Burwood,Croydon,Ashfield,Summer Hill,Lewisham,Petersham,Stanmore,Newtown,Macdonaldtown,Redfern,Central,Town Hall,Wynyard,Circular Quay,St James,Museum").split(',')),"green",false),
trainFactory("Bankstown Line",(("Liverpool,Warwick Farm,Cabramatta,Carramar,Villawood,Leightonfield,Chester Hill,Sefton,Birrong,Yagoona,Bankstown,Punchbowl,Wiley Park,Lakemba,Belmore,Campsie,Canterbury,Hurlstone Park,Dulwich Hill,Marrickville,Sydenham,St Peters,Erskineville,Redfern,Central,Town Hall,Wynyard,Circular Quay,St James,Museum").split(',')),"orange",true),
trainFactory("Bankstown Line",(("Lidcombe,Berala,Regents Park,Birrong").split(',')),"orange",false),
trainFactory("Illawarra Line",(("Waterfall,Heathcode,Engadine,Loftus,Sutherland,Jannali,Como,Oatley,Mortdale,Penshurst,Hurstville,Allawah,Carlton,Kogarah,Rockdale,Banksia,Arncliffe,Wolli Creek,Tempe,Sydenham,Redfern,Central,Town Hall,Martin Place,Kings Cross,Edge Cliff,Bondi Junction").split(',')),"blue",false),
trainFactory("Cumberland Line",(("Campbelltown,Leumeah,Minto,Ingleburn,Macquarie Fields,Glenfield,Casula,Liverpool,Warwick Farm,Cabramatta,Canley Vale,Fairfield,Yennora,Guildford,Merrylands,Harris Park,Parramatta,Westmead,Wentworthville,Pendle Hill,Toongabbie,Seven Hills,Blacktown,Marayong,Quakers Hill,Schofields").split(',')),"purple",true),
trainFactory("Eastern Suburbs",(("Cronulla,Woolooware,Caringbah,Miranda,Gymea,Kirrawee,Sutherland").split(',')),"blue",false),
trainFactory("Carlinford Line",(("Carlingford,Telopea,Dundas,Rydalmere,Rosehill,Clyde").split(',')),"blue",false),
trainFactory("Leppington Line",(("Leppington,Edmonson Park,Glenfield,Casula,Liverpool").split(',')),"pink",false),
trainFactory("Olympic Park Line",(("Lidcombe,Olympic Park").split(',')),"grey",false)
];
//test cases
// console.log('The start of the eastern suburbs is Cronulla, right?');
// console.log(trainLines[12].start());
// console.log('The end of the northShore line is Parramatta, right?');
// console.log(trainLines[0].end());
// console.log(trainLines[0].motion("Berowra","Mount Colah"));

//returns an array of the indices all the lines that have the given stop within them
var findLine = function(stop) {
	var arr = [];
	trainLines.forEach(function(lin) {
		if (lin.stops.indexOf(stop) >= 0) {
			arr.push(trainLines.indexOf(lin));
		}
	});
	return arr;
}
//test cases:
// console.log(findLine('Campbelltown'));
// console.log(findLine('Central'));


//generates the pathway from one line to another
var twoStep = function (startLine, start, endLine, stop) {
	var endLeg = [];
	var startLeg = [];
	var connector = '';
	trainLines[startLine].stops.forEach(function(id) {
		if (trainLines[endLine].stops.indexOf(id) > 0 ) {
			//could use this array to possibly find a shorter path, but for now I'm sticking with the 
			//first successful match to complete the pathway quickest
			//this will have the connection station represented twice, this is helpful for later
			startLeg = ( trainLines[startLine].motion(start, id) );
			endLeg = ( trainLines[endLine].motion(id, stop) );
			startLeg = startLeg.concat(endLeg);
		}
	});
	//selects the first possible pathway and returns that
	//optimization could be done here on path length
	return startLeg;
}

var makeTrips = function(start, stop) {
	bigArra = [];
	var startLine = findLine(start);
	var endLine = findLine(stop);
	for ( i = 0 ; i < startLine.length ; i++ ) {
		for ( j = 0 ; j < endLine.length ; j++ ) {
			if ( startLine[i] === endLine[j] ) {
				//generates the pathway for a single line
				bigArra.push(trainLines[startLine[j]].motion(start,stop));
				return bigArra[0];
			} else {
				bigArra.push(twoStep(startLine[i], start, endLine[j], stop));
			}
		}
	}
	//generates the optimal pathway from within the 2-path solution array
	bigArra = bigArra.sort();
	for ( var i = 0 ; i < bigArra.length - 1 ; i++ ) {
		if ( (bigArra[i] < bigArra[i + 1]) && (bigArra[i] !== 0) ) {
			return bigArra[i+1];
		}
	}
}

var interaction = function (){
	var starter = prompt('Welcome to the Sydney Train system!\n Where are you getting on the train?');
	var ender = prompt('And where are you headed?');
	nax = makeTrips(starter,ender);

	//this loop finds if there are any duplicate stops, (indicating a transition between lines)
	//and changes the output based on that
	var changeLines = 0;
	if (nax.length > 0) {
		for ( i = 0 ; i < nax.length - 1 ; i++ ) {
			if (nax[i] === nax[i+1]) {
				changeLines = i;
			} 
		}
	if (changeLines !== 0) {
		//changes our output array, and displays the text for a trip that changes lines
		var startNax = nax.slice(0, changeLines);
		var endNax = nax.slice(changeLines + 1, nax.length);
		var connector = nax[changeLines];
		var yesNo = prompt("Your trip will take you through these stops:\n" + startNax.join(', ') + '\nThrough the connection at: ' + connector + "\nAnd finally through these stops: " + endNax.join(', ') + "\nThat's " + nax.length + " stops! \nPlease leave some feedback, we will toootally read it!");
		// ((yesNo.toLowerCase() === ('y' || 'yes')) ? interaction() : return nax);

	}	else {
			//displays the text for a trip that doesn't change lines
			var yesNo = prompt("Your trip will take you through these stops:\n" + nax.join(', ') + "\n That's " + nax.length + " stops! \nPlease leave some feedback, we will toootally read it!");
			// ((yesNo.toLowerCase() === ('y' || 'yes')) ? interaction() : return nax);
		}

	} else {
		var yesNo = prompt("Your trip cannot be calculated. \nPlease leave some feedback, we will toootally read it!");
		// ((yesNo.toLowerCase() === ('y' || 'yes')) ? interaction() : return nax);
	}
}

interaction();
// single line tests
// console.log(makeTrips("Cronulla","Kirrawee"));
// console.log(makeTrips("Kirrawee","Cronulla"));
// //this one doesn't find a trip because more than 1 connection is required
// console.log(makeTrips("Miranda","Martin Place"));
// console.log(makeTrips("Schofields", "Redfern"));
// console.log(makeTrips("Bondi Junction","Waterfall"));
// console.log(makeTrips("Town Hall","Kirrawee"));


// Hints:
// Work out how you would do it on paper first! Then start to explain that process in Javascript.
// Get the program to work for a single line before trying to tackle multiple lines.
// Don't worry about prompting the user for input. Hard code some values to get it working. You can use prompt() later to make it more interactive.
// Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// The key to the lab is finding the index positions of each stop. (hint: indexOf())
// Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)

//Object.keys('the object') = ['key 1', 'key 2']     