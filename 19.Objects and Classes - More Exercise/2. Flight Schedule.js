function flightSchedulle(array){
    let fligths = {}
    
    array[0].forEach(line => {
        let [numberFly, destination] = line.split(' ')
        fligths[numberFly] = {
            Destination : destination,
            Status : 'Ready to fly '
        }
    });
    array[1].forEach(line => {
        let [numberFly,status] = line.split(' ')
        if(fligths.hasOwnProperty(numberFly)){
            fligths[numberFly].Status = status
        }
    })

    for (const fligth in fligths) {
         if(fligths[fligth].Status === String(array[2])){
             console.log(fligths[fligth]);
         }
    }
}
flightSchedulle([['WN269 Delaware',
'FL2269 Oregon',
 'WN498 Las Vegas',
 'WN3145 Ohio',
 'WN612 Alabama',
 'WN4010 New York',
 'WN1173 California',
 'DL2120 Texas',
 'KL5744 Illinois',
 'WN678 Pennsylvania'],
 ['DL2120 Cancelled',
 'WN612 Cancelled',
 'WN1173 Cancelled',
 'SK430 Cancelled'],
 ['Cancelled']
]
)