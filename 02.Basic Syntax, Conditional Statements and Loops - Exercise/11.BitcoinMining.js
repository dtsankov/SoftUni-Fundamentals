function solve(arr) {

    let sum = 0
    let br = 0;
    let bitcoin = 0
    let firtsBitcoin = 0
    let isBought = false

    for (let i = 0; i < arr.length; i++) {
        br++;
        let currSum = 0
        if (br % 3 == 0) {
            currSum = (arr[i] * 67.51) * 0.70
        } else {
            currSum = arr[i] * 67.51
        }
        sum += currSum

        if (sum >= 11949.16) {
            bitcoin++
            sum -= 11949.16
            if (firtsBitcoin == 0) {
                firtsBitcoin = i + 1;
                isBought = true
            }
        }

    }

    console.log(`Bought bitcoins: ${bitcoin}`);
    if (isBought) {
        console.log(`Day of the first purchased bitcoin: ${firtsBitcoin}`);
    }
    console.log(`Left money: ${sum.toFixed(2)} lv.`);
}
solve([100, 200, 300])