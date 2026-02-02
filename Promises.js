/*
Promises are syntactical sugar that make this code slightly more readable
this code is ugly ->
function findSum(n) {
    let ans = 0;
    for (let i=0; i<n; i++) {
        ans += i;
    }
    return ans;
}

function findSumTill100() {
    console.log(findSum(100));
}

setTimeout(findSumTill100, 1000);  
console.log("hello world"); 
*/

// Until now we've oly used other people's asynchronous functions
// How can we create an asynchronous function of our own?
/*
const fs = require('fs');

// my own asynchronous function
// it is just a wrapper on top of another async function, which is fine. Usually all async functions you'll write will be on top of JS provided async functions like setTimeout or fs.readFile
function kiratsReadFile(cb) {
    fs.readFile("a.txt", "utf-8", function(err, data) {
        cb(data);
    });
}

// callback functiom to call
function onDone(data) {
    console,log(data)
}

kiratsReadFile(onDone) */

// Cleaner way (using Promises)
// const fs = require('fs');

// function kiratsReadFile() {
//     return new Promise(function(resolve) {
//         fs.readFile("a.txt", "utf-8", function(err, data) {
//             resolve(data)
//         });
//     })
// }

// // callback function to call
// function onDone(data) {
//     console.log(data);
// }

// kiratsReadFile().then(onDone);

function kiratsReadFile() {
    return new Promise(function(resolve) {
        fs.readFile("a.txt", "utf-8", function(err, data) {
            resolve(data);
        });
    })
}

function onDone(data) {
    console.log(data)
}

kiratsReadFile().then(onDone);

// What even is a Promise?
// It is just the class that makes callbacks and async functions slightly more readable


// a promise has 3 states => pending, resolved, rejected
