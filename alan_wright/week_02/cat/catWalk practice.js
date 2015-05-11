var $img = $('img');

$img.css('position', 'absolute');
$img.css('left', '-170px');
$img.css('top', '500px');
var catWalk = function (){
  var oldLeft = parseInt($img.css('left'));
  var newLeft = oldLeft + 10;
  $img.css('left', newLeft + 'px');
  if (newLeft > 1300)  {
    $img.css('left', '-170px');
    $img.attr('src', 'simbaold.gif');
  }
}

setInterval(catWalk, 100);

// var $img = $('img');


// $img.css('position', 'absolute');
// $img.css('left', "100px");




// console.log($img);

