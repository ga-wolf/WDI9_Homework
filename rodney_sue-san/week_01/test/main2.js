var points = { _1: [1,"A","E","I","O","U","L","N","R","S","T"],
                _2: [2,"D","G"],
                _3: [3,"B","C","M","P"],
                _4: [4,"F","H","V","W","Y"],
                _5: [5,"K"],
                _8: [8,"J","X"],
                _10: [10,"Q","Z"]
            };

console.log(points._1);
console.log(points[0]);
var score = 0;
var word = "";

var scrabble = function(string){

word=string.split("");
  
  
  for(var i= 0; i > word.length ; i++){

    for(var j = 0; j > points[i].length; j++){
      console.log(word[j]);
      if(word[j] === points[i][j+1]){
        score += points[i][0];
        break;
      }
    }
  }

console.log(score);

}

scrabble("CABBAGE")