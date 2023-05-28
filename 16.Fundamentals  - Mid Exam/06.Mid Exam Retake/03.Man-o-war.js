function manOwar(array){
   let pirateShip = array.shift().split('>').map(Number)
   let warShip = array.shift().split('>').map(Number)
   let maxHealthCapacity = Number(array.shift())
   let isSunk = false

   while(array[0] !== 'Retire'){
       let tokens = array.shift().split(' ')
       let command = tokens[0]

       switch(command){
           case'Fire':
             fire(+tokens[1],+tokens[2])
             if(isSunk){
                 console.log("You won! The enemy ship has sunken.");
                 break;
             }
           break;
           case'Defend':
           defend(+tokens[1],+tokens[2],+tokens[3])
             if (isSunk) {
                 console.log("You lost! The pirate ship has sunken.");
                 break;
             }
           break;
           case'Repair':
                repair(+tokens[1],+tokens[2])
           break;
           case'Status':
                status()
           break;

       }
   }
   if (!isSunk) {
    console.log(`Pirate ship status: ${pirateShip.reduce((a,b)=> a+b,0)}`);
    console.log(`Warship status: ${warShip.reduce((a,b)=> a+b,0)}`);

}
function fire(index,damage){
   if(index >= 0 && index <= warShip.length-1){
       if(warShip[index] - damage <= 0){
           isSunk = true
       }else{
           warShip[index]-=damage
       }
   }
}
function defend(startIndex,endIndex,damage){
    if(pirateShip.length-1 >= endIndex){
        for (let index = startIndex; index <=endIndex; index++) {
             pirateShip[index]-=damage
             if(pirateShip[index]<=0){
                 isSunk = true
             }
        }
    }
}
function repair(index,health){
    if(index <= pirateShip.length-1 && index >=0){
       if(pirateShip[index] + health > maxHealthCapacity){
           pirateShip[index] = maxHealthCapacity
       }else{
           pirateShip[index]+= health
       }
    }
}
function status(){
    let br = 0
    let currHealth = maxHealthCapacity * 0.20
    for (let sections of pirateShip) {
        if(sections < currHealth){
            br++
        }
    }
    console.log(`${br} sections need repair.`);
}
}
manOwar(["12>13>11>20>66",
"12>22>33>44>55>32>18",
"70",
"Fire 2 11",
"Fire 8 100",
"Defend 3 6 11",
"Defend 0 3 5",
"Repair 1 33",
"Status",
"Retire"])

console.log('---');

manOwar(["2>3>4>5>2",
"6>7>8>9>10>11",
"20",
"Status",
"Fire 2 3",
"Defend 0 4 11",
"Repair 3 18",
"Retire"])

