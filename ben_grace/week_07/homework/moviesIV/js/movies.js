//I need to take the information passed in from OMDB and parse it through JSON

//

$(document).ready(function(){

  $('form').on('submit', function( event ) {

  input = $( "input" ).val()

    event.preventDefault() // This stops the form submit action so JS can do it.
    // debugger
    //put code here.

    // var request = new XMLHttpRequest()
    // request.open('GET', "http://omdbapi.com/?t=" + input)
    // request.onreadystatechange = function () {
    //   if( request.readyState === 4 ) {

    //     console.log(request.responseText);
    //     var movieInfo = JSON.parse( request.responseText )
    //     console.log(movieInfo.Poster)
    //     $('#poster').attr('src', movieInfo.Poster);
    //     if (movieInfo.Poster === 'N/A'){
    //       $('#poster').attr('src', 'http://www.fillmurray.com/400/400');
    //     }
    //     $('#title').html(movieInfo.Title)
    //     $('#actors').html('Featuring: ' + movieInfo.Actors)
    //     $('#synopsis').html('Synopsis: ' + movieInfo.Plot)
    //     $('#director').html('Directed by: ' + movieInfo.Director)
    //     $('#writer').html('Written by: ' + movieInfo.Writer)

    //   };
    // };
    // request.send();

    $.ajax({
      url: "http://www.omdbapi.com/?t=" + input,
      dataType:'json'
    }).done(function(movieInfo){
      $('#poster').attr('src', movieInfo.Poster);
        if (movieInfo.Poster === 'N/A'){
          $('#poster').attr('src', 'http://www.fillmurray.com/400/400');
        }
    }).done(function(movieInfo){
        $('#title').html(movieInfo.Title)
        $('#actors').html('Featuring: ' + movieInfo.Actors)
        $('#synopsis').html('Synopsis: ' + movieInfo.Plot)
        $('#director').html('Directed by: ' + movieInfo.Director)
        $('#writer').html('Written by: ' + movieInfo.Writer)
    })
  });




});

