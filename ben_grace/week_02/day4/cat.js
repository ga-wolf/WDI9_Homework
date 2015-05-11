

var cat = document.getElementsByTagName('img')[0];
cat.style.left = 0 +'px';

// var screenStop = parseInt(window.innerWidth) + 'px'

// var danceCat = "http://mtv.mtvnimages.com/uri/mgid:file:http:shared:public.articles.mtv.com/wp-content/uploads/2014/08/cat1.gif"


moveKittyForward = function(){
  // debugger
  cat.style.left = parseInt(cat.style.left) + 10 + 'px';
  clearInterval(kittyIsMovingBackward);
  if (cat.style.left === '1200px'){
    clearInterval(kittyIsMovingForward);
    setInterval(moveKittyBackward, 60);
  }  
  if (cat.style.left === '500px'){
    cat.src = "http://mtv.mtvnimages.com/uri/mgid:file:http:shared:public.articles.mtv.com/wp-content/uploads/2014/08/cat1.gif"
  }
  if (cat.style.left === '800px'){
    cat.src = "http://www.anniemation.com/clip_art/images/cat-walk.gif"
  }
}

moveKittyBackward = function(){
  cat.style.left = parseInt(cat.style.left) - 10 + 'px';
  console.log('Backward is working')
  clearInterval(kittyIsMovingBackward)
  if(cat.style.left === '0px'){
    // clearInterval(kittyIsMovingBackward)
    setInterval(moveKittyForward, 60);
  }
  if (cat.style.left === '800px'){
    cat.src = "http://mtv.mtvnimages.com/uri/mgid:file:http:shared:public.articles.mtv.com/wp-content/uploads/2014/08/cat1.gif"
  }
  if (cat.style.left === '500px'){
    cat.src = "http://www.anniemation.com/clip_art/images/cat-walk.gif"
  }
}



// kittyIsDancing = function(){
//   cat.src = danceCat
// }

// normalKitty

// var kittyIsBackwards = setInterval(moveKittyBackward, 60)


var kittyIsMovingForward = setInterval(moveKittyForward, 60);
var kittyIsMovingBackward = setInterval(moveKittyBackward, 60);