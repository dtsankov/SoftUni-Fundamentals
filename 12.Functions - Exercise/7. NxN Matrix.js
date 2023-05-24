function matrix(num){
   let nXnMatrix = num=>((num+' ').repeat(num)+'\n').repeat(num)
   console.log(nXnMatrix(num));
}
matrix(3)