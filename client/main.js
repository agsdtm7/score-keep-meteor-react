 import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
// monitor the queries and execute inside the function if
// one of those queries change it will re-run the function

import {Players, calculatePlayerPositions} from './../imports/api/players';
import App from './../imports/ui/App';
import TitleBar from './../imports/ui/TitleBar';
import AddPlayer from './../imports/ui/AddPlayer';
import Player from './../imports/ui/Player';
import PlayerList from './../imports/ui/PlayerList';


Meteor.startup(() => {
  Tracker.autorun(() =>{
    let players = Players.find({},{sort:{score: -1}}).fetch();
    let title = "Score Keep";
    let positionedPlayers = calculatePlayerPositions(players);
    ReactDOM.render(<App title={title} players={positionedPlayers}/>, document.getElementById('app'));
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
