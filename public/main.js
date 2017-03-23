
const carousel = document.querySelector('.carousel-content');
const documentariesCategory = document.getElementById('documentaries');
const liveEventsCategory = document.getElementById('live-events');
const shortFilmsCategory = document.getElementById('short-films');

fetch('https://content.jwplatform.com/feeds/f49AJ8N4.json').then(function(response) { 
    return response.json();
  }).then(function(j) {
    populateCategories(j.playlist);
});

function populateCategories(films) {
  const documentaries = [];
  const liveEvents = [];
  const shortFilms = [];
  for (i = 0; i <= films.length; i++) {
    if (i <= 8) {
      documentaries.push(films[i]);
    } else if (i > 8 && i <= 13) {
      liveEvents.push(films[i]);
    } else {
      shortFilms.push(films[i]);
    }
  }
  listFilms(documentaries, documentariesCategory);
  listFilms(liveEvents, liveEventsCategory);
  listFilms(shortFilms, shortFilmsCategory);
}


function listFilms(list, category) {
  for (i = 0; i < list.length; i++) {

    const film = document.createElement('div');
    const titleBar = document.createElement('div');
    const title = document.createTextNode(list[i].title);

    film.classList.add('film');
    titleBar.classList.add('title-bar');
    film.style.backgroundImage = "url('http:" + list[i].image + "')";

    titleBar.appendChild(title);
    film.appendChild(titleBar);
    category.appendChild(film);
  }
};



