// var linkArray = document.querySelectorAll('a')

// for (var i = 0; i < linkArray.length; i++) {
//   var link = linkArray[i].getAttribute('href');
//   var thumbnail = youtube.generateThumbnailUrl(link);
//   var image = document.createElement('img');
//   image.setAttribute('src', thumbnail);
//   linkArray[i].appendChild(image);
// };


// //////
// //John ressig///
// ////Jquery guy///
// ///////////////


// var $linkArray = $('a')

// for (var i = 0; i < $linkArray.length; i++) {
//   var $link = $(linkArray[i])
//   var thumbnail = youtube.generateThumbnailUrl($link.attr('href'));
//   var $image = $('<img>').attr('src', thumbnail);
//   $link.append($image)
// };

var $linkArray = $('a')

thumbnailify = function (){

  var $link = $($linkArray[i])
  var thumbnail = youtube.generateThumbnailUrl($link.attr('href'));
  var $image = $('<img>').attr('src', thumbnail);
  $link.append($image)
  

}

for (var i = 0; i < $linkArray.length; i++){
  thumbnailify()
}



//////
//Fancy pants way///
/////

// $linkArray.each(function () {
//   // var $link = this;
//   var thumbnail = youtube.generateThumbnailUrl($(this).attr('href'));
//   var $image = $('<img>').attr('src', thumbnail);
//   $(this).append($image);
// });