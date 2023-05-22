function solve(vasko){
  let index = 0;
  let maxGrades = vasko[index]
  let gradesBr = 0
  let badGradesBr = 0
  let lastProblem = ''
  let score = 0
  let isBreak = true
  index++

  while(vasko[index] != 'Enough'){
      let currProblem = ''
      if(vasko[index+1] > 4){
        currProblem = vasko[index]
          lastProblem = currProblem 
          gradesBr++
          score += +vasko[index+1]

      }else{
          if(badGradesBr >=maxGrades){
               console.log(`You need a break, ${maxGrades} poor grades."`);
               isBreak = false
           break;
          }else{   
            currProblem = vasko[index]
          lastProblem = currProblem 
          gradesBr++
          badGradesBr++
          score += +vasko[index+1]
        
          }
      }
      index+=2
  }
  if(isBreak){
      console.log(`Average score: ${score / gradesBr}`);
      console.log("Number of problems" +`: ${gradesBr}`);
      console.log(`Last problem: ${lastProblem}`);

  }
}
solve(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"])

solve(["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"
])