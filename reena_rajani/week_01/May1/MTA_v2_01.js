


// Create a program that models a simple subway system. - do a second version of MTA 
// where all stations appearing on multiple lines (28th, 23rd) can be used to change lines. how much do you need to change your existing code to do this?
// see if you can avoid asking the user for their line -- just ask for the station and work out which line they're on for them


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


var planTrip = function (src , dest){

  srcLine = getLine(src);
  if(getLine(src) === false) {

    console.log(' No such sation Exists !! ' ) ;
  }
}


 var getLine = function (sationName){

    if( (trainStations.NLine.indexOf(sationName)) !== -1) {
      
      return 'NLine' ;
    
    } else if( (trainStations.LLine.indexOf(sationName)) !== -1) {
        
        return 'LLine' ;
      
      } else if( (trainStations.Line6.indexOf(sationName)) !== -1) {
         
          return 'Line6' ;
        
      } else {
            
            return false;
          
        }

 }

