console.log('hello world');


function libIt() {
  var storyDiv = document.getElementById("story");
  var person = document.getElementById("person").value;
  var adjective = document.getElementById("adjective").value;
  var noun = document.getElementById("noun").value;
  storyDiv.innerHTML = person + " married a " + adjective + " " + noun + "... So weird!";
}

var libButton = document.getElementById('lib-button');
libButton.addEventListener('click', libIt);