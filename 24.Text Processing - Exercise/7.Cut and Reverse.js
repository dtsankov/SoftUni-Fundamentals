function cutAndReverse(text){
let firstHalf = ''
let secondHalf =''

for (let index = text.length -1  ; index >= 0; index--) {
    let currChar = text[index]

    if(index >= text.length / 2){
        secondHalf+=currChar
    }else{
        firstHalf+=currChar
    }
      
}
console.log(firstHalf);
console.log(secondHalf);

}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')
console.log('---');
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI')
