function solve(arr){
 
let sum = 0
for (let i = 0; i < arr.length; i++) {
    arr[i] = +arr[i]
}

for (const num of arr) {
    if (num % 2 == 0 ){
        sum+=num
    }
}
console.log(sum);
}
solve(['1','2','3','4','5','6'])
solve(['3','5','7','9'])
solve(['2','4','6','8','10'])