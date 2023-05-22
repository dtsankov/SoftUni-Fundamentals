function solve(arr) {
    let temp = []

    for (let index = 0; index < arr.length; index++) {
        let currNum = arr[index]

        let isTopInteger = true 

        for (let j = index + 1; j < arr.length; j++) {
        let nextElement = arr[j]
        if(currNum <= nextElement){
            isTopInteger = false
            break
        } 
        }
        if(isTopInteger){
            temp.push(currNum)
        }
    }
    console.log(temp.join(' '));

}
solve([1, 4, 3, 2])
console.log("---");
solve([14, 24, 3, 19, 15, 17])
console.log("---");
solve([41, 41, 34, 20])
console.log("---");
solve([27, 19, 42, 2, 13, 45, 48])



