  /* _______ _________ _______      _        _______  ______  
     (       )\__   __/(  ___  )    ( \      (  ___  )(  ___ \ 
     | () () |   ) (   | (   ) |    | (      | (   ) || (   ) )
     | || || |   | |   | (___) |    | |      | (___) || (__/ / 
     | |(_)| |   | |   |  ___  |    | |      |  ___  ||  __ (  
     | |   | |   | |   | (   ) |    | |      | (   ) || (  \ \ 
     | )   ( |   | |   | )   ( |    | (____/\| )   ( || )___) )
     |/     \|   )_(   |/     \|    (_______/|/     \||/ \___/ */


//Arrays for lines and staitons (consider consolidating later)

var line = ["N", "L", "6"];

var lineN = ["8th", "Union Square", "23rd", "28th", "34th", "Times Square"];
var lineL = ["8th", "6th", "Union Square", "3rd", "1st"];
var line6 = ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"];

//Global variables (user input)

var startingLine;         //Start line. User input variable   
var startingStation;      //Start station. User input variable
var endingLine;           //Ultime destination line. User input variable.
var endingStation;        //Ultimate destination station. User input variable


//Variables to be derived from functions

var startingLineIndex;      //Used to store the index of the starting line 
var startingStationIndex;   //Used to store the index of the starting station.
var endingLineIndex;        //Used to store the index of the ending line.
var endingStationIndex;     //Used to store the index of the ending station.
var transfer;               //records whether tranfer necessary (boolean - not what the station is, just whether they need to transfer
var changeStation;          //IFF two trips. Will always be Union Square, but including it just in case.
var totalStops;             //Total number of stops in journey. 
var lineOneStops = [];      //Blank array for stops on line one.
var lineTwoStops = [];      //IFF two trips. Blank array for stops on line two 

//Functions to get the line & station / start & end inputs and determine locations of all in line and station arrays.

var getStart = function(getStartingLine, getStartingStation) {

    startingLine = getStartingLine;
    startingStation = getStartingStation;
    startingLineIndex = line.indexOf(getStartingLine);              
    if (getStartingLine === "N") {                                  
      startingStationIndex = lineN.indexOf(getStartingStation);     
    } else if (getStartingLine === "L") {
      startingStationIndex = lineL.indexOf(getStartingStation);
    } else {
      startingStationIndex = line6.indexOf(getStartingStation);
    }
}

var getEnd = function(getEndingLine, getEndingStation) {
    
    endingLine = getEndingLine;
    endingStation = getEndingStation;                               
    endingLineIndex = line.indexOf(getEndingLine);                  
    if (getEndingLine === "N") {                                    
      endingStationIndex = lineN.indexOf(getEndingStation);      
    } else if (getEndingLine === "L") {
      endingStationIndex = lineL.indexOf(getEndingStation);
    } else if (getEndingLine === "6") {
      endingStationIndex = line6.indexOf(getEndingStation);
    }
}

//Function to determine whether person will need to change lines. 

var isEndOnStartingLine = function() {                                              
  if (startingLine === endingLine) {
    transfer = false;
  } else {
    transfer = true; 
    changeStation = "Union Square";
  }
}

var determineStops = function() {            

//Loop to determine the stops in single-line journey. Populates the lineOneStops array.
  
if (transfer === false) {
  if (startingStationIndex < endingStationIndex) {
    for (i = startingStationIndex + 1; i <= endingStationIndex; i++) {
      if (startingLine === "N") {
        lineOneStops.push(lineN[i]);
      } else if (startingLine === "L") {
        lineOneStops.push(lineL[i]);
      } else if (startingLine === "6") {
        lineOneStops.push(line6[i]);
      }
    }
  } else if (startingStationIndex > endingStationIndex) {
      for (i = startingStationIndex - 1; i >= endingStationIndex; i--) {
        if (startingLine === "N") {
          lineOneStops.push(lineN[i]);
        } else if (startingLine === "L") {
          lineOneStops.push(lineL[i]);
        } else if (startingLine === "6") {
          lineOneStops.push(line6[i]);
        }
      }
    } 

  // Loop to determine the stops in a multi-line journey. Populates the lineOneStops and lineTwoStops arrays.

  } else {
    if (startingLine === "N") {
      if (startingStationIndex < lineN.indexOf(changeStation)) {
        for (i = startingStationIndex + 1; i <= lineN.indexOf(changeStation); i++) {
          lineOneStops.push(lineN[i]);
        }
      } else if (startingStationIndex > lineN.indexOf(changeStation)) {
        for (i = startingStationIndex - 1; i >= lineN.indexOf(changeStation); i--) {
          lineOneStops.push(lineN[i])
        }
      }
    } else if (startingLine === "L") {
      if (startingStationIndex < lineN.indexOf(changeStation)) {
        for (i = startingStationIndex + 1; i <= lineL.indexOf(changeStation); i++) {
          lineOneStops.push(lineL[i]);
        }
      } else if (startingStationIndex > lineN.indexOf(changeStation)) {
        for (i = startingStationIndex - 1; i >= lineL.indexOf(changeStation); i--) {
          lineOneStops.push(lineL[i])
        }
      }
    } else if (startingLine === "6") {
      if (startingStationIndex < line6.indexOf(changeStation)) {
        for (i = startingStationIndex + 1; i <= line6.indexOf(changeStation); i++) {
          lineOneStops.push(line6[i]);
        }
      } else if (startingStationIndex > line6.indexOf(changeStation)) {
        for (i = startingStationIndex - 1; i >= line6.indexOf(changeStation); i--) {
          lineOneStops.push(line6[i])
        }
      }
    }
    if (endingLine === "N") {
      if (lineN.indexOf(changeStation) < endingStationIndex) {
        for (i = lineN.indexOf(changeStation) + 1; i <= endingStationIndex; i++) {
          lineTwoStops.push(lineN[i]);
        }
      } else if (lineN.indexOf(changeStation) > endingStationIndex) {
        for (i = lineN.indexOf(changeStation); i >= endingStationIndex; i--) {
          lineTwoStops.push(lineN[i]);
        }
      }
    } else if (endingLine === "L") {
      if (lineN.indexOf(changeStation) < endingStationIndex) {
        for (i = lineL.indexOf(changeStation) + 1; i <= endingStationIndex; i++) {
          lineTwoStops.push(lineL[i]);
        }
      } else if (lineL.indexOf(changeStation) > endingStationIndex) {
        for (i = lineL.indexOf(changeStation) -1; i >= endingStationIndex; i--) {
          lineTwoStops.push(lineL[i]);
        }
      }
    } else if (endingLine === "6") {
      if (line6.indexOf(changeStation) < endingStationIndex) {
        for (i = line6.indexOf(changeStation) +1; i <= endingStationIndex; i++) {
          lineTwoStops.push(line6[i]);
        }
      } else if (line6.indexOf(changeStation) > endingStationIndex) {
        for (i = line6.indexOf(changeStation) -1 ; i >= endingStationIndex; i--) {
          lineTwoStops.push(line6[i]);
        }
      }
    }
  }

//Sets total stops count for both single line and multi-line journeys. 

totalStops = (lineOneStops.length + lineTwoStops.length);
}

//Summary of journey

var journeySummary = function() {

  console.log("Your journey starts at " + startingStation + " on the " + startingLine + " line.");
  if (lineOneStops.length < 2) {
    console.log("You must travel through the following stop on the " + startingLine + " line: " + lineOneStops + ".");
  } else {
    console.log("You must travel through the following stops on the " + startingLine + " line: " + lineOneStops.join(', ') + ".");
  }
  if (transfer === true) {
    console.log("Change at " + changeStation + ".");
    if (lineTwoStops.length < 2) {
    console.log("Your journey continues on " + endingLine + " through the following stop: " + lineTwoStops + ".");
} else {
  console.log("Your journey continues on " + endingLine + " through the following stops: " + lineTwoStops.join(', ') + ".");
}
    
  }
  if ((lineOneStops.length + lineTwoStops.length < 2)) {
    console.log(totalStops + " stop in total.");
  } else {
    console.log(totalStops + " stops in total.");
  }

}


//                   ;,_            ,
//                   _uP~"b          d"u,
//                  dP'   "b       ,d"  "o
//                 d"    , `b     d"'    "b
//                l] [    " `l,  d"       lb                 d8888b. d88888b d8888b. d8888b. d88888b .d8888. d88888b d8b   db d888888b 
//                Ol ?     "  "b`"=uoqo,_  "l                88  `8D 88'     88  `8D 88  `8D 88'     88'  YP 88'     888o  88 `~~88~~' 
//              ,dBb "b        "b,    `"~~TObup,__           88oobY' 88ooooo 88oodD' 88oobY' 88ooooo `8bo.   88ooooo 88V8o 88    88
//            ,d" (db.`"         ""     "tbc,_ `~"Yuu,_      88`8b   88~~~~~ 88~~~   88`8b   88~~~~~   `Y8b. 88~~~~~ 88 V8o88    88
//          .d" l`T'  '=                      ~     `""Yu,   88 `88. 88.     88      88 `88. 88.     db   8D 88.     88  V888    88
//        ,dO` gP,                           `u,   b,_  "b7  88   YD Y88888P 88      88   YD Y88888P `8888Y' Y88888P VP   V8P    YP
//       d?' ,d" l,                           `"b,_ `~b  "1           
//     ,8i' dl   `l                 ,ggQOV",dbgq,._"  `l  lb    458739873607307397356873569735645830873534535358844456873097368756897
//    .df' (O,    "             ,ggQY"~  , @@@@@d"bd~  `b "1             .d888b.            .d88b.            db             ooooo
//   .df'   `"           -=@QgpOY""     (b  @@@@P db    `Lp"b,           VP  `8D           .8P  88.          o88            8P~~~~ 
//  .d(                  _               "ko "=d_,Q`  ,_  "  "b,            odD'    ***    88  d'88    ***    88    ***    dP  
//  Ql         .         `"qo,._          "tQo,_`""bo ;tb,    `"b,        .88'     *****   88 d' 88   *****   88   *****   V8888b.
// (qQ         |L           ~"QQQgggc,_.,dObc,opooO  `"~~";.   __,7,     j88.       ***    `88  d8'    ***    88    ***        `8D
// `qp         t\io,_           `~"TOOggQV""""        _,dg,_ =PIQHib.    888888D            `Y88P'            VP           88oobY'
//  `qp        `Q["tQQQo,_                          ,pl{QOP"'   7AFR`    435897459867598398645763976495870975030734568739873597874597
//    `         `tb  '""tQQQg,_             p" "b   `       .;-.`Vl'
//               "Yb      `"tQOOo,__    _,edb    ` .__   /`/'|  |b;=;.__          db   d8b   db d8888b. d888888b        .d888b. 
//                             `"tQQQOOOOP""        `"\QV;qQObob"`-._`\_~~-._     88   I8I   88 88  `8D   `88'          88' `8D  
//                                  """"    ._        /   | |oP"\_   ~\ ~\_  ~\   88   I8I   88 88  `8D   `88'          88' `8D 
//                                          `~"\ic,qggddOOP"|  |  ~\   `\  ~-._   88   I8I   88 88  `8D   `88'          88' `8D 
//                                            ,qP`"""|"   | `\ `;   `\   `\       88   I8I   88 88   88    88           `V8o88'
//                                 _        _,p"     |    |   `\`;    |    |      Y8   I8I   88 88   88    88    C8888D    d8'
//                                  "boo,._dP"       `\_  `\    `\|   `\   ;      `8b d8'8b d8' 88  .8D   .88.            d8'
//                                   `"7tY~'            `\  `\    `|_   |          `8b8' `8d8'  Y8888D' Y888888P         d8'
//                                                            `~\  |


  //TEST CASES 

  //One line

getStart("N","34th");
getEnd("6", "Grand Central");
isEndOnStartingLine();
determineStops();
journeySummary();

  //Transfer 

// getStart("N","Times Square");
// getEnd("6", "33rd");
// isEndOnStartingLine();
// determineStops();
// journeySummary();
