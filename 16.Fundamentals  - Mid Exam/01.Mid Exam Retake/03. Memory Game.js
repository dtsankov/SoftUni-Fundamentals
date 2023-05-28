function memoryGame(array) {
    let memoryBoard = array
        .shift()
        .split(' ')

    let moves = 0

    while (array[0] !== 'end') {

        moves++
        let tokens = array.shift().split(' ')
        let index1 = +tokens[0]
        let index2 = +tokens[1]
        if (index1 >= 0 && index1 <= memoryBoard.length && index2 >= 0 && index2 <= memoryBoard.length && index1 !== index2) {
            if (memoryBoard[index1] == memoryBoard[index2]) {
                console.log(`Congrats! You have found matching elements - ${memoryBoard[index1]}!`);
                memoryBoard.splice(index1, 1)
                if(index2 < index1 && index2 == 0 ){
                    memoryBoard.splice(index2, 1)
                }else{
                    memoryBoard.splice(index2-1, 1)
                }
                if (memoryBoard.length === 0) {
                    console.log(`You have won in ${moves} turns!`);
                    break;
                }
            } else {
                console.log("Try again!");
            }
        } else {
            let index = memoryBoard.length / 2
            let sequence = [`${-moves}a`, `${-moves}a`]
            memoryBoard.splice(index, 0, ...sequence)
            console.log("Invalid input! Adding additional elements to the board");
        }
    }
    if (memoryBoard.length > 0) {
        console.log(`Sorry you lose :(`)
        console.log(`${memoryBoard.join(' ')} `);

    }
}
memoryGame( [
    "1 1 2 2 3 3 4 4 5 5", 
    "1 0",
    "-1 0",
    "1 0", 
    "1 0", 
    "1 0", 
    "end"
    ]  
)

console.log('---');

memoryGame([
    "a 2 4 a 2 4", 
    "4 0", 
    "0 2",
    "0 1",
    "0 1", 
    "end"
    ]
    )

console.log('---');

memoryGame([
    "a 2 4 a 2 4", 
    "0 3", 
    "0 2",
    "0 1",
    "0 1", 
    "end"
    ]
    ) 

