const movieList = [
  {
    title: "Batman",
    year: 1989,
    director: "Tim Burton",
    imdbRating: 7.6,
  },
  {
    title: "Batman Returns",
    year: 1992,
    director: "Tim Burton",
    imdbRating: 7.0,
  },
  {
    title: "Batman Forever",
    year: 1995,
    director: "Joel Schumacher",
    imdbRating: 5.4,
  },
  {
    title: "Batman & Robin",
    year: 1997,
    director: "Joel Schumacher",
    imdbRating: 3.7,
  },
  {
    title: "Batman Begins",
    year: 2005,
    director: "Christopher Nolan",
    imdbRating: 8.3,
  },
  {
    title: "The Dark Knight",
    year: 2008,
    director: "Christopher Nolan",
    imdbRating: 9.0,
  },
  {
    title: "The Dark Knight Rises",
    year: 2012,
    director: "Christopher Nolan",
    imdbRating: 8.5,
  },
];
const titles = [];
for (const movie of movieList) {
  titles.push(movie.title);
}
console.log(titles);

const nolanMovieList = [];
for (const movie of movieList) {
  if (movie.director === "Christopher Nolan") {
    nolanMovieList.push(movie);
  }
}

const moviebefore2000 = [];
for(const movie of movieList){
  if(movie.year < 2000){
    moviebefore2000.push(movie);
  }
}
console.log("2000",moviebefore2000)

  const titleofmovie2000 = [];
  for(const movie of movieList){
    if (movie.year < 2000){
      titleofmovie2000.push(movie.title)
    }
  }
console.log(titleofmovie2000)

// console.log(
//   "There are " +
//     nolanMovieList.length +
//     " Christopher Nolan movies in the list."
// );
// const bestTitles = [];
// for (const movie of movieList) {
//   if (movie.imdbRating >= 7.5) {
//     bestTitles.push(movie.title);
//   }
// }
// console.log(bestTitles);
// let ratingSum = 0;
// let averageRating = 0;
// for (const movie of nolanMovieList) {
//   ratingSum += movie.imdbRating;
// }
// averageRating = ratingSum / nolanMovieList.length;
// console.log(averageRating);
// //console.log(movieList)

const imdbabove5 = [];
for(const movie of movieList){
  if (movie.imdbRating >=8){
    imdbabove5.push(movie)
  }
}
 
console.log("above5",imdbabove5) 


const oddyear = [];
const evenyear  = [];
for(const movie of movieList){
  if (movie.year % 2 === 0){
    evenyear.push(movie)
  } 
else{
  oddyear.push(movie)
} 
} 
 console.log("even",evenyear);
 console.log("odd",oddyear);
   
