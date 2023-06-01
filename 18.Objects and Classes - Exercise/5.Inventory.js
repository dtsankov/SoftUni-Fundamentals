function inventory(input){
 let heroes = []

 for (const line of input) {
     let [name,level,items] = line.split(' / ')
     heroes.push({name: name,level:level,items:items})
 }
  
  let sorted = heroes.sort((a,b)=> a.level - b.level)

 for (const hero of sorted) {
    console.log(`Hero: ${hero.name}`);
    console.log(`level => ${hero.level}`);
    console.log(`items => ${hero.items}`);

 }
}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
    )