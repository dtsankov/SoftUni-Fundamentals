function solve(year,month,day){

    let currDate = new Date(year,month,day)

    let nextDate = new Date(currDate);
    nextDate.setDate(currDate.getDate()+1)
    console.log(nextDate);

    
    
    

}
solve(2016, 9, 30)