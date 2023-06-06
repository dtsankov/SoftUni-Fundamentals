function oddOccurrences(input){
let result = {}

let array = input.split(' ').map((element) =>element.toLocaleLowerCase())
 
for (let element of array) {
    if(!result.hasOwnProperty(element)){
        result[element] = 1
    }else{
        result[element]++
    }
}

let filteredResult = Object.entries(result)
.filter(element => element[1] % 2 !== 0)
.sort((a,b) => b[1]-a[1])
.map(entry => entry[0])
.join(' ')
 
 

 console.log(filteredResult);
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')

console.log('---');

oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food')