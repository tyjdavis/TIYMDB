
let nowPlayingFromAPI = fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`)
.then(response => response.json())
.then(object => object.results) //results not pickles
.then(getDetailsFromAPI)



function getDetailsFromAPI (arr) {
let promises = arr.map( (movie, index) => { //map (element that we're iterating over (objects within result), 0-19)
  return fetch (`https://api.themoviedb.org/3/movie/${movie.id}?api_key=${key}&language=en-US`)
  .then(response => response.json())
  .then(movie => {
    arr[index].runtime = movie.runtime;  //the runtime property of first movie is
    return arr[index];})


  .then( movie => {  //movie from line 16
    return fetch (`https://api.themoviedb.org/3/movie/${movie.id}/credits?api_key=${key}`)
    .then(response => response.json())
    .then(movieCastData => {
      arr[index].cast = [];
      arr[index].cast[0] = movieCastData.cast[0].name;
      arr[index].cast[1] = movieCastData.cast[1].name;
      arr[index].cast[2] = movieCastData.cast[2].name;
      arr[index].cast[3] = movieCastData.cast[3].name;
      return arr[index];
    });
  });
});

  Promise.all(promises).then(placeInTemplate);
}








let source = document.querySelector("#movies-now-playing-list").innerHTML;
let template = Handlebars.compile(source);

function placeInTemplate (movies) {
      let html = movies.map(obj => template(obj)).join('');
      let destination = document.querySelector('.handlebars-demo');
      destination.innerHTML = html;
}
