function solve(num1,num2,num3){
  let sortedNums = [num1,num2,num3].sort()
  
 for (let index = 2; index >= 0; index--) {
      console.log(sortedNums[index]);
 }

  
}
solve(2,
    1,
    3)