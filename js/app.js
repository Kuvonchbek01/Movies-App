const movies = normalizedMovies.splice(0, 200);
const moviesContainer = document.getElementById("movies-container");
const infoBtn = document.querySelector(".infoBtn");
const infoModal = document.querySelector(".info-modal");
const infoClose = document.querySelector(".info-close");
const overlay = document.querySelector(".overlay");
const selectCat = document.getElementById('select-cat')
const categoriesAll = []


if (movies.length) {
  showMovies();
}

//showMovies
function showMovies() {
  movies.forEach((movie) => {
    const {
      categories,
      imdbId,
      smallPoster,
      title,
      year,
      trailer,
      imdbRating,
    } = movie;

    categories.forEach((cate) => {
      if(!categoriesAll.includes(cate)){
        categories.push(cate)
      }
    })

    moviesContainer.innerHTML += `
    <div class="card text-center d-flex">
    <div>
      <a target='_blank' class='album-link' href="${trailer}">
        <div class="album-cover">Trailer</div>
        <img
          src=${smallPoster}
          alt=""
          width="280"
          height="200"
        />
      </a>
    </div>
    <h4 class="mb-3">${title}</h4>
    <i class="mb-3">${categories}</i>
    <h4 class="mb-2">${year}</h4>
    <h4 class="d-flex align-items-center justify-content-center">
      <img class="star" src="./img/star.svg" alt="" />${imdbRating}
    </h4>
    <div class="d-flex flex-column gap-2 mt-auto">
      <button onclick="showMore('${imdbId}')" class="btn btn-primary infoBtn">See More</button>
      <button class="btn btn-outline-danger">💖 Bookmarks</button>
    </div>
  </div>
        `;
  });
}

function showMore(id) {
  movies.forEach((movie) => {
    const {
      categories,
      imdbId,
      smallPoster,
      title,
      year,
      trailer,
      imdbRating,
      summary,
      language,
      bigPoster,
      runtime,
    } = movie;
    if (imdbId == id) {
      infoModal.innerHTML = "";
      overlay.classList.remove("hidden");
      infoModal.classList.remove("hidden");
      infoModal.innerHTML += `
                  <div class="modal-top d-flex align-items-center justify-content-between p-3 border position-fixed w-100">
                  <h4>About Movie</h4>
                  <a class='btn btn-outline-light ' href="#">
                    <img class='info-close' src="./img/close.svg" alt="" width="30">
                  </a>
                </div>
                <div class="modal-action">
                  <img class="modal-action-img d-flex ms-auto me-auto mb-2" src=${smallPoster} alt="" >
                  <h4 class="text-center text-uppercase">${title}</h4>
                  <p class="d-flex justify-content-between align-items-center mt-4"><span class="list-info">Genre:</span><span>${categories}</span></p>
                  <p class="d-flex justify-content-between align-items-center mt-2"><span class="list-info">Year:</span><span>${year}</span></p>
                  <p class="d-flex justify-content-between align-items-center mt-2"><span class="list-info">Language:</span><span>${language}</span></p>
                  <p class="d-flex justify-content-between align-items-center mt-2"><span class="list-info">Runtime:</span><span>${runtime}</span></p>
                  <p class="mt-2"><span class="list-info">Summary:</span><span> ${summary}</span></p>
                </div>                 
                  `;
    }
  });

  categoriesAll.forEach((cate) => {
    selectCat.innerHTML += `
      <option value="${cate}">${cate}</option>
      `
      console.log(categoriesAll)
  })

}

document.addEventListener("click", (e) => {
  if (e.target.classList == "info-close") {
    infoModal.classList.add("hidden");
    infoModal.innerHTML = "";
    overlay.classList.add("hidden");
  }
});

overlay.addEventListener("click", () => {
  infoModal.classList.add("hidden");
  infoModal.innerHTML = "";
  overlay.classList.add("hidden");
});

/*
   <div class="card text-center">
            <div>
              <a class='album-link' href="#">
                <div class="album-cover">Trailer</div>
                <img
                  src="http://i3.ytimg.com/vi/4hZi5QaMBFc/hqdefault.jpg"
                  alt=""
                  width="280"
                  height="200"
                />
              </a>
            </div>
            <h3 class="mb-3">Patton Oswalt: Annihilation</h3>
            <i class="mb-3">Uncategorized</i>
            <h4 class="mb-2">2017</h4>
            <h4 class="d-flex align-items-center justify-content-center">
              <img class="star" src="./img/star.svg" alt="" />7.4
            </h4>
            <div class="d-flex flex-column gap-2">
              <button class="btn btn-primary">See More</button>
              <button class="btn btn-outline-danger">💖 Bookmarks</button>
            </div>
          </div>

*/

/*
    <div class="modal-top d-flex align-items-center justify-content-between p-3 border position-fixed w-100">
            <h4>About Movie</h4>
            <a href="#">
              <img src="./img/close.svg" alt="" width="30">
            </a>
          </div>
          <div class="modal-action">
            <img class="modal-action-img d-flex ms-auto me-auto mb-2" src="http://i3.ytimg.com/vi/H8oSvldAGfg/hqdefault.jpg" alt="" >
            <h4 class="text-center text-uppercase">5 Centimeters Per Second</h4>
            <p class="d-flex justify-content-between align-items-center mt-4"><span class="list-info">Genre:</span><span>Animation,Drama,Romance</span></p>
            <p class="d-flex justify-content-between align-items-center mt-2"><span class="list-info">Year:</span><span>2007</span></p>
            <p class="d-flex justify-content-between align-items-center mt-2"><span class="list-info">Language:</span><span>English</span></p>
            <p class="d-flex justify-content-between align-items-center mt-2"><span class="list-info">Runtime:</span><span>63</span></p>
            <p class="mt-2"><span class="list-info">Summary:</span><span>Takaki and Akari are two classmates in elementary school. During their time together they have become close friends. Their relationship is tested when Akari moves to another city because of her parents' jobs. Both of them struggle to keep their friendship alive, as time and distance slowly pulls them apart. When Takaki finds out that he is moving further away, he decides to visit Akari one last time.</span></p>
          </div>
*/
