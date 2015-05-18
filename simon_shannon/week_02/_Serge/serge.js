var button = document.getElementById('button');
var capital = youSay.toUpperCase;

var onClick = function(event) {
    var youSay = document.getElementById("youSay").value;
      if (youSay.slice(-1) === "?") {
        alert("sure");
      }
      else if (youSay === capital) {
        alert("Whah, chill out");
      }
      else if (youSay.length === 0) {
        alert("Fine, be that way");
      }
      else {
        alert("whatever");
      }
};

button.addEventListener('click', onClick);



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