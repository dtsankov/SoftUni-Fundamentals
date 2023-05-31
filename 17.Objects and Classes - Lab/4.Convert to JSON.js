function convertToJSON(firstName,lastName,hairColour){
    let person = {}
    person.firstName = firstName
    person.lastName = lastName
    person.hairColour = hairColour

    console.log(JSON.stringify(person));

}
convertToJSON('George', 'Jones', 'Brown')