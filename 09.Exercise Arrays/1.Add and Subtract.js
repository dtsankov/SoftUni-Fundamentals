function solve(arr){
   let modifiedArr = []
   let sum1 = 0
   let sum2 = 0
  for (let index = 0; index < arr.length; index++) {
         if(arr[index] % 2 == 0){
           modifiedArr.push(arr[index]+index)
         }else{
            modifiedArr.push(arr[index]-index)

         }
  }
  for (const num of arr) {
      sum1+= +num
  }
  for (const num of modifiedArr) {
    sum2+= +num
      
  }
  console.log(modifiedArr);
  console.log(sum1);
  console.log(sum2);


}
solve([5, 15, 23, 56, 35])
solve([-5, 11, 3, 0, 2])