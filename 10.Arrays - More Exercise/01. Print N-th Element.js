function solve(arr){
   let step = +arr[arr.length - 1]
   
   let newArr = []
   for (let index = 0; index < arr.length-1; index+=step) {
       newArr.push(arr[index])  
   }
   console.log(newArr.join(' '));
}
solve(['5', '20', '31', '4', '20', '2'])
solve(['dsa', 'asd', 'test', 'test', '2'])
solve(['1', '2', '3', '4', '5', '6'])