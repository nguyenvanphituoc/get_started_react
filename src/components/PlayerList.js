import React from 'react';
import { Consumer } from './Context';
import Player from './Player';

const PlayerList = (props) => {
    return (
        <Consumer>
            {
                ({players}) => {
                    return (
                        <React.Fragment>
                            {
                                players.map((player, index) =>
                                    <Player
                                        index={index}
                                        key={player.id.toString()}
                                        isHighScore={props.highestPlayers.includes(player.id)}
                                    />)
                            }
                        </React.Fragment>
                    );
                }
            }
        </Consumer>
    )
}

export default PlayerList;