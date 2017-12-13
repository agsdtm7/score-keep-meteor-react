import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import {Players} from './../imports/api/players';
// monitor the queries and execute inside the function if
// one of those queries change it will re-run the function
Tracker.autorun(function(){
console.log('Players list', Players.find().fetch());
})



const players = [{
  _id:'1',
  name:'Mei mei',
  score:99
},{
  _id:'2',
  name:'Ge ge',
  score:1
},{
  _id:'3',
  name:'Ponyo',
  score:51
}];

const renderPlayers = function(playersList){
  //let numbers = [{playersList[0]._id:1},{playersList[1]._id:2},{playersList[2]._id:3}];
  return playersList.map(function(player){
    return <p key={player._id}>{player.name} has {player.score} points</p>;
  });
};

/*
const renderPlayers = function(playersList){
  let numbers = [{val:9},{val:2},{val:3},{val:101}];

  return numbers.map(function(number){
    return <p key={number.val}>{number.val}</p>;
  });
  //console.log(newNumbers);
  //return [<p key="1">1</p>, <p key="2">2</p>, <p key="3">3</p>];
};
*/
Meteor.startup(function(){
  // call tracker.autorun
  // create variable called players ->

  let title = "Score Keep";
  //let name = 'Andrew';
  let jsx = (
    <div>
      <h1>{title}</h1>
      { renderPlayers(players) }
    </div>
  );
  ReactDOM.render(jsx, document.getElementById('app'));
});
