function solve(string1, char, string2){
let res = string1.replace('_',char)
let result = res === string2? "Matched" : "Not Matched";

console.log(result);
}
solve('Str_ng', 'i', 'String')