var nucleotides = function(str) {
  var a = 0;
  var c = 0;
  var g = 0;
  var t = 0;
  var u = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] === 'a') {
      a += 1;
    }
  }
  for (var x = 0; x < str.length; x++) {
    if (str[x] === 'c') {
      c += 1;
    }
  }
  for (var y = 0; y < str.length; y++) {
    if (str[y] === 'g') {
      g += 1;
    }
  }
  for (var m = 0; m < str.length; m++) {
    if (str[m] === 't') {
      t += 1;
    }
  }
  for (var n = 0; n < str.length; n++) {
    if (str[n] === 'u') {
      u += 1;
    }
  }
  if (a + c + g + t + u === 0) {
    return 'There are no nucleotides here.';
  }
  console.log('There are ' + a + ' A nucleotides.');
  console.log('There are ' + c + ' C nucleotides.');
  console.log('There are ' + g + ' G nucleotides.');
  console.log('There are ' + t + ' T nucleotides.');
  console.log('There are ' + u + ' U nucleotides.');
  console.log('In total, there are ' + (a + c + g + t + u) + ' nucleotides.');
}























