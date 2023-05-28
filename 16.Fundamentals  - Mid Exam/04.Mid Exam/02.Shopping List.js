function shoppingList(array){

    let shoppingCart = array.shift().split('!')

    while(array[0] !== 'Go Shopping!'){
        let tokens = array.shift().split(' ')
        let command = tokens[0]
        let product = tokens[1]

        switch(command){
             case 'Urgent':
                 urgent(product)
                 break;
             case 'Unnecessary':
                 unnecessary(product)
                 break;
             case 'Correct':
                 correct(product,tokens[2])
                 break;
             case 'Rearrange':
                 rearrange(product)
                 break;

        }
    }

function urgent(item){
    if (!(shoppingCart.includes(item))) {
    shoppingCart.unshift(item)
        
    }
}
function unnecessary(item){
    if (shoppingCart.includes(item)) {
        shoppingCart.filet(item => item != item)
    }
}
function correct(oldItem , newItem){
    if (shoppingCart.includes(oldItem)) {
        let index = shoppingCart.indexOf(oldItem)
        shoppingCart[index]=newItem
    }
}
function rearrange(item){
    if (shoppingCart.includes(item)) {
        let index = shoppingCart.indexOf(item)
        let currItem = shoppingCart.splice(index,1)
        shoppingCart.push(currItem)
}
}
console.log(shoppingCart.join(' '));
}
shoppingList(["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"])

console.log('---');

shoppingList(["Tomatoes!Potatoes!Bread",
"Unnecessary Milk",
"Urgent Tomatoes",
"Go Shopping!"])

 

