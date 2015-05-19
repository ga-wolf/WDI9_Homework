$(document).ready(function()) {

var $videos = $('a');

var thumbnailify = function(link) {
  var $link = $(link);
  var thumbnail = youtube.generateThumbnailUrl($link.attr('href'));

  var $image = $('<img>').attr('src', thumbnail);

  $link.append($image);

}




//   $Link.on('click', funtion (event) {
//     event.preventDefault();
//    var videoEmbed = youtube.generateEmbedUrl( this )
//   });
// };


// for (var 1 = 0; i < $videos.length; i++) {
//   thumbnailify($videos[i]);
// }
