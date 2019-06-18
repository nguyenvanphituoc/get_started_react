import React from 'react';

const Stats = (props) => {
    return (
        <table className="stats">
            <tbody>
                <tr>
                    <td>Players:</td>
                    <td>{props.players.length}</td>
                </tr>
                <tr>
                    <td>Total Points:</td>
                    <td>{props.players.reduce((score, nextPlayer) => {
                        return score + nextPlayer.score;
                    }, 0)}</td>
                </tr>
            </tbody>
        </table>
    );
}

export default Stats;