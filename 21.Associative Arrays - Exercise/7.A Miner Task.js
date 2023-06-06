function minerTask(input){
let result = {}

for (let index = 0; index < input.length; index+=2) {
    let resource = input[index]
    let quantity = Number(input[index+1])
    if(result.hasOwnProperty(resource) === false){
        result[resource] = 0
    }
    result[resource] += quantity
     
     
}
 
for (const [material,quantity] of Object.entries(result)) {
    console.log(material,'->',quantity);
}
}
minerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
    ]
    )

    console.log('---');

    minerTask([
        'gold',
        '155',
        'silver',
        '10',
        'copper',
        '17',
        'gold',
        '15'
        ]
        )