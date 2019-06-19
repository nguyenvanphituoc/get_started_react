import React from 'react';
import PropTypes from 'prop-types';
import Stats from './Stats';
import Stopwatch from './Stopwatch';

const Header = (props) => {
  return (
    <header>
      <Stats
        players={props.players}
        changeHighestScore = {props.changeHighestScore}
      />
      <h1>{props.title}</h1>
      <Stopwatch />
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  players: PropTypes.arrayOf(PropTypes.object)
}

Header.defaultProps = {
  title: 'Scoreboard',
  players: []
}

export default Header;