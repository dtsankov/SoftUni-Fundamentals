function cardGame(input) {

    let faces = {
        "1":10,
        "2":2,
        "3":3,
        "4":4,
        "5":5,
        "6":6,
        "7":7,
        "8":8,
        "9":9,
        "J":11,
        "Q":12,
        "K":13,
        "A":14,
    }
    let suits = {
        "S":4,
        "H":3,
        "D":2,
        "C":1,
    }

    let players = {}

    for (const line of input) {
        let [name,cards] = line.split(': ')
        cards = cards.split(', ') 

         if(players.hasOwnProperty(name) == false){
            players[name] = new Set()
         }

         for (const card of cards) {
            players[name].add(card)
         }
    }
      
     for (const [name,cards] of Object.entries(players)) {
        let power = 0
         for (const card of cards) {
             let facePower = faces[card[0]]
             let suitsPower = suits[card.slice(-1)]
             power += facePower * suitsPower
         }
         players[name] = power
     }

     for (const name in players) {
         console.log(`${name}: ${players[name]}`);
     }
     
}
cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]
)

console.log('---');

cardGame([
    'John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD'
    ]
    )