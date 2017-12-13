import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';

Meteor.startup(function(){
  // Players.insert({
  //   name:'me me',
  //   score:99
  // });

  // let square = function(x){
  //   return x * x;
  // }
  //console.log(Players.find().fetch());

  // ALL ARROW FUNCTIONS ARE ANONYMOUS
  // let square = (x) => {
  //   return x * x;
  // }

  let square = (x) => x  * x;
  console.log(square(10));

  // let user = {
  //   name: 'smart',
    //------------------------
    // sayHi: function(){
    //   console.log(this.name);
    //
    //------------------------
    /*
    sayHi: function() {
      console.log(arguments);
    }*/
    //------------------------
    // sayHi(){
    //   let that = this;
    //   setTimeout(function(){
    //   console.log(that.name);
    //   }, 1000);
    // }
    //------------------------
    // sayHi(){
    //   setTimeout(() => {
    //     console.log(this.name);
    //   });
    // }
  // };
  // user.sayHi(1, 2);

  // practice
  let numbers = [9, 99, 4, 56];
  let newNumbers = numbers.map((number) => number+1);
  console.log(newNumbers);


});
