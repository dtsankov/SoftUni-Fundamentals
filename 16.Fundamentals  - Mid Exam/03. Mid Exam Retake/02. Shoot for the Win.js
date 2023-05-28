function shootForTheWin(array) {
    let targets = array.shift().split(' ').map(Number)
    let shotTargets = 0

    while (array[0] !== 'End') {
        let shotIndex = Number(array.shift())
        let number = Number(targets[shotIndex])

        if (shotIndex > targets.length - 1) {
            continue;
        }
        if (targets[shotIndex] !== -1) {
            targets[shotIndex] = -1
            shotTargets++
        }

        for (let index = 0; index < targets.length; index++) {

            if (targets[index] == -1) {
                continue
            } else {
                if (number < targets[index]) {
                    targets[index] -= number
                } else {
                    targets[index] += number

                }
            }
        }

    }

    console.log(`Shot targets: ${shotTargets} -> ${targets.join(' ')} `);

}
shootForTheWin(["24 50 36 70",
    "0",
    "4",
    "3",
    "1",
    "End"]) 

shootForTheWin((["30 30 12 60 54 66",
    "5",
    "2",
    "4",
    "0",
    "End"])
)