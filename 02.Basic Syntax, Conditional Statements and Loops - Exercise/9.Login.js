function login(input) {
    let userName = input[0];
    let password = userName.split('').reverse('').join('')

    let attemptsBr = 0

    for (let index = 1; index < input.length; index++) {
        
            if (password !== input[index]) {
                attemptsBr++
                if (attemptsBr == 4) {
                    console.log(`User ${userName} blocked!`)
                    break;
                };
                
                console.log("Incorrect password. Try again.");
            }else{
                console.log(`User ${userName} logged in.`);
            }

        
    }

}
login(['Acer', 'login', 'go', 'let me in', 'recA']);
console.log("- - -");
login(['momo','omom'])
console.log("- - -");
login(['sunny','rainy','cloudy','sunny','not sunny'])