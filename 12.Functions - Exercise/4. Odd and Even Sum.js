function oddAndEvenSum(num) {
    let arr = num.toString().split('')
    let sumOdd = 0
    let sumEven = 0

    for (let index = 0; index < arr.length; index++) {
        if(arr[index] % 2 == 0){
            sumEven+= +arr[index]
        }else{
            sumOdd+=+arr[index]
        } 
    }
    return `Odd sum = ${sumOdd}, Even sum = ${sumEven}`
}
console.log(oddAndEvenSum(1000435))