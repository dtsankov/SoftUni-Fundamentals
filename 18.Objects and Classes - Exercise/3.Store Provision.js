function storeProvision(productsInStock,orderedProducts){
       let storedProducts = {}
    

      for (let index = 0; index < productsInStock.length; index+=2) {
            let currProduct = productsInStock[index]
            storedProducts[currProduct] = Number(productsInStock[index+1])
      }

      for (let index = 0; index < orderedProducts.length; index+=2) {
        let currProduct = orderedProducts[index]
        if(!storedProducts.hasOwnProperty(currProduct)){
            storedProducts[currProduct] = 0
        } 
        storedProducts[currProduct] += Number(orderedProducts[index+1])

  }

   
     for (const product in storedProducts) {
             console.log(`${product}-> ${storedProducts[product]}`);
     }
       
}
storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    )