function palindromeIntegers(arr) {

    let isPalindrom = true

    for (let index = 0; index < arr.length; index++) {
        let currInteger = arr[index].toString().split('').reverse('').join('')
        if (arr[index] != +currInteger) {
            isPalindrom = false
            console.log(isPalindrom);
        } else {
            isPalindrom = true

            console.log(isPalindrom);
        }

    }
}
palindromeIntegers([123, 323, 421, 121])