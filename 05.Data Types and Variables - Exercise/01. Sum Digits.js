function solve(num){
   num = num.toString()

   let sum = 0

   for (let index = 0; index < num.length; index++) {
        let currNum = num[index]
        sum+= +currNum
   }
   console.log(sum);
}
solve(245678)