import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Game extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    const { game } = this.props;
    return (
      <div>
        <h4 className="list-group-item-heading">
          {game.name}
        </h4>
        <div className="list-group-item-text">
          {game.summary}
        </div>
      </div>
    );
  }
}

Game.propTypes = {
};

export default Game;
