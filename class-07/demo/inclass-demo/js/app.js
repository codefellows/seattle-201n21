'use strict';

console.log('Hello World');

let myContainer = document.getElementById('container');
let hiveTable = document.getElementById('hive-table');
const allHives = [];

console.log(myContainer);

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


let hiveOne = new BeeHive('Hive One', [10, 15, 12], 'img/hive-one.jpg');
let hiveTwo = new BeeHive('Hive Two', [5, 6, 8], 'img/hive-two.jpg');
let hiveThree = new BeeHive('Hive Three', [13, 15, 20], 'img/hive-three.jpg');

function renderAll(){
  for (let i = 0; i< allHives.length; i++){
    allHives[i].render();
    allHives[i].renderSection();
  }
}

renderAll();
// hiveOne.render();
// hiveTwo.render();
// hiveThree.render();
// hiveOne.renderSection();
// hiveTwo.renderSection();
// hiveThree.renderSection();


