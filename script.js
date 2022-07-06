"use strict";

const dogResult = document.getElementById("dogResult");
const foxResult = document.getElementById("foxResult");
const dogBtn = document.getElementById("dogBtn");
const foxBtn = document.getElementById("foxBtn");

dogBtn.addEventListener("click", getRandomDog);
foxBtn.addEventListener("click", getRandomFox);

function getRandomDog() {
  fetch("https://random.dog/woof.json")
    .then((res) => res.json())
    .then((data) => {
      dogResult.innerHTML = `<img src="${data.url}"/>`;
    });
}

function getRandomFox() {
  fetch("https://randomfox.ca/floof/")
    .then((res) => res.json())
    .then((data) => {
      foxResult.innerHTML = `<img src="${data.image}"/>`;
    });
}
