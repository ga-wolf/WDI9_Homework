function squareNumber(x) {
	var result = (x * x);
	console.log("The result of squaring the number " + x + " is " + result);
}


function halfNumber(x) {
	var result = (x / 2); 
	console.log("Half of " + x + " is " + result);
}

function percentOf(x, y) {
	var result = (x / y) * 100;
	console.log(x + " is " + result + "% of " + y + ".");
}

function areaOfCircle(r) {
	var result = Math.PI * r * r;
	var round = Math.round(result * 100) / 100;
    console.log("The area for a circle with radius " + r + " is " + round);
}

function funkyFunction(x) {
	var first = x / 2;
	var second = first * first;
	var third = Math.PI * second * second;
	var fourth = (1 /(third * third)) * 100;
	return fourth
}

function drEvil(x) {
	if (x < 1000000000) {
		return x;
	}
	else { 
		return (x + " pinky.");
	}	
}

var mixUp = function(st1, st2) {
	return st2.slice(0,2) + st1.slice(1) + " " + st1.slice(0,2) + st2.slice(1);
}

console.log("");
console.log("mix up");

consol.log(mixUp("wet", "dog"));


var fixStart = function(string) {
	firstChar = string.charAt(0);
	RegFirstChar = new RegExp (firstChar, '9');
	return firstChar = string.slice(1).replace(RegFirstChar, "*");
}

console.log("");
console.log("fix start");
console.log(fixStart("testingthisout"));

