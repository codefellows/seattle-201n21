'use strict';

// this  is for the section rendering // not relevant for table
let myContainer = document.getElementById('container');
let myForm = document.querySelector('form');
console.log(myForm);

let hiveTable = document.querySelector('table');
const months = ['July', 'August', 'September'];
const allHives = [];
let footerTotals = [];
let grandTotal  = 0;

function BeeHive(name, honeyYield, imgSrc) {
  this.name = name;
  this.honeyYield = honeyYield;
  this.imgSrc = imgSrc;
  this.totalYield = 0;
  allHives.push(this);
}

BeeHive.prototype.calcYield = function () {
  for (let i = 0; i < this.honeyYield.length; i++) {
    this.totalYield += this.honeyYield[i];
  }
};

BeeHive.prototype.render = function () {
  // create tr and append to DOM, all of its content is below
  let tr = document.createElement('tr');
  hiveTable.appendChild(tr);

  // create th, give content,append to DOM
  let th = document.createElement('th');
  th.textContent = this.name;
  tr.appendChild(th);
  // create multiple tds, give content,append to DOM
  for (let i = 0; i < this.honeyYield.length; i++) {
    this.totalYield += this.honeyYield[i];
    let td = document.createElement('td');
    td.textContent = this.honeyYield[i];
    tr.appendChild(td);
  }
  // create total td, give content,append to DOM
  let td = document.createElement('td');
  td.textContent = this.totalYield;
  tr.appendChild(td);
};

BeeHive.prototype.renderSection = function () {
  // create section and append to DOM, all of its content is below
  let section = document.createElement('section');
  myContainer.appendChild(section);

  // create image, "give content",append to DOM
  let img = document.createElement('img');
  img.src = this.imgSrc;
  img.alt = 'closeup picture of brood';
  img.title = 'Bee Brood';
  section.appendChild(img);

  // create article and append to DOM, all of its content is below
  let article = document.createElement('article');
  section.appendChild(article);

  // create h3, give it content, append to DOM
  let h3 = document.createElement('h3');
  h3.textContent = this.name;
  article.appendChild(h3);

  // create p, give it content, append to DOM
  let p = document.createElement('p');
  p.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
  article.appendChild(p);
};

function renderAll() {
  for (let i = 0; i < allHives.length; i++) {
    allHives[i].render();
    allHives[i].renderSection();
  }
}

// A. have a place on DOM toappend it to!  getElement by ID or querySelector
// 1. create the element
// 2. give it content
// 3. append it to the DOM / it's Parent

function renderHeader() {
  let thead = document.createElement('thead');
  let tr = document.createElement('tr');
  let th = document.createElement('th');
  th.textContent = '';
  tr.appendChild(th);

  for (let i = 0; i < months.length; i++) {
    let th = document.createElement('th');
    th.textContent = months[i];
    tr.appendChild(th);
  }
  th = document.createElement('th');
  th.textContent = 'Total Yield';
  tr.appendChild(th);

  thead.appendChild(tr);
  hiveTable.appendChild(thead);

}

function renderFooter() {
  calcFooterTotals();
  let tfoot = document.createElement('tfoot');
  let tr = document.createElement('tr');
  let td = document.createElement('td');
  td.textContent = 'Totals';
  tr.appendChild(td);

  for (let i = 0; i < months.length; i++) {
    let td = document.createElement('td');
    td.textContent = footerTotals[i];
    tr.appendChild(td);
  }
  td = document.createElement('td');
  td.textContent = grandTotal;
  tr.appendChild(td);

  tfoot.appendChild(tr);
  hiveTable.appendChild(tfoot);
}

function calcFooterTotals(){
  footerTotals = []; // mychoice to clear out array & recalculate totals
  grandTotal = 0; // reset here for recalcualtingtotals with form
  for (let i = 0; i < months.length; i++){
    let monthTotal = 0;
    for (let j = 0; j < allHives.length; j++){
      // allHives[j]:  grabs that first store ROW in allHives
      // honeyYield[i]: grabs each element  in the honeyYield ARRAY
      monthTotal += allHives[j].honeyYield[i];
    }
    // at this pont we HAVE a monthyTotal
    footerTotals.push(monthTotal);
    grandTotal += monthTotal;
  }
}

function handleSubmit(event){
  event.preventDefault();

  let hiveName = event.target.hivename.value;
  let yieldOne = +event.target.yieldone.value;
  let yieldTwo = +event.target.yieldtwo.value;
  let yieldThree = +event.target.yieldthree.value;
  let honeyYield = [yieldOne, yieldTwo, yieldThree];
  let imgSrc = event.target.imgsrc.value;

  let newHive = new BeeHive(hiveName, honeyYield, imgSrc);
  newHive.render();
  newHive.renderSection();

  //clear out footer rwo.
  //rerender footer row with correct totals
}

new BeeHive('Hive One', [10, 15, 12], 'img/hive-one.jpg');
new BeeHive('Hive Two', [5, 6, 8], 'img/hive-two.jpg');
new BeeHive('Hive Three', [13, 15, 20], 'img/hive-three.jpg');

renderHeader();
renderAll();
renderFooter();



myForm.addEventListener('submit', handleSubmit);
