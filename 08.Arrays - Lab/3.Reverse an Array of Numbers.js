function solve(num,arr){
let temp = []

for (let index = num-1; index >= 0; index--) {
    
    temp.push(arr[index])
}

console.log(temp.join(' '));
}
solve(3, [10, 20, 30, 40, 50])
solve(4, [-1, 20, 99, 5])
solve(2, [66, 43, 75, 89, 47])
