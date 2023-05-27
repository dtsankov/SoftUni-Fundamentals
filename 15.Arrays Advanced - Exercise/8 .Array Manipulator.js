function arrayManipulator(array, arrayModifications) {
    let index = 0
    let commands = arrayModifications[index].split(' ')
    let command = commands[0]
    while (command[0] !== 'print') {
          switch (commands[0]) {
              case 'add':
                  add(+commands[1],+commands[2])
                  break;
                  case 'addMany':
                  let arr = []
                  let i = commands[1]
                  for (let index = 2; index < commands.length; index++) {
                       arr.push(commands[index])  
                  }
                  addMany(i,arr)
                  break;
                  case 'contains':
                  contains(+commands[1])
                  break;
                  case 'remove':
                  remove(commands[1])
                  break;
                  case 'shift':
                  shift(commands[1])
                  break;
                  case 'sumPairs':
                  sumPairs()
                  break;
                  default:
                      break;
           
          }
          index++
           commands = arrayModifications[index].split(' ')
           command = commands[0]

             if (command === 'print') {
                 break;
             }
           
    }
    function add(index,number){
        array.splice(index,0,number)
    }
    function addMany(index,arr){
        array.splice(index,0,...arr)
    }
    function contains(number){
        if(array.indexOf(number) !== -1){
            console.log(array.indexOf(number));
        }else{
            console.log('-1');
        }
    }
    function shift(positions){
        for (let index = 0; index < positions ; index++) {
             let currNum = array.shift()
             array.push(currNum)   
        }
    }
    function remove(index){
        array.splice(index,1)
    }
    function sumPairs(){
        let newArr = []
        for (let index = 0; index < array.length ; index+=2) {
            let sum = 0 ;
            sum = +array[index]+ +array[index+1]
            newArr.push(sum)
        }
        array = newArr
    }
     console.log(`[${array.join(', ','\n')}]`);
}
arrayManipulator([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print'])
arrayManipulator([1, 2, 3, 4, 5],['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print'])