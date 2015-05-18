function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var randomRGBA = function(){
    //generate random red, green and blue intensity
    var r = getRandomInt(0, 255);
    var g = getRandomInt(0, 255);
    var b = getRandomInt(0, 255);
    
    return "rgba(" + r + "," + g + "," + b + ",0.5)";
};