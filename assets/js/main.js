//create variable for api url
const urlCard = "https://lanciweb.github.io/demo/api/pictures/";

//get data from api usingh ajax call
fetch(urlCard)
  //get response data and transform it in json object
  .then(response => response.json())
  //get json object and print it 
  .then(data => {
    console.log(data);
  })