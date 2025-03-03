//create variables to get DOM elements
const rowEl = document.getElementById('grid_row');
const modalEl = document.getElementById('modal');
const closeModalBtnEl = document.getElementById('close_modal');
const modalImgEl = document.querySelector('#modal img');
console.log(rowEl, closeModalBtnEl);

//create variable for api url to use it in ajax call
const urlEndpoint = "https://lanciweb.github.io/demo/api/pictures/";

//start with init function
init();




//FUNCTIONS

/**
 * Construct a markup card element and returns it
 * @param {object} element 
 * @returns {string} markup string
 */
function getMarkup(element) {
  //create markup to add it dinamically in the page
  const markup = `
    <div class="col">
      <div class="image_card">
      <img id="img_photo" class="img-fluid" src="${element.url}"
        alt="${element.id} image">
        <img id="img_pin" src="./assets/img/pin.svg" alt="image pin">
        <div id="img_date">${element.date}</div>
        <div id="img_title">${element.title.toUpperCase()}</div>
      </div>
    </div>
  `;

  return markup;
}

/**
 * Display all the cards got
 * @param {Array} cards 
 * @returns {void} 
 */
function displayElements(cards) {

  //forEach cicle to get through all the elements of the array received and transformed
  cards.forEach((element) => {

    //get markup to add it in page
    const markup = getMarkup(element);

    //insert markup to the page
    rowEl.insertAdjacentHTML('beforeend', markup);
  });
}

/**
 * Display the modal with card attributes
 * @param {Node} card
 * @returns {void} 
 */
function displayModal(card) {

  //get the src and the alt of each card
  const imgPhoto = card.querySelector('img');
  const imgPhotoSrc = imgPhoto.src;
  const imgPhotoAlt = imgPhoto.alt;

  //remove d-none class to modal and set his src and alt attributes
  modalEl.classList.remove('d-none');
  modalImgEl.src = imgPhotoSrc;
  modalImgEl.alt = imgPhotoAlt;
}

/**
 * Init function to start fetch
 * @returns {void}
 */
function init() {
  //get data from api usingh ajax call
  fetch(urlEndpoint)
    //get response data and transform it in json object
    .then(response => response.json())
    //get json object and call display function 
    .then(data => {
      displayElements(data);

      //add event listener to each card
      const cardsEl = document.querySelectorAll('#grid_row > .col > .image_card');
      console.log(cardsEl, modalEl);

      //forEach cicle to cicle on each generated card
      cardsEl.forEach((card) => {
        //add event listener to each card
        card.addEventListener('click', function () {

          displayModal(card);
        })
      });
    })
    //cacth some error eventually
    .catch(error => console.error(error));

  //add event listener to modal close button
  closeModalBtnEl.addEventListener('click', function () {
    //add class d-none to modal to remove it from the viewport
    modalEl.classList.add('d-none');
  });
}

