import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';

Meteor.startup(() => {
  // let obj = {
  //   name: 'Agus',
  //   printName(){
  //     console.log(`name: ${this.name}`);
  //   }
  // }
  // //obj.printName();
  // setTimeout(obj.printName.bind(obj), 1000);
});

// object spread operator
let user = {
  name: 'Agus',
  location: 'Boston',
  age: 0
};

let person ={
  ...user,      // the 'three dots' is object SPREAD operator
  age: 25
};

//console.log(person);

// Object Property Shorthand

let bike = 'Scott';
let stuff = {
  bike,
  laptop: 'Mac'
};

//console.log(stuff);

let house = {
  bedroom: 2,
  bathrooms: 1.5
};

let yearBuilt = 1995;

// {
//   bedroom: 3,
//   bathrooms: 1.5,
//   yearBuilt: 1995,
//   flooring:'carpet'
// }

let advertise = {
  ...house,
  yearBuilt,
  bedroom: 3,
  flooring: 'carpet'
};
console.log(advertise);
