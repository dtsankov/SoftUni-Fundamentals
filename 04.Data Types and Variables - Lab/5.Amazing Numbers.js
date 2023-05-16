function solve(num){

let numToStr = num.toString().split('').join('')

let sum = 0 

for (let index = 0; index < numToStr.length; index++) {
     let currNum = +numToStr[index]
     sum+=currNum
}
   
 let result = sum.toString().includes('9');
 console.log(result ? `${num} Amazing? True` : `${num} Amazing? False` );
   
}
solve(1233)