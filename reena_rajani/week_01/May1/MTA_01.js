// Create a program that models a simple subway system.

// The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:

// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.

// // console.log() shows output similar to this:
// // "Your must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."
// There are 3 subway lines:
// The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
// The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
// All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
// Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.

// rs1 : trainStations[currLine] --> the value of currLine is checked and replaced
//trainStations.currLine  --> the currLine is checked (not the value contained in currLine)

// assumption : The train does not travel in a loop. 

/* conditions checked  :
1. line exists or not
2. station exists or not 
3. station exists in that partiular line or not
4. if src and destination is the same 
5. movement forward journey or return journey (NO LOOP)
6. user input through prompts

*/

/*

  __                .__        
_/  |_____________  |__| ____  
\   __\_  __ \__  \ |  |/    \ 
 |  |  |  | \// __ \|  |   |  \
 |__|  |__|  (____  /__|___|  /
                  \/        \/ 


*/
//Global Variable declaration
var i;
var srcIndex ;
var destIndex ;
var liststations ;



// created an object of arrays
var trainStations = {
  NLine :['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
  LLine :['8th', '6th', 'Union Square', '3rd', '1st'],
  Line6 :['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
};


/*
     | |            
 _ __ | | __ _ _ __  
| '_ \| |/ _` | '_ \ 
| |_) | | (_| | | | |
| .__/|_|\__,_|_| |_|
| |                  
|_|                 
*/

// function that plans the trip based on the inputs -> the current line , source stop and the destination stop 
var planTrip = function(currLine,src,dest){
//debugger;
  console.log('------------------------------------------------------') ; // for better readability of the result 
  if( ifSationExists(src) === true  && ifSationExists(dest) === true  && ifLineExists(currLine) === true  && isValidSource(currLine,src) === true)  { // only if station exists continue rest 

       var currStat = trainStations[currLine]; // dont use the . operator here as it would throw undefined error  rs1:

        if( src === dest ) { 

            console.log(" Your source and destination is the same . You dont have to travel by Train.. " );
            console.log( " Walk !! Walking is Good for You !!!!!!! ");

        } else { // if source and destination are different 

                  if((currStat.indexOf(dest)) !== -1){  // checks if the source and destination are on the same line or not. indexof returns the value -1 if the dest does not exist 

                     liststations =  sameLineTrip(currStat,src,dest);  // input is the trainStations[currLine] then we dont have to do this step again inside the function.

                      console.log("You must travel through the following stops on the " +  liststations );
                      console.log( " ENJOY YOUR JOURNEY \n ");

                  }  else {

                    liststations = diffLineTrip(currLine,src,dest);
                    
                    console.log(" You must travel through the following stops on the " +  liststations );
                    console.log( " ENJOY YOUR JOURNEY \n ");

                    } // end else for train stations in different lines
  
              } // // end else for src !== dest )

  } else {

      ifLineExists(currLine) === false ? console.log(' The Line - ' + currLine + ' DOES NOT exist ') : console.log('') ;

      (ifSationExists(src) === false ) ? console.log(' The station - ' + src + ' DOES NOT exist ') : console.log(' The station - ' + dest + ' DOES NOT exist ') ;
      
      isValidSource(currLine ,src) === false ? console.log ( ' The station - ' + src + ' DOES NOT exist on ' + currLine ) : console.log('') ;
  }

} // end of Function 


/*
 _____                        _      _            
 / ____|                      | |    (_)           
| (___   __ _ _ __ ___   ___  | |     _ _ __   ___ 
 \___ \ / _` | '_ ` _ \ / _ \ | |    | | '_ \ / _ \
 ____) | (_| | | | | | |  __/ | |____| | | | |  __/
|_____/ \__,_|_| |_| |_|\___| |______|_|_| |_|\___|
                                                   
*/

// function that returns the list of stations in the same line. takes input the list of stations , the source and the destination stations
// aaray.slice() --> The slice() method returns a shallow copy of a portion of an array into a new array object.Zero-based index 
var sameLineTrip  = function(currStat,src,dest){
  
  var list;
 
  srcIndex = currStat.indexOf(src);
  destIndex = currStat.indexOf(dest);
  
  list = stationList(srcIndex,destIndex, currStat);
  
  return list;

}


/*
_____  _  __  __   _      _            
|  __ \(_)/ _|/ _| | |    (_)           
| |  | |_| |_| |_  | |     _ _ __   ___ 
| |  | | |  _|  _| | |    | | '_ \ / _ \
| |__| | | | | |   | |____| | | | |  __/
|_____/|_|_| |_|   |______|_|_| |_|\___|                             

*/

// function that returns the list of stations on different Lines takes input the current line , the source and the destination stations
function diffLineTrip(currLine,src,dest) {

var listsrc , listdest  ;
var srcStations  =  trainStations[currLine] ; 
var destLine;
var destStations;
var display_result;
var nofStops;


  srcIndex = srcStations.indexOf(src);
  destIndex = srcStations.indexOf('Union Square'); // Union Square is  the common intersection point between 3 stations 

  listsrc = stationList(srcIndex,destIndex+1, srcStations) ; // calling function that lists all the stations dest-1 ==> because we do not want to print the union square 

  destLine =  getLine(currLine, dest) ; // checking for which line the destination station is ?
  destStations = trainStations[destLine];
  srcIndex = destStations.indexOf('Union Square');
  destIndex = destStations.indexOf(dest);

  listdest = stationList(srcIndex-1,destIndex, destStations) ;


  nofStops = listsrc.length + listdest.length + 1; // +1 includes the union square stop 

  console.log(' \n\t  Your travel Itenary from '  + currLine  + ' ' + src + ' to ' + dest + ' \n' ) ; 
  console.log(" You must travel through the following stops on the " + currLine + " : " + listsrc) ;
  console.log( " Change at Union Square." ) ;
  console.log( "Your journey continues through the following stops: " + listdest) ;
  console.log( nofStops + ' stops in total.') ;

  return listsrc + ' , Union Square ,' + listdest; // hardcoding Union Square because it would not be in src or destination

} // end of function 




// function that returns which Line the destination station is. takes input the current line and the destination stations
var getLine = function (currLine, dest) {
  var destLine; 
  var temp;
  
  if(currLine !=='NLine' && currLine !=='LLine') { // since currLine is not Nline || LLine, it is Line6
     temp = trainStations.NLine ; // randomly checking for Nline
      return temp.indexOf(dest) !== -1 ? 'NLine' : 'LLine' ; // if Dest is in NLine, return NLine else it is in LLine 
  }
  if(currLine !=='NLine' && currLine !=='Line6') {
     temp = trainStations.NLine ;
      return temp.indexOf(dest) !== -1 ? 'NLine' : 'Line6' ;
  }

  if(currLine !=='LLine' && currLine !== 'Line6') {
     temp = trainStations.LLine ;
      return temp.indexOf(dest) !== -1 ? 'LLine' : 'Line6' ;
  }
}



// function that returns the list of stations  based on inputs srcindex, destindex and the station list 
var stationList = function (srcIndex,destIndex, stations){

  var list ;
  if(srcIndex > destIndex ) {
    
    list = ( stations.slice( destIndex, srcIndex+1 ) ) .reverse(); // slice extracts up to but not including end, hence adding +1 includes the end destination also as required. 
    
  } else {
    
     list = stations.slice(srcIndex,destIndex+1);
  }

 // srcIndex > destIndex ? list = stations.slice( destIndex, srcIndex+1 ) :  list = stations.slice(srcIndex,destIndex+1);

  return list;
}






// function that gets the user inputs via prompts 
 var getTripPlan = function(){

  var source , destination , currentLine;

  currentLine = prompt(' Hi Enter the currentLine of the source : ');
  source = prompt(' Enter the source station  : ');
  destination = prompt(' Enter the destination : ');

  planTrip( currentLine , source , destination);

 }



 // function that checks if the given station exists or not 
 var ifSationExists = function (sationName){

    if( (trainStations.NLine.indexOf(sationName)) !== -1) {
      
      return true ;
    
    } else if( (trainStations.LLine.indexOf(sationName)) !== -1) {
        
        return true ;
      
      } else if( (trainStations.Line6.indexOf(sationName)) !== -1) {
         
          return true ;
        
      } else {
            
            return false;
          
        }

 }



// function that checks if valid Line is entered or not 
var ifLineExists = function (line) {

  var value;
  line ==='NLine' || line ==='LLine' || line ==='Line6' ? value = true : value = false   ;
  return value ;

}



//function that checks if for a given line , the station exists or not 
var isValidSource = function(currLine,src){

  var value ;
  
  if(ifLineExists(currLine) === true ){

    trainStations[currLine].indexOf(src) !== -1 ? value = true : value = false ;
    return value;

  }  
  
}




// same line Destination calls
planTrip('NLine' ,'Times Square' ,'23rd'); //'Times Square', '34th', '28th', '23rd
planTrip('LLine' , '8th' ,'3rd'); // 8th', '6th', 'Union Square', '3rd'
planTrip('Line6' ,'33rd' ,'Grand Central'); // '33rd' ,'Grand Central',
planTrip('NLine' ,'8th' ,'Times Square' ); // 8th,Union Square,23rd,28th,34th,Times Square


// different Line Destination calls 
planTrip('NLine' ,'Times Square' ,'6th'); //ts, 34,28,23,us,6
planTrip('LLine' , 'Grand Central' , '34th'); // incorrect entry 
planTrip('LLine' , '1st' , '34th'); // 1st,3rd , us, 23rd,28th,34th
planTrip('NLine' ,'Times Square' ,'Times Square');  


// incorrect value calls
 
planTrip('NLine' ,'TimesSquare' ,'Times Square'); 
planTrip('Nline' ,'Times Square' ,'6th');

 // user inputs the values 
 getTripPlan();

