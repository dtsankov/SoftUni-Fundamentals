function blackFlag(array){
let days = Number(array.shift())
let dailyPlunder = Number(array.shift())
let expectedPlunder = Number(array.shift())

let result = 0;

for (let index = 1; index <=days; index++) {
     if(index % 3 == 0){
       result+= (dailyPlunder * 1.50)
     }else if(index % 5 == 0){
         result+= dailyPlunder
         result *= 0.70
     }else{
         result+=dailyPlunder
     }
}
if(result >= expectedPlunder){
    console.log(`Ahoy! ${result.toFixed(2)} plunder gained.`);
}else{
    console.log(`Collected only ${((result/expectedPlunder) * 100).toFixed(2)}% of the plunder.`);
}
}
blackFlag(["5",
"40",
"100"])

blackFlag((["10",
"20",
"380"])
)