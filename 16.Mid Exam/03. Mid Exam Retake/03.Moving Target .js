function movingTarget(array) {
    let targets = array
        .shift()
        .split(' ')
        .map(Number)

        while(array[0] !== 'End'){
          let tokens = array.shift().split(' ')
          let command = tokens[0]
          let index = +tokens[1]
          let power = +tokens[2]

          switch(command){
              case 'Shoot':
                  shoot(index,power)
                  break;
                  case 'Add':
                      add(index,power)
                  break;
                  case 'Strike':
                      strike(index,power)
                  break;
          }

        }

    function shoot(index,power){
        targets[index]-= power
        if(targets[index] <=0){
            targets.splice(index,1)
        }
    }
    function add(index,value){
        if (targets.length -1 < index) {
            console.log("Invalid placement!");
        }else{
            targets[index] += value
        }
    }
    function strike(index, radius){
        let startIndex = index - radius  
        let length = radius * 2 + 1
        if(startIndex + length <= targets.length){
            targets.splice(startIndex,length)
        }else{
            console.log('Strike missed!');
        }
    }
}
movingTarget((["52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 22 3",
    "End"])
)