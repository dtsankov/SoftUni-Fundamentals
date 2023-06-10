function passwordGenerator(input){
 let [stringOne,stringTwo,word] = input
 word = word.toLocaleUpperCase()
 let combination = stringOne.concat(stringTwo)
 let br = 0
 let vowels =['a','e','i','o','u']
 let result = ''
 
 for (let index = 0; index < combination.length; index++) {
    if(vowels.includes(combination[index])){
        if(br >= word.length){
            br = 0
        }
        combination = combination.replace(combination[index],word[br])
        br++
    }
    
 }

for (let index = combination.length - 1 ; index >= 0; index--) {
     result+=combination[index]
}  
  console.log(`Your generated password is ${result}`);
}
passwordGenerator([
    'ilovepizza', 'ihatevegetables',
    'orange'
    ]
    )