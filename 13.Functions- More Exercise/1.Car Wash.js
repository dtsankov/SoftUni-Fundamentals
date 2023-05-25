function carWash(arr) {
    let value = 0
    for (let index = 0; index < arr.length; index++) {
        let command = arr[index]
        switch (command) {
            case 'soap':
                 value+=10
                break;
            case 'water':
                 value*=1.20
                break;
            case 'vacuum cleaner':
                value*=1.25
                break;
            case 'mud':
                 value*=0.90
                break;
                default:
                    break;
        }
    }
    console.log(`The car is ${value.toFixed(2)}% clean.`);
}
carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])
console.log('---');
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"])