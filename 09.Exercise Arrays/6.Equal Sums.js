function solve(arr) {
   let hasEqualSum = false

     
     
        for (let index = 0; index < arr.length; index++) {

            let sumLeft = 0;
            let sumRigth = 0;

            for (let j = index - 1; j >= 0; j--) {
                 sumLeft+= arr[j]
                }
          
            for (let k = index + 1; k < arr.length; k++) {
                sumRigth+=arr[k]

            }
            if(sumLeft === sumRigth){
                console.log(index);
                hasEqualSum = true
            }
        }
        if (!hasEqualSum) {
            console.log('no');
        }
    
        }
        
    

solve([1, 2, 3, 3])
console.log('---');
solve([1, 2])
console.log('---');
solve([1])
console.log('---');
solve([1, 2, 3])
console.log('---');
solve([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])
