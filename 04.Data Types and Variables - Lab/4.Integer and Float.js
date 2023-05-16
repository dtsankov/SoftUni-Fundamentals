function solve(num,num1,num2){
let sum = num + num1 + num2

sum % 1 === 0 ? sum+=' - Integer' : sum+=' - Float'

console.log(sum);
 
}
solve(9, 100, 1.1)