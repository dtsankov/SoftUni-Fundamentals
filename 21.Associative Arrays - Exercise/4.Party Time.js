function partyTime(input) {
    let guestListRegular = new Set()
    let guestListVip = new Set()

    while (input[0] !== 'PARTY') {
        let guest = input.shift()
        if (Number.isNaN(Number(guest[0]))) {
            guestListRegular.add(guest)
        } else {
            guestListVip.add(guest)
        }
    }

    for (const guest of input) {
        guestListRegular.delete(guest)
        guestListVip.delete(guest)

    }
    console.log(guestListRegular.size + guestListVip.size);
    for (const guest of guestListVip) {
        console.log(guest);
    }
    for (const guest of guestListRegular) {
        console.log(guest);
    }
}
partyTime([
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    '7IK9Yo0h',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]
)

console.log('---');

partyTime(['m8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'
]
)