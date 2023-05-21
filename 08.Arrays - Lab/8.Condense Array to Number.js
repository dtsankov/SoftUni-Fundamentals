function solve (arr){
   let condensed = []
   let isBiggerThanOne = true 
   for (let index = 0; index < arr.length; index++) {
    condensed.push(+arr[index])
   }
   if(condensed.length == 1){
    console.log(`${arr[0]} is already condensed to number`);
    isBiggerThanOne = false
   }else{
   while(condensed.length > 1){
       let temp = []

       for (let index = 0; index < condensed.length - 1; index++) {
            temp.push(condensed[index] + condensed[index+1])
           
       }

       condensed = temp
   }
}
if (isBiggerThanOne) {
   console.log(condensed.join(''));
    
}
}
solve([2,10,3])
solve([5,0,4,1,2])
solve([2])
