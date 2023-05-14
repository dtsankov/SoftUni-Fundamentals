function sovle(num1,num2){

  if(num2 > 15) num2= 15
  let result = num1.toFixed(num2) 
  console.log(parseFloat(result));
}
sovle(3.1415926535897932384626433832795,16)