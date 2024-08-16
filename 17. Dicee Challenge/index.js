var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6 + 1;
randomNumber1 = Math.floor(randomNumber1);

var randomDice1 = "./images/dice" + randomNumber1 + ".png";
var images1 = document.querySelector(".dice .img1").setAttribute("src", randomDice1);


var randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 6 + 1;
randomNumber2 = Math.floor(randomNumber2);

var randomDice2 = "./images/dice" + randomNumber2 + ".png";
var images2 = document.querySelectorAll("img")[1].setAttribute("src", randomDice2);

if(randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 wins";
}
else if (randomNumber1 == randomNumber2){
  document.querySelector("h1").innerHTML = "Match draws";
}
else {
  document.querySelector("h1").innerHTML = "Player 2 wins";
}

// one line code
// document.querySelectorAll("img")[1].setAttribute("src", "./images/dice" + Math.floor(Math.random() * 6 + 1) + ".png");
