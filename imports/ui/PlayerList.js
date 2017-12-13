import React from 'react';
import FlipMove from 'react-flip-move'; // third party library

import Player from './Player'

// const renderPlayers = (playersList) => {
//   return playersList.map((player) => {
//     return <Player key={player._id} player = {player}/>;
//   });
// };

export default class PlayerList extends React.Component{
    renderPlayers(){
      if(this.props.players.length === 0){
        // return some jsx
        // return a jsx with a p tage that has the message
        return (
          <div className="item">
            <p className="item__message">Add players to start</p>
          </div>
        )
      } else {
        return this.props.players.map((player) => {
          return <Player key={player._id} player = {player}/>;
        });
      }
    }
    render(){
      return(
        <div>
          <FlipMove maintainContainerHeight={true} duration={750} easing="ease-out">
            {this.renderPlayers()}
          </FlipMove>

        </div>
      );
    }
};

PlayerList.propTypes = {
  players: React.PropTypes.array.isRequired
}
