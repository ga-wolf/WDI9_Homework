// The Subway: Lines N, L & 6 and their stations.
var subwayLines = {
  'N' : ['Times Square', '34th', '28th', '23rd', 'Union Square','8th'],
  'L' : ['8th', '6th', 'Union Square', '3rd', '1st'],
  '6' : ['Grand Central', '33rd', '28th', '23rd', 'Union Square','Astor Place']
};



// Prompts.

var userInput = function(planTrip) {

  var options = {  
    startLine: prompt('Please pick your starting line: N, L or 6.'),
    startStop: prompt('Which station would you like to start your journey at?'),
    endLine: prompt('Please pick your end line: N, L or 6.'),
    endStop: prompt('Which station do you need to get off at?')
  }

  return options;

}

var tripParams = userInput();



// Plan trip function.

var planTrip = function(startLine, startStop, endLine, endStop) {
    
    var startStopIndex;
    var endStopIndex;
    var route;
    
    // If the startLine and endLine are the same.
    if(startLine === endLine) {
        
        // Create references to the index of startStop and endStop.
        startStopIndex = subwayLines[startLine].indexOf(startStop);
        endStopIndex = subwayLines[endLine].indexOf(endStop);
        // console.log(startStopIndex);
        // console.log(endStopIndex);
        route = subwayLines[startLine].splice(startStopIndex, endStopIndex + 1);
        
        console.log('You need to travel on the ' + startLine + ' line: ' + route.join(', ') + '\n');
        
    // If startLine and endLine are different.
    } else {
        
        var intersection = true;
        // Create references to the index of startStop and endStop.
        // Create a slice for startStopIndex / endStopIndex to Union Square
       // var startLineUnionIndex
        // create the route variable;
        
        startStopIndex = subwayLines[startLine].indexOf(startStop);
        var startStopUnionIndex = subwayLines[startLine].indexOf('Union Square');
        
        // If indexes are in wrong order,
        // Swap their values.
        // With Array.prototype.slice(), the first index need must be smaller,
        // than the second index.
        if(startStopIndex > startStopUnionIndex) {
            startStopIndexHolder = startStopIndex;
            startStopIndex = startStopUnionIndex;
            startStopUnionIndex = startStopIndexHolder;
        }
        
        endStopIndex = subwayLines[endLine].indexOf(endStop);
        var endStopUnionIndex = subwayLines[endLine].indexOf('Union Square');
         
        // If indexes are in wrong order,
        // Swap their values.
        // With Array.prototype.slice(), the first index need must be smaller,
        // than the second index.
        if(endStopIndex > endStopUnionIndex) {
            endStopIndexHolder = endStopIndex;
            endStopIndex = endStopUnionIndex;
            endStopUnionIndex = endStopIndexHolder;
        }
        //console.log(endStopIndex);
        //console.log(endStopUnionIndex);
        
        var startRoute = subwayLines[startLine].slice(startStopIndex, startStopUnionIndex + 1);
        var endRoute = subwayLines[endLine].slice(endStopIndex, endStopUnionIndex + 1);
        
        route = startRoute.concat(endRoute);
        
        console.log('You need to travel from the ' + startLine + ' line: ' + startRoute.join(', ') + '.' + '\n');
    
        console.log('You need to change at Union Square.' + '\n');

    
        console.log('Your journey continues through the following stops: ' + endRoute.join(', ') + '.' + '\n');
    }
    
    console.log('There are ' + route.length + ' stops in total.' + '\n')
    
    //console.log('Thank you for using this amazing subway!');
    var chooChoo = [
      '___________   _______________________________________^__',
      ' ___   ___ |||  ___   ___   ___    ___ ___  |   __  ,----\\',
      '|   | |   |||| |   | |   | |   |  |   |   | |  |  | |_____\\',
      '|___| |___|||| |___| |___| |___|  | O | O | |  |  |        \\',
      '           ||| Choo Choo!         |___|___| |  |__|         )',
      '___________|||______________________________|______________/',
      '           |||          All aboard the Connie train..   /--------',
      '-----------\'\'\'---------------------------------------'
      ];

    chooChoo.forEach(function(line) {
        console.log(line);
    });
};

// If you need to change at `Union Square` over two lines.
planTrip(tripParams.startLine, tripParams.startStop, tripParams.endLine, tripParams.endStop);


// If you travel on the same lane.
//planTrip('L', '8th', 'L', '3rd');

// If you travel on the same lane.
//planTrip('N', 'Union Square', '6', 'Astor Place');




























 





