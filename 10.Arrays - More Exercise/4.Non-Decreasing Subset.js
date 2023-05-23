function solve(arr){
   let biggestNums = []
   let biggestNum = 0

   for (let index = 0; index < arr.length; index++) {
        let currNum = arr[index]

        if(currNum >= biggestNum){
            biggestNums.push(currNum)
            biggestNum = currNum
        }   
   }
   console.log(biggestNums.join(' '));
}
solve([ 1, 3, 8, 4, 10, 12, 3, 2, 24])
solve([ 1, 2, 3, 4])
solve([ 20, 3, 2, 15, 6, 1])