import React from 'react';
import PropTypes from 'prop-types';

const Counter = (props) => {

  return (
    <div className="counter">
      <button className="counter-action decrement" onClick={() => props.changeScore(-1, props.index)}> - </button>
      <span className="counter-score">{props.score}</span>
      <button className="counter-action increment" onClick={() => props.changeScore(1, props.index)}> + </button>
    </div>
  );
}

Counter.propTypes = {
  index: PropTypes.number,
  score: PropTypes.number,
  changeScore: PropTypes.func
}

export default Counter;