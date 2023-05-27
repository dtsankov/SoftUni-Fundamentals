function train(arr){
     let trainWagoons = arr
     .shift()
     .split(' ')
     .map(Number)

     let maxCapacity = arr
     .shift()
     

     for (let index = 0; index < arr.length; index++) {
         let token = arr[index].split(' ')
         if(token.length > 1){
             trainWagoons.push(+token[1])
         }else{
           for (let index = 0; index < trainWagoons.length; index++) {
                if (+token[0] + trainWagoons[index] <= +maxCapacity) {
                    trainWagoons[index]+= +token[0]
                    break;
                }  
           }
         }
     }

     console.log(trainWagoons.join(' '));
}
train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']
)
train(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6']
)