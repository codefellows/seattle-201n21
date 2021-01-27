'use strict';

console.log('Hello World');


// DOM - Document Object Model
// get the element form the dom that has an id of comtainer
// A. get the element from the DOM - key to the city
let myContainer = document.getElementById('container');
let seattleList = document.getElementById('seattle');

//get proof of life - is this working!!!  it works!!
console.log(myContainer);

// 1. create the element
let section = document.createElement('section');
// 2. give it content
//     we'll geet to that
// 3. append to the DOM append (to its parent // or directly to the DOM)
// syntax is parent.appendChild(child)
myContainer.appendChild(section);

// create the image
//1. create the element
let img = document.createElement('img');
//2. give it content
img.src = 'img/bee-brood-closeup-1.jpg';
img.alt = 'closeup picture of brood';
img.title = 'Bee Brood';
//3. append it the DOM
section.appendChild(img);

let articleElement =document.createElement('article');
section.appendChild(articleElement);

let h3 =  document.createElement('h3');
h3.textContent = 'Hive One';
articleElement.appendChild(h3);

//create element
let p = document.createElement('p');
// give THAT ELEMENT content
p.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
//appending THAT ELEMENT to the DOM
articleElement.appendChild(p);


var beeHive  = {
  name: 'cool',
  yield: ['10 lbs', '15 lbs', '12 lbs'],
  render: function(){
    for (let i = 0; i <this.yield.length; i++){
      var li = document.createElement('li');
      li.textContent = this.yield[i];
      seattleList.appendChild(li);
    }
  }
};

beeHive.render();


