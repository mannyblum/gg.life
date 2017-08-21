import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Game extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <span>
        {this.props.id}
      </span>
    );
  }
}

Game.propTypes = {
  id: PropTypes.number.isRequired
};

export default Game;
