function charachtersInRange(char1,char2){
    let start = char1.charCodeAt()
    let end = char2.charCodeAt()

    if(start > end){
        let temp = start
        start = end 
        end = temp
    }

     let result = ''

     for (let index = start + 1 ; index < end; index++) {
          let currChar = index 
          result+= String.fromCharCode(currChar)
     }
     return result
}
console.log(charachtersInRange('a','d'));
console.log(charachtersInRange('#',':'));
console.log(charachtersInRange('C','#'));
