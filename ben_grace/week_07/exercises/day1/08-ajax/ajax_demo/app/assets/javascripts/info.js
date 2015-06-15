$(document).ready(function(){

  // var fetchInfo = function () {

  //   var request = new XMLHttpRequest();
  //   request.open('GET', '/info');
  //   request.onreadystatechange = function () {
  //     if (request.readyState === 4){
  //       console.log(request.responseText);
  //       //decode string into a js object
  //       var info = JSON.parse( request.responseText );
  //       $('#time').html(info.time);
  //       $('#uptime').html(info.uptime);
  //       $('#randos').append(info.random + ', ');

  //       console.warn(info.brother)

  //       fetchInfo();
  //     };
  //   };
  //   request.send();
  // };

  // fetchInfo();

  var fetchInfo = function() {
    $.ajax({
      url: '/info',
      dataType:'json', //'Type' must be capitalised when writing this.
    }).done(function (result) {
      $('#time').html(result.time);
    }).done(function (result){
      $('#uptime').html(result.uptime);
    }).done(function (result){
      $('#randos').append(result.random + ', ');
    }).done(fetchInfo);
  }

  // fetchInfo()

});


      // success: function(result) {

      //  console.log(result);
      //  $('#time').html(result.time);
      //  $('#uptime').html(result.uptime);
      //  $('#randos').append(result.random + ', ');

      //  setTimeout(fetchInfo, 1000);
      // }
