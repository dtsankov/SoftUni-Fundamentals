function solve(arr){
 

for (let index = 0; index < arr.length / 2 ; index++) {
    let k = arr.length - 1 - index
    let temp = arr[index]
    arr[index] = arr[k] 
    arr[k] = temp
}
console.log(arr.join(' '));
}
solve(['a', 'b', 'c', 'd', 'e'])
solve(['abc', 'def', 'hig', 'klm', 'nop'])
solve(['33', '123', '0', 'dd'])

