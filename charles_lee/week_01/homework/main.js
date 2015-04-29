function squareNumber(number){
	squarenum = number*number;
	console.log("the result of squaring the number " + number + " is "+ squarenum);
	return squarenum;
}

function halfNumber(number){
	halfnum = number/2
	console.log("Half of " + number + " is "+ halfnum);
	return halfnum;
}

function percentOf(a, b){
	percentage = b/a*100;
	console.log(a + " is " + percentage + " of " + b);
	return percentage;
}

function areaOfCircle(radius){
	area = Math.PI*(radius*radius);
	console.log("The area for a circle with radius" + radius.toFixed(2) + " is " + area.toFixed(2));
	return area.toFixed(2);
}

function grandMaster(number){
	var part1 = halfNumber(number);
	var part2 = squareNumber(part1);
	var part3 = areaOfCircle(part2);
	var part4 = percentOf(part3, part2)
	console.log(part4);
	return part4;
}

grandMaster(2);

function drEvil(num){
	if(num===1000000){
		console.log(num + " dollars (pinky)");
	}else{
		console.log(num + " dollars");
	}
}

function MixUp(str1, str2){
	var str1P1 = str1.slice(0,1);
	var str1P2 = str1.substr(1);
	var str2P1 = str2.slice(0,1);
	var str2P2 = str2.substr(1);
	console.log(str2P2);
	var str1New = str1P1 + str2P2;
	var str2New = str2P1 + str1P2
	console.log(str1New +" "+str2New);
}


MixUp("peace","love");

function fixStart(str){

	var strFirst = str.slice(0,1);
	var strFirstR = new RegExp(strFirst,"g")
	var strNew = str.replace(strFirstR,"*");
	var str = strNew.replace("*",strFirst);
	console.log(str);
}
fixStart("horhe");

function verbing(str){
	if(str.length >=3){
		if(str.endsWith("ing")){
			str = str+"ly";
			console.log(str);
		}
		else{
			str = str+"ing";
			console.log(str);
		}
	}
	else{
		console.log(str);
	}
}
verbing("hell");
verbing("helling");

function notBad(str){
	if(str.indexOf("not") && str.indexOf("bad")){
		if(str.indexOf("not")<str.indexOf("bad")){
			notPos=str.indexOf("not");
			newStr = str.replace(/bad/g,"good");
			newStr2 = newStr.replace(/not /g,"")
			console.log(newStr2);
		}else{
			console.log(str);
		}
	}else{
		console.log(str);
	}
}

notBad("This class is not bad");