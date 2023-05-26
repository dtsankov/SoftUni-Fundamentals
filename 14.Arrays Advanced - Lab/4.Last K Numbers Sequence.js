function lastKNumbersSequence(n,k){
 let arr = [1]

    for (let index = 0; index < n ; index++) {
        
        let result = arr.slice(-k)

        let sum = 0

        for (let elements of result) {
            sum+= elements 
        }
        arr.push(sum)
    }

    console.log(arr.join(' '));
}
lastKNumbersSequence(6, 3)