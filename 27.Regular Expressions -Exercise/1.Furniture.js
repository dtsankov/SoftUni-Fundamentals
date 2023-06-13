function furniture(input){
let pattern = />>(?<name>[A-z]+)<<(?<price>[0-9.]+)!(?<quantity>\d+)\b/g

let match = pattern.exec(input)
let result = 0
let items = []

while(match !== null){
    
        result+= match.groups['price'] * match.groups['quantity']
        items.push(match.groups['name']);
    
match = pattern.exec(input)
}
console.log('Bought furniture:')
for (const item of items) {
    console.log(item);
}
console.log(`Total money spend: ${result.toFixed(2)}`);
}
furniture(['>>Sofa<<312.23!3',
'>>TV<<300!5',
'>Invalid<<!5',
'Purchase']
)
console.log('---');

furniture(['>>Laptop<<312.2323!3',
'>>TV<<300.21314!5',
'>Invalid<<!5',
'>>TV<<300.21314!20',
'>>Invalid<!5',
'>>TV<<30.21314!5',
'>>Invalid<<!!5',
'Purchase']
)
