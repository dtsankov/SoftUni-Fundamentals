function expenses(lostFights, helmetP, swordP, shieldP, armorP) {
    let helmetBr = 0;
    let swordBr = 0;
    let shiedlBr = 0;
    let armorBr = 0;

    for (let i = 1; i <= lostFights; i++) {
        if (i % 2 == 0) {
            helmetBr++
        }  
        if (i % 3 == 0) {
            swordBr++
        }
        if (i % 2 == 0 && i % 3 == 0) {
            shiedlBr++
        }
        if (shiedlBr % 2 == 0 && shiedlBr != 0 && i % 12 == 0) {
            armorBr++
        }
    }

    let total = helmetP * helmetBr + swordP * swordBr + shieldP * shiedlBr + armorBr * armorP

    console.log(`Gladiator expenses: ${total.toFixed(2)} aureus`);
}
expenses(23,
    12.50,
    21.50,
    40,
    200  
)