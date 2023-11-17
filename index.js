document.addEventListener('touchstart', roll);

function roll() {

var randomNumber1 = Math.floor(Math.random()*3)-1;

var randomNumber2 = Math.floor(Math.random()*3)-1;

var randomNumber3 = Math.floor(Math.random()*3)-1;

var randomNumber4 = Math.floor(Math.random()*3)-1;

document.getElementById("die1").setAttribute("src", "./images/dice"+randomNumber1+".png");

document.getElementById("die2").setAttribute("src", "./images/dice"+randomNumber2+".png");

document.getElementById("die3").setAttribute("src", "./images/dice"+randomNumber3+".png");

document.getElementById("die4").setAttribute("src", "./images/dice"+randomNumber4+".png");

var result = randomNumber1 + randomNumber2 + randomNumber3 + randomNumber4;


if (result >= 1) {
  document.querySelector("h1").textContent = "Your result: +" + result;
} else {
  document.querySelector("h1").textContent = "Your result: " + result;
};

}