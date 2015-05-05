// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

var maxOfTwoNumbers = function(num1,num2){
	
	if(num1 === num2){
		
		console.log(num1 + " and " + num2 + " are equal ");
	
	}else if(num1 > num2){
		
		console.log(num1+ " is bigger than " + num2);
	
	}else {
		
		console.log(num2+ " is bigger than " + num1);
	}
}


var maxOfThree = function(num1,num2,num3){

	if(num1 > num2 && num1 > num3 ){
		
		console.log(num1+ " is bigger than " + num2 + " and " + num3);
	
	} else if( num2 > num1 && num2 > num3 ) {
		
		console.log(num2+ " is bigger than " + num1 + " and " + num1);
	
	}else if(num3 > num1 || num3 > num2){
		
		console.log(num3+ " is bigger than " + num1  +" and " + num2);
	
	}else if(num1 === num2 && num1 !== num3){

		console.log(num1 + " and " + num2 + " are equal ");
	
	}else if(num1 === num3 && num1 !== num2) {

		console.log(num1 + " and " + num3 + " are equal ");
	
	}else if (num2 === num3 && num3 !== num1){

		console.log(num2 + " and " + num3 + " are equal ");
	
	}else {

		console.log("All the Numbers are equal");
	
	}
		

}

// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

maxOfThree(1,1,1);
maxOfTwoNumbers(10,5);