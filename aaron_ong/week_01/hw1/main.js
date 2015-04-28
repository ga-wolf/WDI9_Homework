var greaterNum = function (num1, num2) {
	if (num1 > num2){
		return num1;
	}
	else {
		return num2;
	}
}

console.log( greaterNum(5, 10) );
console.log( greaterNum(25, 4) );

var helloWorld = function(lang) {
	if (lang === "de"){
		return "Hallo Wereld";
	}
	else if (lang === "es"){
		return "Hola Mundo";
	}
	else if (lang === "fr"){
		return "Bounjour le Monde";
	}
	else {
		return "Hello World";
	}
}
console.log( helloWorld('du') );
console.log( helloWorld('fr') );
console.log( helloWorld('es') );
console.log( helloWorld() );

var assignGrade = function(score) {
	if (score > 100 | score < 0){
		return "invalid score";
	}
	else if (score >= 75){
		return "A";
	}
	else if (score >= 60){
		return "B";
	}
	else if (score >= 50){
		return "C";
	}
	else if (score >= 40){
		return "D";
	}
	else {
		return "F";
	}
}
console.log( "Your score is 45, your grade is " + assignGrade(45) );
console.log( "Your score is 25, your grade is " + assignGrade(25) );
console.log( "Your score is 105, your grade is " + assignGrade(105) );
console.log( "Your score is 89, your grade is " +  assignGrade(89) );

var pluralize = function(noun, number) {
	var snoun = noun.toLowerCase();
	if (snoun === "sheep" && number > 1) {;
	}
	else if (snoun === "goose" && number > 1) {
		noun = "geese";
	}
	else if (number > 1) {
		noun += "s";
	}
	return number + " " + noun;
}

console.log( pluralize('goose', 3) );
console.log( pluralize('sheep', 4) );
console.log( pluralize('dog', 2) );
console.log( pluralize('camel', 1) );