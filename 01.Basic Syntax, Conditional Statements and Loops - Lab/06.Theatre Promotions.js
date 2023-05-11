function solve(day, age) {
    let ticket = 0;

    let isFit = true

    if (age >= 0 && age <= 18) {
        if (day === "Weekday") {
            ticket = 12
        } else if (day === "Weekend") {
            ticket = 15

        } if (day === "Holiday") {
            ticket = 5

        }

    } else if (age > 18 && age <= 64) {
        if (day === "Weekday") {
            ticket = 18

        } else if (day === "Weekend") {
            ticket = 20

        } if (day === "Holiday") {
            ticket = 12

        }

    } else if (age > 64 && age <= 122) {
        if (day === "Weekday") {
            ticket = 12

        } else if (day === "Weekend") {
            ticket = 15

        } if (day === "Holiday") {
            ticket = 10

        }

    } else {
        isFit = false;
        console.log("Error");
    }
    if (isFit) {
        console.log(`${ticket}$`);
    }

}
solve("Weekday",42)