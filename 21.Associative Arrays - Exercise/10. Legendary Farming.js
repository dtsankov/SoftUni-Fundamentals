function legendaryFarming(input){
let backpack = {
    fragments : 0,
    shards : 0,
    motes : 0,
}
let junk = {}

 let materialsObtained = input.split(' ').map(el => el.toLocaleLowerCase())
 
 for (let index = 1; index < materialsObtained.length; index+=2) {
     let count = Number(materialsObtained[index-1])
     let material = materialsObtained[index]
    
     if(backpack.hasOwnProperty(material)){
        let currQuantity = backpack[material]
        backpack[material] = currQuantity + count
     }else if(!junk.hasOwnProperty(material)){
        junk[material] = count
     }else{
        let currQuantity = junk[material]
        junk[material] = currQuantity + count
     }

     if(backpack['fragments'] >= 250){
        console.log('Valanyr obtained!');
        let currQuantity = backpack['fragments']
        backpack['fragments'] = currQuantity - 250
        break;
     }else if(backpack['motes'] >= 250){
        console.log('Dragonwrath obtained!');
        let currQuantity = backpack['motes']
        backpack['motes'] = currQuantity - 250
        break;
     }else if(backpack['shards'] >= 250){
        console.log('Shadowmourne obtained!');
        let currQuantity = backpack['shards']
        backpack['shards'] = currQuantity - 250
        break;
     }
    
 }
let sortedBackpack = Object.entries(backpack).sort((a,b) => b[1] - a[1] || a[0].localeCompare(b[0]))
let sortedJunk = Object.entries(junk).sort((a,b) => a[0].localeCompare(b[0]))
 for (const [material,count] of sortedBackpack) {
  console.log(`${material}: ${count}`);
}
for (const [material,count] of sortedJunk) {
    console.log(`${material}: ${count}`);
  }
}
legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards')
console.log('---');
legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver')