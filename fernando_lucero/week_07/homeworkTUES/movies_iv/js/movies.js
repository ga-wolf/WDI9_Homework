$(document).ready(function () {
	
	$('form').on('submit', function () {
		event.preventDefault(); //dont submit this form, JS will handle it
		
		var request = new XMLHttpRequest();
		var name = $('#t').val();
		console.log(name);
		request.open('GET', "http://omdbapi.com/?t=" + name, true);


		request.onreadystatechange = function () {

			if (request.readyState === 4) {
				var movieObject = JSON.parse(request.responseText);

				console.log(movieObject);

				$('#title').append( movieObject.Title );
				$('#year').append( "Released " + movieObject.Year );
				$('#rated').append( "Rated " + movieObject.Rated );
				$('#runtime').append( "Running Time " + movieObject.Runtime );
				$('#starring').append( "Starring " + movieObject.Actors );
				$('#plotHeading').append( "Plot" );
				$('#plot').append( movieObject.Plot );
				$('#poster').append( '<img src="' + movieObject.Poster + '">' );
	
			};
	  
	   };

	   request.send();
	});
});

