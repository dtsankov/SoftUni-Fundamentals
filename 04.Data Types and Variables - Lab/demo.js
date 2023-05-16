function petsFood(input) {
    let days = Number(input[0]);
    let totalFood = Number(input[1])
    let catsFood = 0;
    let dogsFood = 0;
    let biscuits = 0;
    

for (let index = 2; index <= days; index++) {
     
    if(index % 2 == 0){
        dogsFood+= +input[index]
    }else{
        catsFood+= +input[index]
    }
     
   
     
     
    if (index + 2 % 3 === 0) {
        biscuits += +(+input[index + +input[index+1]] ) * 0.1
    }
 days++
}
let totalFoodEaten = dogsFood + catsFood;
console.log(`Total eaten biscuits: ${Math.abs(biscuits)}gr.`);
console.log(`${((totalFoodEaten / totalFood) * 100).toFixed(2)}% of the food has been eaten.`);
console.log(`${(( dogsFood / totalFoodEaten) * 100).toFixed(2)}% eaten from the dog.`);
console.log(`${(( catsFood / totalFoodEaten) * 100).toFixed(2)}% eaten from the cat.`);
}

petsFood(["3",
    "1000",
    "300",
    "20",
    "100",
    "30",
    "110",
    "40"])