function solve(arr1,arr2){
   let arr3 = []

   for (let index = 0; index < arr1.length; index++) {
       if (index % 2 == 0) {
           arr3.push(+arr1[index] + +arr2[index])
       }else{
           arr3.push(arr1[index] + arr2[index])
       }
       
   }
   console.log(arr3.join(' - '));
}
solve(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']
)
console.log('---');
solve(['13', '12312', '5', '77', '4'],
['22', '333', '5', '122', '44']
)