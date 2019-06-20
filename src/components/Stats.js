import React from 'react';
import { Consumer } from './Context';

const Stats = () => {
    return (
        <Consumer>
            {
                (context) => {
                    return (
                        <table className="stats">
                            <tbody>
                                <tr>
                                    <td>Players:</td>
                                    <td>{context.players.length}</td>
                                </tr>
                                <tr>
                                    <td>Total Points:</td>
                                    <td>{context.players.reduce((score, nextPlayer) => {
                                        return score + nextPlayer.score;
                                    }, 0)}</td>
                                </tr>
                            </tbody>
                        </table>
                    );
                }
            }
        </Consumer>
    );
}

export default Stats;