function towns(towns){
   
   let townsList = {}

   for (const town of towns) {
       let [name,latitude,longtitude] = town.split(' | ')
       
       latitude = Number(latitude).toFixed(2)
       longtitude = Number(longtitude).toFixed(2)

       townsList.name = name
       townsList.latitude = latitude
       townsList.longtitude = longtitude
       console.log(townsList);

   }

}
towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)