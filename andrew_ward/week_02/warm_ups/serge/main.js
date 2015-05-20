  var sergeFn = function(str) {
    var length = str.length - 1;
    var upper = str.toUpperCase();
    if (str[length] === '?') {
      var math = Math.random();
      if (math < 0.2) {
        alert('You are a noob.');
      } else if (math < 0.4) {
        alert("Yes, that is correct.");
      } else if (math < 0.6) {
        alert('Nup');
      } else if (math < 0.8) {
        alert('Please ask once more...');
      } else {
        alert('CSS SUCKS M8');
      }
      // alert('Sure.');
    } else if (str === '') {
      alert('Fine, be that way!');
    } else if (str === upper) {
      alert('Woah, chill out!');
    } else {
      alert('Whatever.');
    }
  }

  var button = document.getElementsByTagName('button')[0];
  var input = document.getElementsByTagName('input')[0];

  var sergeResponse = function() {
    sergeFn(input.value);
    input.value = '';
  };
  button.addEventListener('click', sergeResponse);
