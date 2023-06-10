function modernTimes(string){
let result = string.split(' ')
let final = []
let isNumberExist = false
 for (let word of result) {
   
     if(word.charAt(0) === '#' && word.length > 1){
        word = word.slice(1)
        isNumberExist = false
        for (const ch of word) {
            if(!Number.isNaN(Number(ch))){
               isNumberExist = true
            }
        }
        if(!isNumberExist){
            final.push(word)
        }
     }
 }
 console.log(final.join('\n'));
}
modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia')
console.log('---');
modernTimes('The symbol # is known #va8iously in English-speaking #regions as the #number sign')
