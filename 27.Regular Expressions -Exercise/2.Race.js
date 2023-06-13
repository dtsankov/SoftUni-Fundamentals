function race(input) {
    let racers = {}
    let names = input.shift().split(', ')

    for (const line of input) {
        if (line !== 'end of race') {
            let racerName = line.match(/[A-Z]+/gi).join('')
            let distanceInDigits = line.match(/\d/g)
            let result = distanceInDigits.map((el) => Number(el)).reduce((a, b) => a + b, 0)
            if (names.includes(racerName)) {
                if (!racers.hasOwnProperty(racerName)) {
                    racers[racerName] = result
                } else {
                    racers[racerName] += result
                }
            }
        }
    }
    let sorted = Object.entries(racers).sort((a, b) => b[1] - a[1])
    let br = 1
    for (let [name, distance] of sorted) {
        
        if (br > 3) {
            break;
        }
        if (br == 1) {
            console.log(`${br}st place: ${name}`);
            br++
        } else if (br == 2) {
            console.log(`${br}nd place: ${name}`);
            br++
        } else {
            console.log(`${br}rd place: ${name}`);
            br++
        }

    }
}
race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'])

console.log('---');

race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
    'Mi*&^%$ch123o!#$%#nne787) ',
    '%$$B(*&&)i89ll)*&) ',
    'R**(on%^&ald992) ',
    'T(*^^%immy77) ',
    'Ma10**$#g0g0g0i0e',
    'end of race']
)
