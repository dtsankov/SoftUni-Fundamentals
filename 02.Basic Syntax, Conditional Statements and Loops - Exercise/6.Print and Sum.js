function solve(num1,num2){

    let result =0;

    let nums = "";

for (let index = num1; index <= num2; index++) {
     
    nums+= index + " "
    result+=index
}
console.log(nums);
console.log(`Sum: ${result}`);
}
solve(5, 10)
solve(0, 26)
solve(50, 60)
