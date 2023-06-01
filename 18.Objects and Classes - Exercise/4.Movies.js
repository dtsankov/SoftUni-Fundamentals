function movies(input){
let movieList = []

    for (const line of input) {
          if(line.includes('addMovie')){
              let movieName = line.split('addMovie ')[1]
              movieList.push({name:movieName})
              
          }else if (line.includes('directedBy')){
            let tokens = line.split(' directedBy ')
            let name = tokens[0]
            let director = tokens[1]
            let movie = movieList.find((movieObj)=>movieObj.name === name)
            if(movie){
                movie.director = director

            }
          }else if(line.includes('onDate')){
            let tokens = line.split(' onDate ')
             let name = tokens[0]
             let date = tokens[1]
            let movie = movieList.find((movieObj)=> movieObj.name === name)
             if(movie){
                movie.date = date
            }
          }
    }

     for (const movie of movieList) {
         if(movie.name && movie.director && movie.date){
             console.log(JSON.stringify(movie));
         }
     }
}
movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]
    )
    console.log('---');
    movies([
        'addMovie The Avengers',
        'addMovie Superman',
        'The Avengers directedBy Anthony Russo',
        'The Avengers onDate 30.07.2010',
        'Captain America onDate 30.07.2010',
        'Captain America directedBy Joe Russo'
        ]
        )
    console.log('---');
     
