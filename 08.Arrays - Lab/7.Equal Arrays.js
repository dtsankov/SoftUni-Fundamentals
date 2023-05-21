function solve(arr1,arr2){
     for (let i = 0; i < arr1.length; i++) {
        arr1[i] = +arr1[i];
         
     }

     for (let k = 0; k < arr2.length; k++) {
         arr2[k] = +arr2[k];
         
     }
let areEqueal = true
     for (let j = 0; j < arr1.length; j++) {
          if(arr1[j] != arr2[j]){
              console.log(`Arrays are not identical. Found difference at ${j} index`);
              areEqueal = false
              break
          }
         
     }

     
     if (areEqueal) {
         let sum = 0 
         for (let  num of arr1) {
             sum+=num
         }
         console.log(`Arrays are identical. Sum: ${sum}`);
     }
}
solve(['10','20','30'], ['10','20','30'])
solve(['1','2','3','4','5'], ['1','2','4','4','5'])
solve(['1'], ['10'])
