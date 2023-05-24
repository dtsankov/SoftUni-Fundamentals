function factorialDivision(num1,num2){
     function factorielCalculator(number){
         let result = 1

         while(number != 1){
             result*=number
             number-=1
         }
         return result
     }
    console.log( 
    (factorielCalculator(num1)/
    factorielCalculator(num2))
    .toFixed(2)
    )

}
factorialDivision(5,2)
factorialDivision(6,2)