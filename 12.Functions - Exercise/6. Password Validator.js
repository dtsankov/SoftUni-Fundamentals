function passwordValidator(password) {

    let isLengthValid = isLengthEnough(password)
    let islettersAndDigitsOnly = isOnlyLettersAndDigits(password)
    let isMoreThanTwoDigitsValid = isHaveMoreThanTwoDigits(password)

    function isLengthEnough(stringPassword) {
        return stringPassword.length >= 6 && stringPassword.length <= 10;
    }
    function isOnlyLettersAndDigits(stringPassword) {
        for (let currCharIndex of stringPassword) {
            let currChar = currCharIndex.charCodeAt(0)
            if (
                !(currChar >= 65 && currChar <= 90) &&
                !(currChar >= 97 && currChar <= 122) &&
                !(currChar >= 48 && currChar <= 57)
            ) {
                return false
            } else {
                return true
            }
        }

    }
    function isHaveMoreThanTwoDigits(stringPassword) {
        let br = 0
        for (let currCharIndex of stringPassword) {
            let currChar = currCharIndex.charCodeAt(0)
            if (currChar >= 48 && currChar <= 57) {
                br++
            }
        }
        if (br >= 2) {
            return true
        } else {
            return false
        }
    }
    
    if(isLengthValid && islettersAndDigitsOnly && isMoreThanTwoDigitsValid){
        console.log('Password is valid');
    }
    if(!isLengthValid){
        console.log('Password must be between 6 and 10 characters');
    }
    if (!islettersAndDigitsOnly) {
        console.log('Password must consist only of letters and digits');
    }
    if(!isMoreThanTwoDigitsValid){
        console.log('Password must have at least 2 digits');
    }
}
passwordValidator('logIn')
console.log('---');
passwordValidator('MyPass123')
console.log('---');
passwordValidator('Pa$s$s')


