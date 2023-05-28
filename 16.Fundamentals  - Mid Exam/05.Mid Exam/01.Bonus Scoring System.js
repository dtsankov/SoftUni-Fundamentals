function bonusScoringSystem(array){
   let students = Number(array.shift())
   let totalLectures = Number(array.shift())
   let additionalBonus = Number(array.shift())

   let maxBonuses = 0
   let attendances = 0

   for (let index = 0; index < students; index++) {
         let token = Number(array.shift())
         let currBonus =  (token * (5+additionalBonus)) / totalLectures

         if(maxBonuses < currBonus){
             maxBonuses = currBonus
             attendances = token
         }
       
   }
   console.log(`Max Bonus: ${Math.ceil(maxBonuses)}.`);
   console.log(`The student has attended ${attendances} lectures.`);


}
bonusScoringSystem([
    '5',  '25', '30',
    '12', '19', '24',
    '16', '20'
  ]
  )
  bonusScoringSystem([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
  ]
  )