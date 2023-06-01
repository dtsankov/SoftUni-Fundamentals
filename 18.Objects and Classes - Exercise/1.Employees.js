function employees(employees){

class Employee{
    constructor(name,number){
        this.name = name
        this.number = number

    }
}

let employeesList = []

for (const employee of employees) {
     
    let currEmployee = new Employee(employee,employee.length)
    employeesList.push(currEmployee)
}

  employeesList.forEach((i)=> console.log(`Name: ${i.name} -- Personal Number: ${i.number}`))
}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )