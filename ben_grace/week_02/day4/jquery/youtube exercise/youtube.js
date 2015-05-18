var linkArray = document.querySelectorAll('a')

for (var i = 0; i < linkArray.length; i++) {
  var link = linkArray[i].getAttribute('href');
  var thumbnail = youtube.generateThumbnailUrl(link);
  var image = document.createElement('img');
  image.setAttribute('src', thumbnail);
  linkArray[i].appendChild(image);
};


//////
//John ressig///
////Jquery guy///
///////////////