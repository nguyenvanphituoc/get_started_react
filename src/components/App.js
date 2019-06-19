import React from 'react';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';

class App extends React.Component {
  state = {
    players: [
      {
        name: "Guil",
        score: 0,
        id: 1
      },
      {
        name: "Treasure",
        score: 0,
        id: 2
      },
      {
        name: "Ashley",
        score: 0,
        id: 3
      },
      {
        name: "James",
        score: 0,
        id: 4
      }
    ]
  };

  componentDidMount() {
    this.lastPlayerID = this.state.players.length;
  }

  getChangeHighestScore = (updatedPlayers) => {
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

  handleScoreChange = (delta, index) => {

    // solution 1
    // this.setState(prevState => {
    //   let updatePlayer = Object.create(prevState.players[index]);
    //   updatePlayer.score = prevState.players[index].score + delta;

    //   return {
    //     players: [
    //       ...prevState.players.slice(0, index), // copy from index 0 to 2
    //       updatePlayer,
    //       ...prevState.players.slice(index + 1) // copy the rest from index 3.
    //     ]
    //   }
    // });
    // solution 2
    this.setState((prevState) => {
      const updatedPlayers = [...prevState.players];
      const updatedPlayer = { ...updatedPlayers[index] };
      updatedPlayer.score += delta;
      updatedPlayers[index] = updatedPlayer;

      return {
        players: updatedPlayers,
      };
    });
  }

  handleAddPlayer = (player) => {

    console.log(this.lastPlayerID);

    let newPlayer = {
      ...player,
      score: 0,
      id: this.lastPlayerID += 1
    }

    this.setState((prevState) => {

      return {
        players: [
          ...prevState.players.concat(newPlayer)
        ]
      }
    })
  }

  handleRemovePlayer = (id) => {

    this.setState(prevState => {

      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  render() {
    const highestPlayers = this.getChangeHighestScore(this.state.players);
    
    return (
      <div className="scoreboard">
        <Header
          title="Scoreboard"
          players={this.state.players}
          changeHighestScore={this.handleChangeHighestScore}
        />

        {/* Players list */}
        {this.state.players.map((player, index) =>
          <Player
            name={player.name}
            score={player.score}
            index={index}
            id={player.id}
            key={player.id.toString()}
            isHighScore={highestPlayers.includes(player.id)}
            changeScore={this.handleScoreChange}
            removePlayer={this.handleRemovePlayer}
          />
        )}

        <AddPlayerForm addPlayer={this.handleAddPlayer} />
      </div>
    );
  }
}

export default App;
