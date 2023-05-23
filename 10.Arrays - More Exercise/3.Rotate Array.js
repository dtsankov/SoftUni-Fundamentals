function solve(arr){
let rotations = +arr.pop()
let index = 0
 
while(index < rotations){
     let lastNum = arr.pop()
     arr.unshift(lastNum)
     index++
}
console.log(arr.join(' '));
}
solve(['1', '2', '3', '4', '2'])
solve(['Banana', 'Orange', 'Coconut', 'Apple', '15'])