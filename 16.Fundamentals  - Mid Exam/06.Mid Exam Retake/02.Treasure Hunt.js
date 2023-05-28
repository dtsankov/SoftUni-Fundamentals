function treasureHunt(array){
    let treasure = array.shift().split('|')

    while(array[0] !== 'Yohoho!'){
        let tokens = array.shift().split(' ')
        let command = tokens[0]
            
        switch (command) {

            case 'Loot':
                let arr = []
                for (let index = 1; index < tokens.length; index++) {
                    arr.push(tokens[index])
               }
                loot(arr)
                break;
                case 'Drop':
                drop(Number(tokens[1]))
                break;
                case 'Steal':
                steal(Number(tokens[1]))
                break;
        }
    }

    let treasureGain = 0

    for (let item of treasure) {
        treasureGain += item.length
    }

    if(treasure.length !== 0){
        console.log(`Average treasure gain: ${(treasureGain / treasure.length) .toFixed(2)} pirate credits.`);
    }else{
        console.log("Failed treasure hunt.");
    }
 function loot(array){
    for (let item of array) {
        if(!treasure.includes(item)){
            treasure.unshift(item)
        }
    }
 }
 function drop(index){
     if(index >= 0 && index <= treasure.length - 1){
        let currItem = treasure.splice(index,1)
        currItem = currItem.toString()
        treasure.push(currItem)
     }
 }
 function steal(count){
     let index = 0
     if(treasure.length - 1 - count > 0){
         index = treasure.length  - count
     }
     let removed = treasure.slice(index)
     treasure.splice(index,count)
     console.log(`${removed.join(', ')}`);
 }
}
treasureHunt(["Gold|Silver|Bronze|Medallion|Cup",
"Loot Wood Gold Coins",
"Loot Silver Pistol",
"Drop 3",
"Steal 3",
"Yohoho!"])

treasureHunt(["Diamonds|Silver|Shotgun|Gold",
"Loot Silver Medals Coal",
"Drop -1",
"Drop 1",
"Steal 6",
"Yohoho!"])

