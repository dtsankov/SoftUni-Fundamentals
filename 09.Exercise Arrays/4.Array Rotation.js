function solve(arr,rotations){
    for (let index = 0; index < rotations; index++) {

        let currNum = arr.shift()


        arr.push(currNum)
        
    }
    console.log(arr.join(' '));
}
solve([51, 47, 32, 61, 21], 2)
console.log('---');
solve([32, 21, 61, 1], 4)
console.log('---');
solve([2, 4, 15, 31], 5)