import React from 'react';
import Header from './Header';
import PlayerList from './PlayerList';
import { Consumer } from './Context';
import AddPlayerForm from './AddPlayerForm';

const App = () => {
  
  const getChangeHighestScore = (updatedPlayers) => {
    // check highest score
    let idHighestScore = [];

    let highestPlayer = updatedPlayers.reduce((previousPlayer, currentPlayer) => {
      const higherScore = Math.max(previousPlayer.score, currentPlayer.score);
      if (higherScore === previousPlayer.score) {
        return previousPlayer
      }

      return currentPlayer
    })

    idHighestScore.push(highestPlayer.id);
    updatedPlayers.forEach((player) => {
      if (player.score === highestPlayer.score && player.id !== highestPlayer.id) {
        idHighestScore.push(player.id)
      }
    })

    if (idHighestScore.length === updatedPlayers.length) {
      return [];
    }

    return idHighestScore;
  }

  return (
    <Consumer>
      {context => {

        const highestPlayers = getChangeHighestScore(context.players);

        return (
          <div className="scoreboard">
            <Header
              title="Scoreboard"
            />
            <PlayerList
              highestPlayers={highestPlayers}
            />
            <AddPlayerForm addPlayer={context.actions.addPlayer} />
          </div>
        );
      }
      }
    </Consumer>
  );
}

export default App;
