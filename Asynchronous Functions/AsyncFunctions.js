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

// setTimeout is an pre-defined asynchronous function of Javascript
setTimeout(findSumTill100, 1000);   // calls the findSumTill100() after waiting for 1000ms = 1sec
console.log("hello world");     //get printed on the terminal before the findSumTill100() gets called

//What are common async functions?
// setTimeout
// fs.readFile - to read file from your File System
// Fetch - to fetch some data from an API endpoint