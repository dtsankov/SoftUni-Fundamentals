function extractEmails(input){
let pattern = /(?<!\S)[a-zA-Z]+([\.\-\_]+[A-Za-z]+)*@[a-zA-Z]+([\.\-]*[A-Za-z]+)*(\.[A-Za-z]+)/gm

let match = input.match(pattern)

console.log(match.join('\n'));
}
extractEmails('Please contact us at: support@github.com.')
console.log('---');
extractEmails('Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.')
console.log('---');
extractEmails('Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de.')
