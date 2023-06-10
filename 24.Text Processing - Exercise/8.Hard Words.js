function hardWords(array){
 
 let letter = array.shift()
  
 for (const words of array) {
    while(letter.includes('_')){
        let length = 0
        let symbol = '_'
        let firstIndex = letter.indexOf(symbol)
        
        for (let index = firstIndex; index < letter.length; index++) {
            if(letter[index] === symbol){
                length++
            }else{
                break;
            }
            
        }
     for (const word of words) {
        if(word.length === length){
            letter = letter.replace(symbol.repeat(word.length),word)
            break;
        }else{
            continue
        }
     }
    }
 }
 console.log(letter);
  
}
hardWords(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
)