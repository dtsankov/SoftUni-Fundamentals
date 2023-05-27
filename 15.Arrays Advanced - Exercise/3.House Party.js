function houseParty(arr) {
   let guestList = []

   for (let index = 0; index < arr.length; index++) {
      let token = arr[index].split(' ')
      let currGuest = token[0]

      if (arr[index].includes('is not going')) {
         if (guestList.includes(currGuest)) {
             let indexOfGuest = guestList.indexOf(currGuest)
             guestList.splice(indexOfGuest,1)
         } else {
            console.log(`${currGuest} is not in the list!`);
         }
      } else if (arr[index].includes('is going')) {
         if ((guestList.includes(currGuest))) {
              console.log(`${currGuest} is already in the list!`);
         }else{
            guestList.push(currGuest)
         }
      }
   }
   console.log(guestList.join('\n'));
}
houseParty(['Allie is going!',
   'George is going!',
   'John is not going!',
   'George is not going!']
)
houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']
)