$(document).ready(function() {

  $('#listSearch').on('submit', function(event) {
    event.preventDefault(); //stops the form from submitting and letting JS handle it.

    var search = ("?" + $('#listSearch').serialize());
    var action = $('#listSearch').attr('action');


    $.ajax({
      url: (action + search)
    }).done(function(info) {
      $('#result').html("");
      if (!info.Response) {
        if (info.Search.length === 1) {
          getRequest(info.Search[0].imdbID, 'i');
        } else {
          createSearchResults(info);
        };
      } else {
        createErrorMessage();
      };
    });
  });

  var createErrorMessage = function() {
    $('#result').append('<p>No results found...</p>');
  };

  var createSearchResults = function(info) {
    for (var i = 0; i < info.Search.length; i++) {
      $('#result').append('<p><button id="' + info.Search[i].imdbID + '">' + info.Search[i].Title + ' (' + info.Search[i].Year + ')</button></p>');
      createHandler(info.Search[i].imdbID);
    };
  };

  var createHandler = function(imdbID) {
    $('#' + imdbID).on('click', function(event) {
      event.preventDefault();
      getRequest(imdbID, 'i');
    });
  };

  var getRequest = function(string, type) {
    $.ajax({
      url: ('http://omdbapi.com/?' + type + '=' + string),
    }).done(function(info) {
      $('#result').html('<img src="' + info.Poster + '">');
    });
  };
});
