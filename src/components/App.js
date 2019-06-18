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


  handleScoreChange = (delta, index) => {
    console.log(delta);
    // solution 1
    this.setState(prevState => {
      let updatePlayer = Object.create(prevState.players[index]);
      updatePlayer.score = prevState.players[index].score + delta;

      return {
        players: [
          ...prevState.players.slice(0, index), // copy from index 0 to 2
          updatePlayer,
          ...prevState.players.slice(index + 1) // copy the rest from index 3.
        ]
      }
    });
    // solution 2
    // this.setState((prevState) => {
    //   const updatedPlayers = [...prevState.players];
    //   const updatedPlayer = {...updatedPlayers[index]};
    //   updatedPlayer.score += delta;
    //   updatedPlayers[index] = updatedPlayer;
  
    //   return {
    //     players: updatedPlayers
    //   };
    // });
  }

  handleAddPlayer = (player) => {
    let newPlayer = {
      ...player,
      score: 0,
      id: this.state.players.length + 1
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
    return (
      <div className="scoreboard">
        <Header
          title="Scoreboard"
          players={this.state.players}
        />

        {/* Players list */}
        {this.state.players.map((player, index) =>
          <Player
            name={player.name}
            score={player.score}
            index={index}
            id={player.id}
            key={player.id.toString()}
            changeScore={this.handleScoreChange}
            removePlayer={this.handleRemovePlayer}
          />
        )}

        <AddPlayerForm addPlayer = {this.handleAddPlayer}/>
      </div>
    );
  }
}

export default App;
