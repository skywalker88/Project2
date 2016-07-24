/*0. Create a function which takes an integer as a parameter. That function should return the integer it takes in multiplied by five. 
Create another function which takes in an arbitrary function as a parameter, and prints the return value of that function for all values between zero through ten ;
    inclusive.
Create a program which counts up from 0, every 1 second. */

// Problem 0

console.log("\nSolution to Problem 0: ");

var functionThatMultipliesByFive = function (f) {
    for (var count = 0; count < 10; count++) {
        
        console.log(f(count) * 5);
    }
    
};

functionThatMultipliesByFive(function (x) {
    return x;
}, 0);

// setTimeout(function () { }, 50000);

// Problem 1

console.log("\nSolution to Problem 1: ");

var i = -1;

var interval = setInterval(increment, 1000);

function increment() {
    if (i < 10) {
        console.log(i = i % 9999999999 + 1);
    }
    else {
        setTimeout(function () { debugger; }, 2000);
    }
}
