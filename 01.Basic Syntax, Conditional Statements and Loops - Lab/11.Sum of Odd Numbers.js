function solve(n){
let sum = 0
let br = 0
 for (let index = 1; br < n; index+=2) {
     
    console.log(index);
    br++
    sum+=index
 }
 console.log(`Sum: ${sum}`);
}
solve(3)