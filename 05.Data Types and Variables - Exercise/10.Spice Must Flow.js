function solve(yield){
    let day = 0
    let spices = 0
  while(yield >= 100){
       day++
       spices+=yield - 26 
       yield-=10
  }
  spices-=26
  console.log(day);
  console.log(spices);

}
solve(450)