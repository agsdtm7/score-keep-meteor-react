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

  class Employee extends Person{
    constructor(name, age, title){
      super(name, age);
      this.title = title;
    }
    getGreeting(){
      if(this.title){
        return `Hi! I am ${this.name}. I work as a ${this.title}`;
      }else{
        return super.getGreeting();
      }
    }

    hasJob(){
      // flipping the value twice so that 'undefined' has a title
      return !!this.title;
    }
  }

  class Programmer extends Person{
    constructor(name, age, preferredLanguage = 'Assembly'){
      super(name, age);
      this.preferredLanguage = preferredLanguage;
    }
    getGreeting(){
      return `Hi I am ${this.name}, I am a ${this.preferredLanguage} developer`
    }
  }
  let jake = new Programmer();
  console.log(jake.getGreeting());
  // Programmer -> extends from Person
  // name, age, preferredLanguage defaults
});
  // TESTS
  /*
  let me = new Employee('Ponyo', 26, 'db admin');
  console.log(me.getGreeting());
  console.log(me.hasJob());

  let you = new Employee('Gege');
  console.log(you.getPersonDescription());
  console.log(you.hasJob());
  console.log(you.getGreeting());
  */
