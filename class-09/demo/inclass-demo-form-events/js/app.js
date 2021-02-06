'use strict';

// get element from DOM - step one for adding an event listener
// step 1: part of add event listener - get element fromt he DOM
// let myContainer = document.getElementById('container');
let myForm = document.getElementById('container-two');
let parentEl = document.getElementById('results');

//step 3:  create event handler to do specific things when event is FIRED or RAISED
// event Handler
// takes in ONE parameter - the event
// function handleClick(event){
//   // console.log('the event', event);
//   // console.log('the event.target is ', event.target);
//   console.log('the event.target.textContent ', event.target.textContent);
//   console.log('the event.target.id is ', event.target.id);

//   if (event.target.id === 'box-one'){
//     let pEl = document.createElement('p');
//     pEl.textContent = 'Box 1 was clicked!';
//     parentEl.append(pEl);
//   } else if (event.target.id === 'box-two'){
//     let pEl = document.createElement('p');
//     pEl.textContent = 'clicked:  Box 2!';
//     parentEl.append(pEl);
//   } else if (event.target.id === 'box-three'){
//     let pEl = document.createElement('p');
//     pEl.textContent = 'Box 3 done got clicked!';
//     parentEl.appendChild(pEl);
//   } else {
//     let pEl = document.createElement('p');
//     pEl.textContent = 'FOLLOW INSTRUCTIONS!!!';
//     parentEl.appendChild(pEl);
//   }
// }

// step 2: add event listener, we pass in two arguements!  event as string, and callback function
// myContainer.addEventListener('click', handleClick);

// form event handler
// step 3.  Event Handler:  declare Callback function with ONE paramaeter
// parameter = event
function handleSubmit(event){
  event.preventDefault();

  var firstName = event.target.firstname.value;
  console.log(firstName);

  var lastName = event.target.lastname.value;
  console.log(lastName);

  // parseInt() or + symbol changes this from a string to a number
  var age = +event.target.age.value;
  console.log(typeof age);


  var pet = event.target.pets.value;
  console.log(pet);
}


// step 2: add event listener, pass in the two arguements:
// arg 1:  event
// arg 2: function name CALLBACK function
myForm.addEventListener('submit', handleSubmit);
