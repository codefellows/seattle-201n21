'use strict';

// Global Variables
let totalClicks = 0;
let clicksAllowed = 15;
let allGoats = [];
let imageOne = document.querySelector('section img:first-child');
let imageTwo = document.querySelector('section img:nth-child(2)');
let myContainer = document.querySelector('section');
let myButton = document.querySelector('div');

function Goat(name, fileExtension = 'jpg') {
  this.name = name;
  this.src = `img/${name}.${fileExtension}`;
  this.views = 0;
  this.clicks = 0;
  allGoats.push(this);
}

new Goat('bunny-goat', 'png');
new Goat('cool-goat');
new Goat('cruisin-goat');
new Goat('float-your-goat');
new Goat('goat-out-of-hand');
new Goat('kissing-goat');
new Goat('lucky-goat');
new Goat('sassy-goat');
new Goat('smiling-goat');
new Goat('sweater-goat');

function getRandomIndex() {
  return Math.floor(Math.random() * allGoats.length);
}

function renderGoats() {
  let firstGoatIndex = getRandomIndex();
  let secondGoatIndex = getRandomIndex();
  //  in lab today I recommend using an array.
  // maybe name itindexArray
  // check to see if the index is included in that array
  // pop those results from the array or shift?  maybe?
  while (firstGoatIndex === secondGoatIndex) {
    secondGoatIndex = getRandomIndex();
  }

  imageOne.src = allGoats[firstGoatIndex].src;
  imageOne.title = allGoats[firstGoatIndex].name;
  allGoats[firstGoatIndex].views++;

  imageTwo.src = allGoats[secondGoatIndex].src;
  imageTwo.title = allGoats[secondGoatIndex].name;
  allGoats[secondGoatIndex].views++;
}

function renderResults(){
  let myList = document.querySelector('ul');
  for (let i = 0; i < allGoats.length; i++){
    let li = document.createElement('li');
    li.textContent = `${allGoats[i].name} had ${allGoats[i].views} votes, and was seen ${allGoats[i].clicks} times`;
    myList.appendChild(li);
  }
}

function handleClick(event) {
  if (event.target === myContainer){
    alert('Please click an image and FOLLOW INSTRUCTIONS');
  }

  totalClicks++;
  let goatClicked = event.target.title;

  for (let i = 0; i < allGoats.length; i++){
    if (goatClicked === allGoats[i].name) {
      allGoats[i].clicks++;
    }
  }

  renderGoats();
  if (totalClicks === clicksAllowed) {
    // REMOVE EVENT LISTENER
    myContainer.removeEventListener('click', handleClick);
  }

}

function handleButtonClick(event){ //eslint-disable-line

  if(totalClicks === clicksAllowed){
    renderResults();
  }
}

renderGoats();


myContainer.addEventListener('click', handleClick);
myButton.addEventListener('click', handleButtonClick);
