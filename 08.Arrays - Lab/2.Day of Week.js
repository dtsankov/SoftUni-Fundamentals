function solve(daysAsNumber) {
    

    if (daysAsNumber < 1 || daysAsNumber > 7) {
        console.log("Invalid day!");

    } else {
        let days = [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thrusday",
            "Friday",
            "Saturday",
            "Sunday"
        ]
    
        let index = daysAsNumber - 1
        console.log(days[index]);
    }

}
solve(3)
solve(4)
solve(5)
solve(33)
solve(-1)
