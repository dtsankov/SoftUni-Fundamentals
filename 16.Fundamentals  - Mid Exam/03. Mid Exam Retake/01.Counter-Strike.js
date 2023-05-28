function counterStrike(array){
    let energy = Number(array.shift())
    let battleBr = 0

     while(array[0] !== 'End of battle'){
         let tokens = Number(array.shift())

         if(energy >= tokens){
             energy-=tokens
             battleBr++
             if(battleBr % 3 == 0){
                 energy+= battleBr
             }
         }else{
             console.log(`Not enough energy! Game ends with ${battleBr} won battles and ${energy} energy`);
             break
         }
     } 
     console.log(`Won battles: ${battleBr}. Energy left: ${energy}`);
     
}
counterStrike(["100",
"10",
"10",
"10",
"1",
"2",
"3",
"73",
"10"])

counterStrike((["200",
"54",
"14",
"28",
"13",
"End of battle"])
)
