var isRectangle = function(length, width) {
  if (length !== width) {
    console.log("This is a rectangle");
    console.log("It has an area of " + (length * width));
    console.log("It has a perimeter of " + 
         (2 * (length + width )) );
  }
  else {
    console.log("This is a square");  
  } 
  };
 
 isRectangle(4, 4);



var findTri = function(s1, s2, s3) {
    if (s1 === s2 && s1 === s3) {
        return "equalateral triangle";
    }
    if (s1 === s2 || s1 === s3 || s2 === s3) {
        return "isosceles triangle";
    }
    if (s1 !== s2 && s2 !== s3 && s3 !== s1) {
        return "obtuse triangle";
    }
}



findTri(1,1,1)

var bank = [
    {acc1: "billgates",
     money: 1000
    },
    {acc2: "Jorje",
     money: 1001
    },
    {acc3: "Simon",
     money: 35
    },
];


var addAccount = function(x, y, z) {  //formula to add account
    var newAccount = (acc(x): (y), money: (z));
    bank.push("newAccount");
}

var returnCash = 0; //formula to add all money in bank together

for (var x = 0; x < bank.length; x++); {
    var returnCash = (returnCash + bank.money[x]);
    console.log(returnCash);
}

bank.money[2] // bank balance

var x = account;  //deposit/withdrawal money formula
var y = depositAmount;
var z = withdrawalAmount;

var addMoney = function(x, y); {
    var  moreMoney = bank.money[x] + y;
    bank.money[x] = "moreMoney";
}

var takeMoney = function(x, z); {
    var lessMoney = bank.money[x] - z;
    bank.money[x] = "lessMoney";
}