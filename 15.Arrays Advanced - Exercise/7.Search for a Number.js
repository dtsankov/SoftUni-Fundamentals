function searchNumber(arr1,arr2){
let sequenceNumber = arr2[0]
let deleteLength = arr2[1]
let searchedNumber = arr2[2]

let modifedArr = arr1.splice(0,sequenceNumber)
modifedArr = modifedArr.slice(deleteLength)
   let br = 0

   for (const num of modifedArr) {
       if(num === searchedNumber){
           br++
       }
   }
   console.log(`Number ${searchedNumber} occurs ${br} times.`);
}
searchNumber([5, 2, 3, 4, 1, 6],[5, 2, 3])
searchNumber([7, 1, 5, 8, 2, 7],[3, 1, 5])