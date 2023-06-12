function matchFullName(input){
 let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g
 
 let match = pattern.exec(input)
 let names = []

 while(match !== null){

names.push(match[0]);

match = pattern.exec(input)

 }
 console.log(names.join(' '));
}
matchFullName('ivan ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Ivan IvAnov, Ivan Ivanov')
