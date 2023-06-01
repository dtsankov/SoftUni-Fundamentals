function catalogue(input){
let productCatalogue = []

input.forEach(line => {
     let tokens = line.split(' : ') 
      
    let product = {
        name: tokens[0],
        price: parseFloat(tokens[1])
    }
    productCatalogue.push(product)
 });
 

 productCatalogue.sort((a,b)=> a.name.localeCompare(b.name));

   
 let currentLetter = ''

   for (const product of productCatalogue) {
         if(currentLetter !== product.name.charAt(0)){
             currentLetter = product.name.charAt(0) 
             console.log(currentLetter);
         }
         console.log(`  ${product.name}: ${product.price}`);
   }
   
}
catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
    ]
    )