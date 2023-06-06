 function companyUsers(input){
 let companyEmployeeList = {}

 for (const line of input) {
    let [company,employee] = line.split(' -> ')

     if(companyEmployeeList.hasOwnProperty(company) === false){
        companyEmployeeList[company] = new Set()
     }
     companyEmployeeList[company].add(employee)
 }

 let sorted = Object.entries(companyEmployeeList).sort((a,b)=>a[0].localeCompare(b[0]))
 
 for (const [company,employees] of sorted) {
    console.log(company);
    for (const employee of employees) {
        console.log(`-- ${employee}`);
    }
 }

 }
 companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
    ]
    )

    console.log('<<<>>>');

    companyUsers([
        'SoftUni -> AA12345',
        'SoftUni -> CC12344',
        'Lenovo -> XX23456',
        'SoftUni -> AA12345',
        'Movement -> DD11111'
        ]
        )