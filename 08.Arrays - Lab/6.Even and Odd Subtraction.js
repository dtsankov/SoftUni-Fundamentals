function solve(arr){
let sumEven = 0 
let sumOdd = 0

for (let index = 0; index < arr.length; index++) {
    arr[index] = +arr[index]
}

for (const num of arr) {
    if(num % 2 == 0 ){
        sumEven+=num
    }else{
        sumOdd+=num
    }
}
console.log(sumEven - sumOdd);
}
solve([1,2,3,4,5,6])
solve([3,5,7,9])
solve([2,4,6,8,10])
