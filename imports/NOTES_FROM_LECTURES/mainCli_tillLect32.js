 import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
// monitor the queries and execute inside the function if
// one of those queries change it will re-run the function


import {Players} from './../imports/api/players';
import TitleBar from './../imports/ui/TitleBar';
import AddPlayer from './../imports/ui/AddPlayer';
import Player from './../imports/ui/Player';

const renderPlayers = (playersList) => {
  return playersList.map((player) => {
    return <Player key={player._id} player = {player}/>;
  });
};

Meteor.startup(() => {
  Tracker.autorun(() =>{
    let players = Players.find().fetch();
    let title = "Score Keep";
    //let name = 'Andrew';
    let jsx = (
      <div>
        <TitleBar title={title} subtitle="created by Agus"/>
        { renderPlayers(players) }
        <AddPlayer/>
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
