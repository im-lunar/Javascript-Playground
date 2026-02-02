/*
console.log("hello world");

// Variables (let, var, const)

var a = 1;
console.log(a);

let firstName = "Bhushan";
let age = 20;
let isMarried = false;

console.log("This person's name is " + firstName + " and their age is " +age);

// if-else

if (isMarried == true){
    console.log(firstName + " is Married")
}else{
    console.log(firstName + " is NOT married")
}

// Loops

let answer = 0;

for (let i=0; i<=10; i++){
    answer = answer + i;
}
console.log(answer);


// Arrays 

const ages = [21, 22, 23, 24, 25];
const numberOfPeople = ages.length;

for (let i=0; i<= numberOfPeople; i++){
    if (ages[i] % 2 == 0) {
            console.log(ages[i]);
    }
}

// Write the program to print the biggest number in the array

// Write a program that prints all the male people's first name given a complex object
const person1 = "yuvan";
const gender1 = "male";

const person2 = "dhananjay";
const gender2 = "male";

const personArray = ["yuvan", "dhananjay", "seerat"];
const genderArray = ["male", "male", "female"];

for (let i = 0; i <= personArray.length; i++){
    if (genderArray[i] == "male"){
        console.log(personArray[i]);
    } 
}

//Objects in JS

const user1 = {
    fName: "vayu",
    gender: "male"
}

// Array of Objects-->

const allUsers = [{
    fName: "Vayu",
    gender: "male"
}, {
    fName: "Mrigtrishna",
    gender: "female"
}, {
    fName: "Chetak",
    gender: "male"
}]

for (let i = 0; i < allUsers.length; i++) {
    if (allUsers[i] ["gender"] == "female") {
        console.log(allUsers[i] ["fName"]);
    }
}

// Write a program to reverse all the elements of an array

//Function in JS

function sum(a, b){
    //do things with the input and returns the output
    return a+b;
}

// calling a function
const value = sum(1,2)
console.log(value);
*/

// Functions CAN take other functions as input-this will confuse you (callbacks)

function sum(num1, num2, fnToCall) {
    let result = num1 + num2;
    fnToCall(result);
    // displayResult(result);
}

function displayResult(data) {
    console.log("Result of the sum is : " + data);
}

function displayResultPassive(data) {
    console.log("Sum's result is : " + data);
}

// You are only allowed to call me one function after this
//How will you displayResult of a sum
const ans = sum(10, 15, displayResult);
//callbacks
