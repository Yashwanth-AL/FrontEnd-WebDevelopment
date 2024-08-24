const URL = "https://cat-fact.herokuapp.com/facts";
let fact = document.querySelector("h1");

const getFact = async () => {
  console.log("getting data from API....");
  let response = await fetch(URL);
  console.log(response); //This is in json format
  let data = await response.json(); //This json method converts the data into usable format.
  fact.innerText = data[0].text;
}


function getFacts() {
  fetch(URL).then((response) => {
    return response.json();
  }).then((data) => {
    fact.innerText = data[0].text;
  })
}
