function piccolo(input){
let parking = new Set()

for (const line of input) {
    let [direction,carNumber] = line.split(', ')
     if(direction === 'IN'){
     parking.add(carNumber)
     }else{
     parking.delete(carNumber)
     }
}

let sorted = Array.from(parking).sort()
   if(parking.size !== 0){
    for (const number of sorted) {
        console.log(number);
    }
   }else{
    console.log('Parking Lot is Empty');
   }
}
piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
)

console.log('---');

piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']
)