function greetSean(){
    console.log("hello sean");
}

// greetSomeone()

function greetSomeone(name){
    console.log("hello " + name);
}

// greetSomeone("Colin");
// greetSomeone("Lazzaro");
// greetSomeone("Robby");
// greetSomeone("kennedy");

var x = 5;
    
function setX(newValue) {
    x = newValue; 
}
    
// console.log(x);
// setX(15);
// console.log(x);

function addNums(num1, num2){
    console.log(num1+num2);
    return num1 + num2;
}

// let newNum = addNums(5,2) + 100;

// console.log(newNum);

// the value of a function call is whatever that function call returns

function isPal(arr) {
    for(var left=0; left<arr.length/2; left++) {
        var right = arr.length-1-left;
        if(arr[left] != arr[right]) {
            return "Not a pal-indrome!";
        }
    }
    return "Pal-indrome!";
}
    
var result1 = isPal( [1, 1, 2, 2, 1] );
console.log(result1);
    
var result2 = isPal( [3, 2, 1, 1, 2, 3] );
console.log(result2);/