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

$('a').funText(30, 'candy');
$('h2').funText(30, 'candy');

var $linkArray = $('a')

thumbnailify = function (link){
  console.log('thumbnailify is working');
  var $link = $($linkArray[i]);
  var thumbnail = youtube.generateThumbnailUrl($link.attr('href'));
  var $image = $('<img>').attr('src', thumbnail);
  // var embedUrl = youtube.generateEmbedUrl($link.attr('href')
  $link.append($image);

  $link.on('click', function(){



    event.preventDefault(); //Will stop users from following the link like usual
    console.log($link.attr('href'))

    var embedUrl = youtube.generateEmbedUrl( $link.attr('href'))

    var embedHTML = '<iframe width="420" height="315" src ="' + embedUrl + '" frameborder="0" allowfullscreen></iframe>';

    $('#player').hide().html(embedHTML).fadeIn(200)
    
    // var videoEmbed = youtube.generateEmbedUrl(  )
  })

  // $('#video').on('click', function(){
  //   debugger
  //   console.log('click back is working');
  //   var videoPlayer = $('<iframe></iframe>')

  //   $('#video').append(videoPlayer);
  // })


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