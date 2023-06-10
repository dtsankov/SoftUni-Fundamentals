function revealWords(words,string){
let replacementsWords = words.split(', ')

for (const word of replacementsWords) {
    string = string.replace("*".repeat(word.length),word)
}

console.log(string);
}
revealWords('great',
'softuni is ***** place for learning new programming languages'
)
console.log('---');

revealWords('great, learning',
'softuni is ***** place for ******** new programming languages'
)
