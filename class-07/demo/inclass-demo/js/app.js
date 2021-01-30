'use strict';

console.log('Hello World');

let myContainer = document.getElementById('container');
let seattleList = document.getElementById('seattle');

console.log(myContainer);

// create section and append to DOM, all of its content is below
let section = document.createElement('section');
myContainer.appendChild(section);

// create image, "give content",append to DOM
let img = document.createElement('img');
img.src = 'img/bee-brood-closeup-1.jpg';
img.alt = 'closeup picture of brood';
img.title = 'Bee Brood';
section.appendChild(img);

// create article and append to DOM, all of its content is below
let article =document.createElement('article');
section.appendChild(article);

// create h3, give it content, append to DOM
let h3 =  document.createElement('h3');
h3.textContent = 'Hive One';
article.appendChild(h3);

// create p, give it content, append to DOM
let p = document.createElement('p');
p.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
article.appendChild(p);


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


