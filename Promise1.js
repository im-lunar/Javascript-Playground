// What even is a Promise?
// It is just the class that makes callbacks and async functions slightly more readable


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
d.then(callback);