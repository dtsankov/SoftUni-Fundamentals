function stringSubstring(word,string){
string = string.split(' ')
let isFound = false
for (let words of string) {
    words = words.toLowerCase()
    if(words === word){
        console.log(word);
        isFound = true
        break;
    }
}
if(!isFound){
    console.log(`${word} not found!`);
}
}
stringSubstring('javascript',
'JavaScript is the best programming language'
)
console.log('---');

stringSubstring('python',
'JavaScript is the best programming language'
)
