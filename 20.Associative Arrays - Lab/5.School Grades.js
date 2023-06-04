function schoolGrades(input){
let result = new Map()

input.forEach(line => {
    let [name,...grades] = line.split(' ')
    
    if(result.has(name) === false){
        result.set(name,[])
    }
    let existing=result.get(name)
    for (const grade of grades) {
        existing.push(grade)
    }
});
let sorted = Array.from(result).sort((a,b) => a[0].localeCompare(b[0]))

for (let [name,grades] of sorted) {
     grades = grades.map(Number).reduce((a,b)=> a+b) / grades.length
     console.log(name,':',grades);
}
}
schoolGrades(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6']
)