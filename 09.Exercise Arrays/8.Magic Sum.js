function solve(arr,num){
    let sum = 0

    for (let index = 0; index < arr.length; index++) {
         
        for (let j = index; j < arr.length; j++) {
             if(+arr[index] + +arr[j+1] === num){
                 console.log(arr[index],arr[j+1]);
             }
            
        }
    }
}
solve([1, 7, 6, 2, 19, 23],
    8
    )
console.log('---');
solve([14, 20, 60, 13, 7, 19, 8],
    27
    )
console.log('---');
solve([1, 2, 3, 4, 5, 6],
    6
    )
