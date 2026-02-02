/* 
A function in Javascript is a set of statements that performs task or calculates a value
it should take some input and return some output where there is some obvious relationship between the input and the output
*/

function findSum(n) {
    let ans = 0;
    for (let i=0; i<=n; i++) {
        ans = ans + i;
    }
    return ans;
}

let ans = findSum(10);
console.log(ans); 

// Callback Functions - at a high level callback function means passing fuctions as an argument to another function
/*
function square(n) {
    return n*n;
}

function cube(n) {
    return n * n * n;
}

function sumOfSquares(a, b) {           // Same code repeaed
    const val1 = square(a);
    const val2 = square(b);
    return val1 + val2;
}

function sumOfCubes(a, b) {             // code repetation
    const val1 = cube(a);
    const val2 = cube(b);
    return val1 + val2;
}

console.log(sumOfCubes(2, 2));
// DRY is being violated
*/

// Solution - by using Callback function

function square(n) {
    return n * n;
}

function cube(n) {
    return n * n * n;
}

function sumOfSomething(a, b, fn) {
    const val1 = fn(a);
    const val2 = fn(b);
    return val1 + val2;
}

console.log(sumOfSomething(1, 2, square));
console.log(sumOfSomething(1, 2, cube));

//Anonymous Function - instead of passing the name of the function we can directly define the fuuntion in the argument
console.log(sumOfSomething(1, 2, function (n) {
    return n * n * n * n;
}))