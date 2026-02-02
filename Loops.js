/* 
Dumb way - 
let ans = 1+2+3+4+5+6+7+8+9+10;
console.log(ans);
*/

//Better way - Using For Loop
let ans = 0;
for (let i=1; i<10; i++) {
    ans = ans + i;
}
console.log(ans);