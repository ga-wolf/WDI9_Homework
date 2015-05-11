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

var button = document.getElementById('button');
var textField = document.getElementById('textField');
var response = document.getElementById('response');

var serge = function() {
    if (textField.value === '') {
        response.innerHTML = 'Fine. Be that way!';
    } else if (textField.value === (textField.value).toUpperCase()) {
        response.innerHTML = 'Woah, chill out!';
    } else if (textField.value.slice(textField.value.length-1) === '?') {
        response.innerHTML = 'Sure.';
    } else {
        response.innerHTML = 'Whatever.';
    }
};

button.addEventListener('click', serge);