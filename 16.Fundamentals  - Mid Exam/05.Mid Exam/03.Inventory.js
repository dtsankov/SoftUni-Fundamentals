function invenotory(array){
    let armory = array.shift().split(', ')
    while(array[0] !== 'Craft!'){
        let tokens = array.shift().split(' - ')
        let command = tokens[0]
        let item = tokens[1]

        switch (command) {
            case 'Collect':
                collect(item)
                break;
                case 'Drop':
                drop(item)
                break;
                case 'Combine Items':
                let token = item.split(':')
                combine(token[0],token[1])
                break;
                case 'Renew':
                renew(item)
                break;
        }
    }
    function collect(item){
            if(!armory.includes(item)){
                armory.push(item)
            }
    }
    function drop(item){
        if(armory.includes(item)){
            let index = armory.indexOf(item)
            armory.splice(index,1)
        }
    }
    function combine(oldItem , newItem){
        if(armory.includes(oldItem)){
            let index = armory.indexOf(oldItem)
            armory.splice(index+1,0,newItem)
        }
    }
    function renew(item){
        if(armory.includes(item)){
            let index = armory.indexOf(item)
           let currPosition = armory.splice(index,1)
           armory.push(currPosition)
        }
    }

    console.log(armory.join(', '))
}
invenotory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
  ]
  )

  invenotory([
    'Iron, Wood, Sword', 
    'Collect - Gold', 
    'Drop - Wood', 
    'Craft!'
  ]
  )