function gladiatorInventory(array){
  
    let inventory = array.shift().split(' ')
   
    
   for (let index = 0; index < array.length; index++) {
       let token = array[index].split(' ')
       let command = token[0]
       
       switch (command) {
          case 'Buy':
             buy(token[1])
             break;
             case 'Trash':
             trash(token[1])
               break; 
                case 'Repair':
             repair(token[1])
               break; 
                case 'Upgrade':
                 let tokens= token[1].split('-')
                 let eq = tokens[0]
                 let up = tokens[1]
                 upgrade(eq,up)
                    
               break;    
       }
      
   }
   function buy(equipment){
      if(!(inventory.includes(equipment))){
         inventory.push(equipment)
      }
   }
   function trash(equipment){
      let index = inventory.indexOf(equipment)
      if(index !== -1){
         inventory.splice(index,1)
      }
   }
   function repair(equipment){
      let index = inventory.indexOf(equipment)
      if (index !== -1) {
         let token = inventory.splice(index,1)
         inventory.push(equipment) 
      }
   }
   function upgrade (equipment,upgrade){
      if(inventory.includes(equipment)){
         let index = inventory.indexOf(equipment)
         inventory.splice(index+1,0,`${equipment}:${upgrade}`)
      }
   }

   console.log(inventory.join(' '));
}
gladiatorInventory([
'SWORD Shield Spear',
'Buy Bag',
'Trash Shield',
'Repair Spear',
'Upgrade SWORD-Steel'])

gladiatorInventory(['SWORD Shield Spear',
'Trash Bow',
'Repair Shield',
'Upgrade Helmet-V']
)