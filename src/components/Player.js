import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';
import Icon from './Icon';

class Player extends PureComponent {

  static propTypes = {
    changeScore: PropTypes.func,
    removePlayer: PropTypes.func,
    isHighScore: PropTypes.bool,
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired
  }

  render() {
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => this.props.removePlayer(this.props.id)}>✖</button>
          <Icon  isHighScore={this.props.isHighScore } />
          {this.props.name}
        </span>

        <Counter
          score={this.props.score}
          index={this.props.index}
          changeScore={this.props.changeScore} />
      </div>
    );
  }
}

export default Player;