import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from './Context';
import Counter from './Counter';
import Icon from './Icon';

class Player extends PureComponent {

  static propTypes = {
    isHighScore: PropTypes.bool,
    index: PropTypes.number.isRequired
  }

  render() {
    return (
      <Consumer>
        {
          ({actions, players}) => (
            <div className="player">
              <span className="player-name">
                <button className="remove-player" onClick={() => actions.removePlayer(players[this.props.index].id)}>✖</button>
                <Icon isHighScore={this.props.isHighScore} />
                {players[this.props.index].name}
              </span>

              <Counter
                index={this.props.index} />
            </div>
          )
        }
      </Consumer>

    );
  }
}

export default Player;