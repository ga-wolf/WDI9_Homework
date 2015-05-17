// Serge Responds

// Serge answers 'Sure.' if you ask him a question.

// He answers 'Woah, chill out!' if you yell at him (ALL CAPS).

// He says 'Fine. Be that way!' if you address him without actually saying anything.

// He answers 'Whatever.' to anything else.

// What do you need to do?

// Make an HTML file with an input field and a button
// Write the javascript file that adds an event handler to the button and retrieves the details from the input field
// Figure out the appropriate response (from the above conditions)

// If you are flying through it, go and make something cool with the styling



var button = document.getElementById('serge');

// var talkToSarge = document.getElementById('talkToSarge').value;


sargeTalks = function(){
  var talkToSarge = document.getElementById('talkToSarge').value;
  if(talkToSarge === "" ){
    console.log('Fine be that way.')
  }
  if(talkToSarge === talkToSarge.toUpperCase)
}

button.addEventListener('click', sargeTalks)


var Serge = {

  isSilent: function(message){
    console.log('is silent called')
    if(message === ""){
      return true;
    }
  }
  isShouting: function(message){
    if (message === message.toUpperCase())
      return true;
  }
  isAQuestion: function(message){
    if(message [message.length - 1] === "?"){
      return true;
    }
  }
  respond: function(){
    console.log("Respond is called")
    var responseDiv = document.getElementById("response")
    var message = documents.getElementById("message").value
    console.log("message:" + message)

    console.log(Serge.isSilent( message ) );
    console.log(Serge.isAQuestion( message ) );
    console.log(Serge.isShouting( message ) );
    console.log(Serge.isSilent( message ) );
  }


}

