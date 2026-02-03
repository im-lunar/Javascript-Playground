//Normal Syntax
/*
function kiratsAsyncFunction() {
    let p = new Promise(function(resolve) {
        // do some async logic here
        resolve("hi there!")
    });
    return p;
}  

function main() {
    kiratsAsyncFunction().then(function(value) {
        console.log(value);
    });
}

main();
*/

// Async/await syntax- it is again a syntactical sugar, still uses callbacks/Promises under the hood.
//  Makes code much more readable than callbacks/Promises.
// Usually used on the caller side, not on the side where you define an async funtion
function kiratsAsyncFunction() {
    let p = new Promise(function(resolve) {
        resolve("hi there!")
    });
    return p;
}

async function main() {     // any function that wants to use await, needs to be async
    // no callbacks, no .then() syntax
    const value = await kiratsAsyncFunction();      // rather than using the .then syntax, we add await before and get the final value in variable
    console.log(value);
}

main();