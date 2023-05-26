function solve(commands){
  let arr = commands
  .shift()
  .split(' ')
  .map(Number)

  for (let i = 0; i < commands.length; i++) {
       let [command,number,index] = commands[i].split(' ')
       number = +number
       index = +index
      
       switch (command) {
           case 'Add':
               add(number)
               break;
               case 'Remove':
               remove(number)
               break;
               case 'RemoveAt':
               removeAt(number)
               break;
               case 'Insert':
               insert(index,number)
               break;
       }
  }
  function add(el){
      arr.push(el)
  }
  function remove(num){
      arr = arr.filter(el => el !== num)
  }
  function removeAt(index){
      arr.splice(index,1)
  }
  function insert(index,num ){
      arr.splice(index,0,num)
  }
  console.log(arr.join(' '));
}
solve(['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3']
)