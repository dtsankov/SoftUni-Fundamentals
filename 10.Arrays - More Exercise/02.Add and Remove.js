function solve(arr){
    let newArr = []
    let br = 1

    for (let index = 0; index < arr.length; index++) {
        let command = arr[index]

        if(command === 'add'){
         newArr.push(br)
         br++
        }else{
          newArr.pop()
          br++
        }
    }
    if (newArr.length == 0) {
    console.log('Empty');
        
    }else{
        console.log(newArr.join(' '));
    }
}
solve(['add', 'add', 'add', 'add'])
solve(['add', 'add', 'remove', 'add', 'add'])
solve(['remove', 'remove', 'remove'])