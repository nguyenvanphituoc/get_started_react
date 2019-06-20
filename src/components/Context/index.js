import React, { Component } from 'react';

const ScoreboardContext = React.createContext();

export class Provider extends Component {
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
        return (
            <ScoreboardContext.Provider value={{
                players: this.state.players,
                actions: {
                    changeScore: this.handleScoreChange,
                    removePlayer: this.handleRemovePlayer,
                    addPlayer: this.handleAddPlayer
                }
            }}>
                {this.props.children}
            </ScoreboardContext.Provider>
        );
    }
};

export const Consumer = ScoreboardContext.Consumer;
