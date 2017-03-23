
const swiperWrapper = document.querySelector('.swiper-wrapper');
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
  for (i = 0; i <= films.length - 1; i++) {
    if (i <= 6) {
      documentaries.push(films[i]);
    } else if (i > 6 && i <= 13) {
      liveEvents.push(films[i]);
    } else {
      shortFilms.push(films[i]);
    }
  }
  listFilms(documentaries, documentariesCategory);
  listFilms(liveEvents, liveEventsCategory);
  listFilms(shortFilms, shortFilmsCategory);
  populateCarousel(films);
}


function listFilms(list, category) {
  for (i = 0; i < list.length; i++) {

    const film = document.createElement('div');
    const titleBar = document.createElement('div');
    const title = document.createTextNode(list[i].title);
    const menu = document.createElement('img');

    film.classList.add('film');
    titleBar.classList.add('title-bar');
    menu.classList.add('menu');

    film.style.backgroundImage = "url('http:" + list[i].image + "')";
    menu.src = 'assets/menu.svg';

    titleBar.appendChild(title);
    film.appendChild(titleBar);
    film.appendChild(menu);
    category.appendChild(film);
  }
};

function populateCarousel(films) {
  const featured = films.splice(10, 4);

  for (i = 0; i < featured.length; i++) {
    const slide = document.createElement('div');
    const titleWrap = document.createElement('div');
    const title = document.createTextNode(featured[i].title);
    const descriptionWrap = document.createElement('div');
    const description = document.createTextNode(featured[i].description);
    const playButton = document.createElement('img');

    slide.classList.add('swiper-slide');
    titleWrap.classList.add('slide-title');
    descriptionWrap.classList.add('slide-description');
    playButton.classList.add('play-button');

    slide.style.backgroundImage = "url('http:" + featured[i].image + "')";
    playButton.src = 'assets/play.svg';

    titleWrap.appendChild(title);
    descriptionWrap.appendChild(description);
    slide.appendChild(titleWrap);
    slide.appendChild(descriptionWrap);
    slide.appendChild(playButton);
    swiperWrapper.appendChild(slide);

    const carousel = new Swiper ('.swiper-container', {
      paginationHide: false,
      pagination: '.swiper-pagination',
      slidesPerView: 2,
      loop: true,
      slidesOffsetBefore: 1,
      centeredSlides: true,
      paginationClickable: true,
      spaceBetween: 10,
      nextButton: '.next-slide',
      prevButton: '.prev-slide'
    });
  }
};





