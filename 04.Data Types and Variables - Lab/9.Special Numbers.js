function solve(num){
 
    for (let i = 1; i <= num; i++) {
         
       let currNum = i.toString()

       
       let sum = 0   
       for (let j = 0; j < currNum.length; j++) {
       
        sum+= +currNum[j]
       }
        if(sum === 5 || sum === 7 || sum === 11 ){
            console.log(`${i} -> True`);
        }else{
            console.log(`${i} -> False`);

        }      
        
    }
}
solve(15)