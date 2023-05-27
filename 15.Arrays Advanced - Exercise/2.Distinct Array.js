function distinctArray(arr){
   let newArr = []
   for (let index = 0; index < arr.length; index++) {
        let token = arr[index]
        filterArray(token)
   }

   function filterArray(number){
    if (!(newArr.includes(number))) {
        newArr.push(number)
    }
   }
   console.log(newArr.join(' '));
}
distinctArray([1, 2, 3, 4])
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])
distinctArray([20, 8, 12, 13, 4, 4, 8, 5])
