function pascalCaseSplitter(text){
let result = []

let currWord = text[0]

for (let index = 1; index < text.length; index++) {
     if(text[index].toUpperCase() !== text[index]){
        currWord =  currWord.concat(text[index])
     }else{
        result.push(currWord)
        currWord = text[index]
     }
}
result.push(currWord)
console.log(result.join(', '));
}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')
console.log('---');
pascalCaseSplitter('HoldTheDoor')
console.log('---');
pascalCaseSplitter('ThisIsSoAnnoyingToDo')


