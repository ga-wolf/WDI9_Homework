$(document).ready(function() {

  $('form').on('submit', function(event) {  //Need to pass in the event occuring when the form is submitted.
    event.preventDefault(); //Don't submit the form, JS will handle it
    var request = new XMLHttpRequest();
    var movieTitle = $('input[name="t"]').val();
    request.open('GET', "http://www.omdbapi.com/?s=" + movieTitle);

    request.onreadystatechange = function() {
      if (request.readyState === 4) {
        var movieInfo = JSON.parse(request.responseText);
        console.log(movieInfo);

        //HTML for different results

        var $noResults = $('<div class="singleColumn"></div>');
        var $oneResult = $('<div class="row"><div class="col-md-4"></div><div class="col-md-8"></div></div>');
        var $manyResults = $('<div class="singleColumn" id="listTitle></div><div class="singleColumn" id="movieList></div>')

        //Logic to parse responseText to format HTML for results

        if (movieInfo["Response"] === "False") {
          //Not a movie
          $('.container-fluid').append($noResults);
          $('.singleColumn').html("<p>That's not even a movie. Try something else.</p>")
          
        } else if (movieInfo["Search"].length === 1) {
          //Info for single movie
          var movieTitle = movieInfo["Search"][0]["Title"]
          var movieYear = movieInfo["Search"][0]["Year"]

          $('.container-fluid').append($oneResult);
          $('.col-md-4').html("<p>Title: </p><p>Year: </p>")
          $('.col-md-8').html("<p>" + movieTitle + "</p><p>" + movieYear + "</p>")

        } else {
          //Multiple results
          for (var i = 0; i <= movieInfo["Search"].length; i++) {
            //create list of results here
          }
          $('.container-fluid').append($manyResults);
          $('#listTitle').html('<p>Multiple results returned</p>')
          $('#listTitle').html('<p>' +  + '</p>')
        }
      } 
    } 
    request.send();       
  });
});