function convert(str){
 let person = JSON.parse(str)
 
 for (const key of Object.keys(person)) {
      console.log(`${key}: ${person[key]}`);
 }
}
convert('{"name": "George", "age": 40, "town": "Sofia"}')
convert('{"name": "Peter", "age": 35, "town": "Plovdiv"}')