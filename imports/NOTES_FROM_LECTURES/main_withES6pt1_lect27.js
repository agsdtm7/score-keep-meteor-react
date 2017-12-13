import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';

Meteor.startup(() => {
  class Person{
    // put a constructor with a default value
    constructor(name = 'Anonymous', age = 0){
      this.name = name;
      this.age = age;
    }
    getGreeting(){
      // Normal way
      //return 'Hi! I am ' + this.name + '.'
      // Using ES6 Template String
      return `Hi! I am ${this.name}.`;
    }
    getPersonDescription(){
      return `${this.name} is ${this.age} year(s) old.`
    }
  }

  let me = new Person('Ponyo');
  console.log(me.getGreeting());

  let you = new Person('Gege');
  console.log(you.getPersonDescription());
});
