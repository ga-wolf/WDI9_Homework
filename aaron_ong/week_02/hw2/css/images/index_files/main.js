var books = [
  {title: 'The Design of EveryDay Things',
   author: 'Don Norman',
   alreadyRead: false,
   img: 'http://fillmurray.com/100/201'
  },
  {title: 'The Most Human Human',
  author: 'Brian Christian',
  alreadyRead: true,
  img: 'http://fillmurray.com/100/200'
  }];

var appendToHtml = function(object) {
	$('#books').append('<h3 id="'+ object.title +'">' + object.title + '</h3>' + '\n<p>' + object.author + '</p>' + '\n<p>' +object.alreadyRead + '</p>' +'<img src="'+ object.img +'" alt="">')
	object.alreadyRead ? $('#' + object.title).style.color = 'green' : $('#' +object.title).style.color = 'red'
}
books.forEach(appendToHtml)