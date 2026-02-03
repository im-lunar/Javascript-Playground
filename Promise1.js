// What even is a Promise?
// It is just the class that makes callbacks and async functions slightly more readable
// Whenever you create it, you need to pass in a function as the first argument which has resolve as the first argument

// a promise has 3 states => pending, resolved, rejected

var d = new Promise(function(onDone) {
    setTimeout(function () {
        onDone("shhh");
     }, 1000)
});

function callback() {
    console.log(d);
}

console.log(d);
d.then(callback);   // .then() gets called whenever the async function resolves