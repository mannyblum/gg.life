import React, { Component } from 'react'
import { connect }  from 'react-redux';
import PropTypes from 'prop-types';

import * as actions from '../actions';

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = { activeIndex: false }
  }

  isActive(id) {
    return this.props.selectedGroupItem === id;
  }

  handleClickEvent(e, game) {
    e.preventDefault();
    this.props.selectGame(game);

    this.setState({ activeIndex: true });
  }

  render () {
    const { game } = this.props;

    const isActive = this.state.activeIndex === true ? 'list-group-item active' : 'list-group-item';

    return (
      <div
        className={isActive}
        onClick={(e) => { this.handleClickEvent(e, game) }}>
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

function mapStateToProps(state) {
  const result = { games: state.games, currentGame: state.currentGame };

  return result;
}

export default connect(mapStateToProps, actions)(Game);
