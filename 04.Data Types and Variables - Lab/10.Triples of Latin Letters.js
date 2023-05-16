function solve(num) {
    num = Number(num)

    for (let i = 1; i <= num; i++) {
        let letter1 = String.fromCharCode(96 + i)

        for (let j = 1; j <= num; j++) {
            let letter2 = String.fromCharCode(96 + j)

            for (let k = 1; k <= num; k++) {
                let letter3 = String.fromCharCode(96 + k)
                let output = letter1 + letter2 + letter3
                console.log(output);
            }
        }
    }
}
solve(3)