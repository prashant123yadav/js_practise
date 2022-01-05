const movieList = [
  {
    title: "jai ho",
    year: 2015,
    hero: "salman khan",
    imdbRating: 7.8,
  },
  {
    title: "hello brother",
    year: 1999,
    hero: "salman khan",
    imdbRating: 8.4,
  },
];
//console.log(movieList)
const titles = []
for(const movie of movieList){
    titles.push(movie.title)
}console.log(titles);
 
const salmanmovie = []
    //for(const movie of movieList) {
    if (movieList.hero ==="salman khan"){
    salmanmovie.push(movieList.hero)
    }
 console.log("there are " + salmanmovie.length + "in the list");
    
const bestTitles = []
    for (const movie of movieList){
    if (movie.imdbRating>5){
    bestTitles.push(movie.title)
}
} console.log(bestTitles)