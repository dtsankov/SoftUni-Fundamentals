function processOddNumbers(arr){
    let result = []

    for (let index = 1; index < arr.length; index+=2) {
         result.push(arr[index]*2)
    }
    console.log(result.reverse('').join(' '));
}
processOddNumbers([10, 15, 20, 25])
processOddNumbers([3, 0, 10, 4, 7, 3])

