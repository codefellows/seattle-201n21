'use strict';

// get the each store element by id.

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm' ];

function randomCustomerPerHour () {
  //getsthe randomcustomersper hour
}

let seattle = {
  name: 'Seattle',
  // The minimum number of customers per hour.
  minimumCustomerEachHour: 23,
  // The maximum number of customers per hour.
  maximumCustomerEachHour: 65,
  // The average number of cookies purchased per customer
  averageCookiesSoldPerCustomer: 6.3,
  // will hold the calculated number of cookies sold each  hour
  cookiesSoldPerHourArray: [],
  // will hold the calcuated number of cookies sold in the store all day long
  dailyStoreTotal: 0,
  // a method to calculate random number of customers per hour
  // docs used: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  randomCustomerEachHour:  function(){
    // console.log('Im in randomCustomerEachHour');
    // generates a random number of customers inclusive of  the min and the max
    return Math.floor(Math.random() * (this.maximumCustomerEachHour - this.minimumCustomerEachHour + 1) + this.minimumCustomerEachHour);
  },
  // a method to calcualte and populate our number of cookies sold per hour array
  calcCookiesSoldEachHour: function () {
    let randomCustmerForOneHour = this.randomCustomerEachHour();
    console.log(randomCustmerForOneHour);
    console.log('I am inside of calcCookiesSoldEachHour');
    // do something maybe use a for loop
    //     multiply customer number by avg
    //     handle the number. do some rounding
    //     //  proof of life
    //     push into the  cookiesSoldPerHourArray
  },
  // a method to render the list items.
  render: function (){
    this.calcCookiesSoldEachHour();
    console.log('I am in the render method');
    // do something
  }
};

let paris = {
  name: 'Paris',
  // The minimum number of customers per hour.
  minimumCustomerEachHour: 23,
  // The maximum number of customers per hour.
  maximumCustomerEachHour: 65,
  // The average number of cookies purchased per customer
  averageCookiesSoldPerCustomer: 6.3,
  // will hold the calculated number of cookies sold each  hour
  cookiesSoldPerHourArray: [],
  // will hold the calcuated number of cookies sold in the store all day long
  dailyStoreTotal: 0,
  // a method to calculate random number of customers per hour
  // docs used: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  randomCustomerEachHour:  function(){
    // console.log('Im in randomCustomerEachHour');
    // generates a random number of customers inclusive of  the min and the max
    return Math.floor(Math.random() * (this.maximumCustomerEachHour - this.minimumCustomerEachHour + 1) + this.minimumCustomerEachHour);
  },
  // a method to calcualte and populate our number of cookies sold per hour array
  calcCookiesSoldEachHour: function () {
    let randomCustmerForOneHour = this.randomCustomerEachHour();
    console.log(randomCustmerForOneHour);
    console.log('I am inside of calcCookiesSoldEachHour');
    // do something maybe use a for loop
    //     multiply customer number by avg
    //     handle the number. do some rounding
    //     //  proof of life
    //     push into the  cookiesSoldPerHourArray
  },
  // a method to render the list items.
  render: function (){
    this.calcCookiesSoldEachHour();
    console.log('I am in the render method');
    // do something
  }
};

seattle.render();
paris.render();

