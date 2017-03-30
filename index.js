
let contextFromAPI = fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`)
.then(response => response.json())
.then(object => object.results)
.then(arr => console.log(arr));

/*
let source = document.querySelector("#movies-now-playing-list").innerHTML;
let template = Handlebars.compile(source);
let githubPromises = contextFromAPI.map(user => {
  return fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`)
   .then(object => object.json());
})

Promise.all(githubPromises).then(placeInTemplate);

function placeInTemplate (githubUsers) {
  let html   = githubUsers.map(user => template(user)).join('');
  //the original, when context was just an object...
  //var html = template(context);
  let destination = document.querySelector('.handlebars-demo');
  destination.innerHTML = html;
}

*/



/*
function useJsonOnPage (json) {
  let name = document.querySelector('.movieName');
  name.textContent = json.original_title;
  let poster = document.querySelector('.movie_poster');
  poster.src = "https://image.tmdb.org/t/p/w500" + json.poster_path;
  let tagline = document.querySelector('.tagline');
  tagline.textContent = json.tagline;
  let home = document.querySelector('.synopsis');
  home.textContent = json.overview;
  let releaseDate = document.querySelector('.date');
  releaseDate.textContent = json.release_date;
}

fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=45569efe8c8f75d4edf172762038dbc1&language=en-US&page=1`)
.then(response => response.json())  //converting to json
.then(json => useJsonOnPage(json)); */
