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
  }
  // renderChart();
}


renderGoats();

function renderChart() {
  let goatNames = [];
  let goatViews = [];
  let goatClicks = [];
  for (let i = 0; i < allGoats.length; i++) {
    goatNames.push(allGoats[i].name);
    goatViews.push(allGoats[i].views);
    goatClicks.push(allGoats[i].clicks);
  }
  console.log('goatNames: ', goatNames);
  console.log('goatViews', goatViews);
  console.log('goatClicks', goatClicks);
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
  let myChart = new Chart(ctx, chartObject);
}

myContainer.addEventListener('click', handleClick);
