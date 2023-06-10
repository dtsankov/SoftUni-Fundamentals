function extractFile(string){
 
let substracted = string
.substring(string.lastIndexOf('\\')+1)
.split('.')
let extension = substracted.pop()
let fileName = substracted.join('.')

console.log(`File name: ${fileName}`);
console.log(`File extension: ${extension}`); 
}
extractFile('C:\\Internal\\training-internal\\Template.pptx')
console.log('---');
extractFile('C:\\Projects\\Data-Structures\\LinkedList.bak.cs')
