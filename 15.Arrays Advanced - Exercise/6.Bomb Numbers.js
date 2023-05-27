function bombNumbers(arr1, arr2) {
  let bombNumber = arr2[0]
  let bombRadius = arr2[1]

  let indexOfBomb = arr1.indexOf(bombNumber)

  while(indexOfBomb !== -1){
      let startIndex = Math.max(0,indexOfBomb - bombRadius)
      let explosionLength = bombRadius * 2 + 1
      arr1.splice(startIndex,explosionLength)
      indexOfBomb = arr1.indexOf(bombNumber)
  }
console.log(arr1.reduce((a,b)=>a+b,0));
}
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9],[4, 2])
bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3])
bombNumbers([1, 7, 7, 1, 2, 3], [7, 1])
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1])
