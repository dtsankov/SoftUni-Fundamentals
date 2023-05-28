function muOnline(array) {

    let health = 100
    let bitcoins = 0
    let room = 0
    let isComplete = true

    let tokens = array.split('|')

    for (let index = 0; index < tokens.length; index++){
        let rooms = tokens[index].split(' ')
        let command = rooms[0]
        let number = Number(rooms[1])
        room++

        if (command === 'potion') {
            potion(number)
        } else if (command === 'chest') {
            chest(number)
        } else {
            fight(number,command,room)
            
        }
        if(!isComplete){
            break
        }
    }

    function potion(amount) {
        if (health + amount > 100) {
            health = 100
        } else {
            health += amount
        }
        console.log(`You healed for ${amount} hp.`);
        console.log(`Current health: ${health} hp.`);
    }
    function chest(amount) {
        bitcoins += amount
        console.log(`You found ${amount} bitcoins.`);
    }
    function fight(attack, monster, room) {
        if (health - attack <= 0) {
            console.log(`You died! Killed by ${monster}.`);
            console.log(`Best room: ${room}`);
            isComplete = false
            
        } else {
            health-=attack
            console.log(`You slayed ${monster}.`);
        }
    }
    if (isComplete) {
        console.log("You've made it!");
        console.log(`Bitcoins: ${bitcoins}`);
        console.log(`Health: ${health}`);

    }
}
muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000")
console.log('---')
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110")
