function solve(arr){
let index = 1    
let account  = arr[0].split(' ')

while (arr[index]!='Play!') {
    let token = arr[index].split(' ')
    let command = token[0]
    let currGame = token[1]
    let position = account.indexOf(currGame)

    if (command === 'Install') {
        if (!(account.includes(currGame))) {
            account.push(currGame)
        }
    }else if(command === 'Uninstall'){
       if (account.includes(currGame)) {   
           account.splice(position,1)
       }
    }else if(command === 'Update'){
        if(account.includes(currGame)){
           account.splice(position,1)
           account.push(currGame)
        }
    }else if(command === 'Expansion'){
         let game = currGame.split('-')
         let gameName = game[0]
         let expName = game[1]
        if (account.includes(gameName)) {
            
            account.splice(position-1,0,`${gameName}:${expName}`)
        }
    }
index++
}
console.log(account.join(' '));
}
solve(['CS WoW Diablo',
'Install LoL',
'Uninstall WoW',
'Update Diablo',
'Expansion CS-Go',
'Play!']
)
console.log('---');

solve(['CS WoW Diablo',
'Uninstall XCOM',
'Update PeshoGame',
'Update WoW',
'Expansion Civ-V',
'Play!']
)