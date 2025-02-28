//create variables to get DOM elements
const gridRowEl = document.getElementById('grid_row');
console.log(gridRowEl);

//create variable for api url to use it in ajax call
const urlCard = "https://lanciweb.github.io/demo/api/pictures/";

//get data from api usingh ajax call
fetch(urlCard)
  //get response data and transform it in json object
  .then(response => response.json())
  //get json object and print it 
  .then(data => {

    console.log(data);


  }).catch(error => console.error(error));