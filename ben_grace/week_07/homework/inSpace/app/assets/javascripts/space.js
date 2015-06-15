var astronautInfo = "http://api.open-notify.org/astros.json"


$(document).ready(function(){

  var number = 0
  var people = []

  // $.getJSON('http://api.open-notify.org/astros.json', function(data) {
  // console.log(data['number'])
  // });

  var getAstronauts = function (){
    $.ajax({
    url: astronautInfo,
    dataType: "jsonp"
  }).done(function (data) {
    number = data.number 
    $('#information').text(number)
  });
  }

  setInterval(getAstronauts, 10)

});

// .............?part=snippet&key=YOURAPIKEYHERE&q=janebirkin