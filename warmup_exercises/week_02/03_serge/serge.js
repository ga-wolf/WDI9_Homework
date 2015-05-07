var Serge = {
  isSilent: function ( message ) {
    if ( message === "" ) {
      return true;
    }
  },
  isShouting: function ( message ) {
    if ( message === message.toUpperCase() ) {
      return true;
    }
  },
  isAQuestion: function ( message ) {
    if ( message[ message.length - 1 ] === "?" ) {
      return true;
    }
  },
  respond: function () {
    var message = document.getElementById( "message" ).value;
    var responseDiv = document.getElementById( "response" );

    if ( Serge.isAQuestion( message ) ) {
      responseDiv.innerHTML = "Sure";
    } else if ( Serge.isSilent( message ) ) {
      responseDiv.innerHTML = "Fine, be that way.";
    } else if ( Serge.isShouting( message ) ) {
      responseDiv.innerHTML = "Woah. Chill out!";
    }  else {
      responseDiv.innerHTML = "Whatevs";
    }
  }
}

var button = document.getElementById( "speak-to-serge" );
button.addEventListener( "click", Serge.respond );