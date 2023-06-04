function wordOccurances(input){
let result = new Map()

for (const word of input) {
    if(result.has(word) === true){
        let currCount = result.get(word)+1
        result.set(word,currCount)
    }else{
        result.set(word,1)
    }
};
let sorted = Array.from(result).sort((a,b)=> b[1]  - a[1])

    for (let [word,count] of sorted) {
         
     
        console.log(word,'->', count);
    }
}
wordOccurances(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])