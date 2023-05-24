function smallestNumber(numOne, numTwo, numThree) {


    if (numOne <= numTwo && numOne <= numThree) {
        return numOne
    } else if (numTwo <= numOne && numTwo <= numThree) {
        return numTwo
    } else {
        return numThree
    }
}
console.log(smallestNumber(2,
    2,
    2));