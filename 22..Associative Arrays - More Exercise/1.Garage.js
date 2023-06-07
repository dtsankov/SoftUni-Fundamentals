function garage(input){
let result =  new Map()

for (const line of input) {
    let token = line.split('-')
    let garage = token[0]
    let carKeyValues = token[1]
     
    
     
  if (!result.hasOwnProperty(name)) {
        result[name] = {}
    }
    for (const line of tokens) {
        let [key,value] = line.split(': ')
        result[name][key] = value
    }*/
}

//for (const garage of Object.entries(result)) {
 //   console.log(`Garage № ``);
//}
}
garage(['1 - color: blue, fuel type: diesel',
 '1 - color: red, manufacture: Audi', 
 '2 - fuel type: petrol', 
 '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'])