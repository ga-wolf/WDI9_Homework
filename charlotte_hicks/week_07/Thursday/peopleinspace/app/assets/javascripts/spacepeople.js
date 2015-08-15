$(document).ready(function () {

  var astroURL = 'http://api.open-notify.org/astros.json';

    $.ajax({
      url: 'http://api.open-notify.org/astros.json', 
      dataType: "jsonp"
    }).done(function (data) {
      $('#spacenum').append(data['number']);
    }).done(function (data) {
      _(data['people']).each(function (i) {
      $('<div class="majortom"/>').text(i.name).appendTo('#spacepeeps');
    });

  });

});
