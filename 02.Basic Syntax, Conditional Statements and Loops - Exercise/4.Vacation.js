function vacantion(count, type, day) {
    let result = 0;

    switch (day) {
        case "Friday":
            if (type === "Students") {
                result = 8.45 * count
            } else if (type === "Business") {
                result = 10.90 * count
            } else {
                result = 15 * count
            }
            break;
        case "Saturday":
            if (type === "Students") {
                result = 9.80 * count
            } else if (type === "Business") {
                result = 15.60 * count
            } else {
                result = 20 * count
            }
            break;
        case "Sunday":
            if (type === "Students") {
                result = 10.46 * count
            } else if (type === "Business") {
                result = 16 * count
            } else {
                result = 22.50 * count
            }
            break;

    }

    if (type === "Students" && count >= 30) {
        result *= 0.85
    } else if (type === "Business" && count >= 100) {
        let disc = (result / count) * 10
        result -= disc
    } else if (type === "Regular" && count>=10 && count<= 20){
        result*=0.95
    }

        console.log(`Total price: ${result.toFixed(2)}`);
}
vacantion(30,
    "Students",
    "Sunday"
)
vacantion(40,
    "Regular",
    "Saturday"
    
    )
 