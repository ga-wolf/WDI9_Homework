var cat1 = document.getElementById('cat1');
//var cat1 = document.getElementById('cat1');
var gstart = document.getElementById('gstart');
var walkLeft;
var walkRight;
var danceCat;
var directionR=true;
var oldImg = cat1.src;
var newImg = "http://vignette2.wikia.nocookie.net/uncyclopedia/images/2/21/Dance_cat.gif";
var count = 0;


cat1.style.position = 'absolute';
cat1.style.top = "20px";
cat1.style.left = "0px";
cat1.style.width = '10px';
cat1.style.height = '10px';


var catwalk = function(){
  var oldSize = parseFloat(cat1.style.width);
  var newSize = oldSize + 1;

  var oldTop = parseFloat(cat1.style.top);
  var newTop = oldTop + 0.1;

  var oldLeft = parseFloat(cat1.style.left);

  var oldRight = parseFloat(cat1.style.right);

  
  if(oldLeft > (window.innerWidth / 2) && oldLeft < (window.innerWidth /2) + 5){
    danceCat = setInterval(dance,1000);
    clearInterval(walkRight);
    directionR = true;
    cat1.src = newImg;
    cat1.style.left = (cat1.style.left + 5) + 'px';
  }


  if(oldLeft > 210){
    var newLeft = oldLeft + (5);
  }else if(oldLeft > 80){
    var newLeft = oldLeft + (3);
  }
  else{
    var newLeft = oldLeft + (1.5);
  }





  if(oldLeft < window.innerWidth){
  cat1.style.width = newSize + 'px';
  cat1.style.height = newSize + 'px';
  cat1.style.top = newTop + 'px';
  cat1.style.left = newLeft + 'px';
  }else{
    clearInterval(walkRight);
    cat1.className = "";
    cat1.className = "turnLeft";
    walkLeft = setInterval(catwalkOp,100);
  
  }
};


var catwalkOp = function(){
  var oldSize = parseFloat(cat1.style.width);
  var newSize = oldSize - 1;

  var oldTop = parseFloat(cat1.style.top);
  var newTop = oldTop - 0.1;

  var oldLeft = parseFloat(cat1.style.left);

  var oldRight = parseFloat(cat1.style.right);


   if(oldLeft > (window.innerWidth / 2) && oldLeft < (window.innerWidth /2) + 5){
    danceCat = setInterval(dance,1000);
    clearInterval(walkLeft);
    directionR = false;
    cat1.src = newImg;
    cat1.style.left = (cat1.style.left - 5) + 'px';
  }





  
  if(oldLeft > 210){
    var newLeft = oldLeft - (5);
  }else if(oldLeft > 80){
    var newLeft = oldLeft - (3);
  }
  else{
    var newLeft = oldLeft - (1.5);
  }


  if(oldLeft > 0){
  cat1.style.width = newSize + 'px';
  cat1.style.height = newSize + 'px';
  cat1.style.top = newTop + 'px';
  cat1.style.left = newLeft + 'px';
  }else{
    clearInterval(walkLeft);
    walkRight = setInterval(catwalk, 100);

    cat1.className = "";
    cat1.className = "turnRight";


  }
};

var dance = function(){
  

  count = count + 1;

  if (count > 10){
    count = 0;
    cat1.src = oldImg;

    if (directionR){
      clearInterval(danceCat);
       walkRight = setInterval(catwalk, 100);
        
    }else{
        clearInterval(danceCat);
       walkLeft = setInterval(catwalkOp, 100);
    }
  }
};



walkRight = setInterval(catwalk, 100);


