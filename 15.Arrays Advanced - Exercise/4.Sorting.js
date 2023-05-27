function sorting(arr){
  let sortedArr = arr.sort((a,b) => b - a)
  let br = 1
 
      for (let index = 0; index < sortedArr.length / 2; index++) {
            let tokenNum = sortedArr.pop()
            sortedArr.splice(index+br,0,tokenNum)
            br++
      }

      console.log(sortedArr.join(' '));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47])