//indexOf and lastIndexOf
function findIndexOf(str, target) {
    console.log("Original string : " + str);
    console.log("Index :", str.indexOf(target));
    console.log("Index of last word: ", str.lastIndexOf(target));
}

findIndexOf("Hello World World World", "World");

const value = "bhushan singh";

//Slice
function getSlice(str, start, end) {
    console.log("Original string : " + str);
    console.log("After slice: ", str.slice(start, end));
}
getSlice(value, 0, 7);


function cutIt(str, startIndex, endIndex) {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        if (i >= startIndex && i < endIndex) {
            newStr = newStr + str[i];
        }
    }
    return newStr;
}
console.log(cutIt(value, 0, 7));

//replace
const str = "Hello world";
console.log(str.replace("world", "javascript"));

//Split
const message = "hi my name is lunar";
const words = message.split(" ");
console.log(words);

//trim
const val = "    bhushan singh    ";
console.log(val.trim());

//toUpperCase and toLowerCase
console.log(val.toUpperCase());
console.log(val.toLowerCase());

