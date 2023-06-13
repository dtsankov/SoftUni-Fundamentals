function barIncome(input){
    let result = 0
    for (const line of input) {
        if(line !== 'end of shift'){
    
            let pattern = /%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>[\w]+)>[^|$%.]*\|(?<quantity>[\d]+)\|[^|$%.]*?(?<price>[\d]+[.]?[\d]+)\$/gm
            let exec = pattern.exec(line)
    
            if(exec){
                let name = exec.groups.name
                let product = exec.groups.product
                let quantity = Number(exec.groups.quantity)
                let price = Number(exec.groups.price)       
                result += price * quantity  
                console.log(`${name}: ${product} - ${(price * quantity).toFixed(2)}`);
                  
        }
        }
    }
    console.log(`Total income: ${result.toFixed(2)}`);
    }

barIncome(['%George%<Croissant>|2|10.3$',
'%Peter%<Gum>|1|1.3$',
'%Maria%<Cola>|1|2.4$',
'end of shift'])

console.log('---');

barIncome(['%InvalidName%<Croissant>|2|10.3$',
'%Peter%<Gum>1.3$',
'%Maria%<Cola>|1|2.4',
'%Valid%<Valid>valid|10|valid20$',
'end of shift']
)