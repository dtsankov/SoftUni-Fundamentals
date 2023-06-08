function stringOccurrences(string,word){
let result = string.split(' ').filter((el) => el === word)
console.log(result.length);
}
stringOccurrences('This is a word and it also is a sentence',
'is'
)
console.log('---');

stringOccurrences('softuni is great place for learning new programming languages',
'softuni'
)
