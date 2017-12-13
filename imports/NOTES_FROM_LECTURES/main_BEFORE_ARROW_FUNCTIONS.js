import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import {Players} from './../imports/api/players';
// monitor the queries and execute inside the function if
// one of those queries change it will re-run the function
const renderPlayers = function(playersList){
  return playersList.map(function(player){
    return <p key={player._id}>{player.name} has {player.score} points</p>;
  });
};

const handleSubmit = function (e){
  let playerName = e.target.playerName.value;

  e.preventDefault();

  if(playerName){
    e.target.playerName.value = '';
    // players insert
    Players.insert({
      name:playerName,
      score:0
    });
  }
}

Meteor.startup(function(){
  Tracker.autorun(function(){
    let players = Players.find().fetch();
    let title = "Score Keep";
    //let name = 'Andrew';
    let jsx = (
      <div>
        <h1>{title}</h1>
        { renderPlayers(players) }
        <form onSubmit ={handleSubmit}>
          <input type="text" name="playerName" placeholder="Player name" />
          <button>Add Player</button>
        </form>
      </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'));
});
/*
  if(Players.find().count()>4){
    Players.insert({
      name:'ponyo',
      score: 50
    });
  }*/
  console.log(Players.find().fetch());
});
