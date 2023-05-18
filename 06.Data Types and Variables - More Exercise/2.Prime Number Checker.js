function solve(num){
    if (num == 1 || num == 3 || num == 5 || num == 7 || num == 2 || (num % num == 0 && num % 1 == num && !(num % 2 == 0 || num % 3 == 0 || num % 5 == 0 || num % 7 == 0) )) {
        console.log(true);
    }
   else  {
  console.log(false);
   }
   }

solve(17)
solve(81)
solve(7)
solve(8)
