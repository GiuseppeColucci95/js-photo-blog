//create variables to get DOM elements
const rowEl = document.getElementById('grid_row');
console.log(rowEl);

//create variable for api url to use it in ajax call
const callUrl = "https://lanciweb.github.io/demo/api/pictures/";

//get data from api usingh ajax call
fetch(callUrl)
  //get response data and transform it in json object
  .then(response => response.json())
  //get json object and print it 
  .then(data => {

    //forEach cicle to get through all the elements of the array received and transformed
    data.forEach((element) => {

      //create markup to add it dinamically in the page
      const markup = `
        <div class="col-4">
          <div class="image_card">
            <img id="img_pin" src="./assets/img/pin.svg" alt="image pin">
            <img id="img_photo" class="img-fluid" src="${element.url}"
              alt="${element.id} image">
            <div id="img_date">${element.date}</div>
            <div id="img_title">${element.title.toUpperCase()}</div>
          </div>
        </div>
      `;

      //insert markup to the page
      rowEl.insertAdjacentHTML('beforeend', markup);
    });

  })
  //cacth some error eventually
  .catch(error => console.error(error));