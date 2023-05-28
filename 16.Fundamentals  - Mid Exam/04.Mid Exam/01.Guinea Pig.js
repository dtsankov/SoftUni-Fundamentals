function guineaPig(array){
    let food = Number(array.shift())  
    let hay = Number(array.shift())  
    let cover = Number(array.shift())  
    let guineaPigWeight = Number(array.shift())  

    let day = 0

    for (let index = 0; index < 30; index++) {
        day++
         if(food == 0 || hay == 0 || cover ==0){
             console.log('Merry must go to the pet store!');
             break;
         }else{
             food-=(300 /1000)
             if (day % 2 == 0) {
                   hay-= food * 0.05
             }
             if (day % 3 == 0) {
                 cover-= 1/3 * (guineaPigWeight)
             }  
         }
        
    }

console.log(`Everything is fine! Puppy is happy! Food: ${food.toFixed(2)}, Hay: ${hay.toFixed(2)}, Cover: ${cover.toFixed(2)}.`);
}
guineaPig((["10", 
"5", 
"5.2", 
"1"])
)