import React from 'react';
import PropTypes from 'prop-types';

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

Stats.propTypes = {
    players: PropTypes.arrayOf(PropTypes.shape({
        score: PropTypes.number,
        id: PropTypes.number,
        name: PropTypes.string
    }))
}

export default Stats;