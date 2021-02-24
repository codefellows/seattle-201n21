'use strict';

// Global Variables
let totalClicks = 0;
let clicksAllowed = 15;
let allGoats = [];
let indexArray = [];
let uniqueImageCount = 4;
let imageOne = document.querySelector('section img:first-child');
let imageTwo = document.querySelector('section img:nth-child(2)');
let myContainer = document.querySelector('section');

function Goat(name, fileExtension = 'jpg') {
  this.name = name;
  this.src = `img/${name}.${fileExtension}`;
  this.views = 0;
  this.clicks = 0;
  allGoats.push(this);
}

//////////////// Retrieving From Local Storage
// 1. get the data from local storage using its key
let retrievedGoats = localStorage.getItem('goats');

// 3. use local storage in a way that doesn't BREAk your existing code!
if(retrievedGoats){
  //2. make that data useable again by parsing it
  let parsedGoats = JSON.parse(retrievedGoats);
  allGoats = parsedGoats;
} else {
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
}


function getRandomIndex() {
  return Math.floor(Math.random() * allGoats.length);
}

function renderGoats() {
  while (indexArray.length < uniqueImageCount) {
    let randomIndex = getRandomIndex();
    while (!indexArray.includes(randomIndex)) {
      indexArray.push(randomIndex);
    }
  }
  // console.log(indexArray);
  let firstGoatIndex = indexArray.shift();
  let secondGoatIndex = indexArray.shift();

  imageOne.src = allGoats[firstGoatIndex].src;
  imageOne.title = allGoats[firstGoatIndex].name;
  allGoats[firstGoatIndex].views++;

  imageTwo.src = allGoats[secondGoatIndex].src;
  imageTwo.title = allGoats[secondGoatIndex].name;
  allGoats[secondGoatIndex].views++;
}

String.prototype.capitalize = function(){
  return this.charAt(0).toUpperCase() + this.slice(1);
};

function handleClick(event) {
  if (event.target === myContainer) {
    alert('Please click an image and FOLLOW INSTRUCTIONS');
  }

  totalClicks++;
  let goatClicked = event.target.title;

  for (let i = 0; i < allGoats.length; i++) {
    if (goatClicked === allGoats[i].name) {
      allGoats[i].clicks++;
    }
  }

  renderGoats();
  if (totalClicks === clicksAllowed) {
    // REMOVE EVENT LISTENER
    myContainer.removeEventListener('click', handleClick);
    renderChart();
    //////////////// Saving To Local Storage
    // 1. stringify the data
    let stringifiedGoats = JSON.stringify(allGoats);
    // console.log(stringifiedGoats);
    // 2. Save to Local Storage
    localStorage.setItem('goats', stringifiedGoats);
  }
}

renderGoats();

function renderChart() {
  let goatNames = [];
  let goatViews = [];
  let goatClicks = [];
  for (let i = 0; i < allGoats.length; i++) {
    goatNames.push(allGoats[i].name.capitalize());
    goatViews.push(allGoats[i].views);
    goatClicks.push(allGoats[i].clicks);
  }
  var chartObject = {
    type: 'bar',
    data: {
      labels: goatNames,
      datasets: [{
        label: 'Views',
        data: goatViews,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 3
      },
      {
        label: 'Clicks',
        data: goatClicks,
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 3
      }]
    },
    responsive: false,
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  };

  let ctx = document.getElementById('myChart').getContext('2d');
  let myChart = new Chart(ctx, chartObject); //eslint-disable-line
}

myContainer.addEventListener('click', handleClick);
