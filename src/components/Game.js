import React from 'react'
import PropTypes from 'prop-types';

const Game = props => {
  console.log('props', props);
  return (
    <li>
      <span>{props.id}</span>
    </li>
  );
};

Game.propTypes = {
  id: PropTypes.number.isRequired
};

export default Game;
