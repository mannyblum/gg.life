import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Game from '../components/Game';

import * as actions from '../actions';

class GamesContainer extends Component {

  static propTypes = {
    games: PropTypes.array.isRequired,
    fetchGames: PropTypes.func.isRequired
  }

  componentWillMount() {
    this.props.fetchGames();
  }

  renderGame(game) {
    return (
      <Game
        key={game.id + Math.random() * 2}
        id={game.id} />
    );
  }
  render() {
    const { games } = this.props;

    return (
      <div className="container">
        <div className="page-header">
          <h1>GG.life</h1>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <ul>
              {this.props.games.map(this.renderGame)}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const result = state.games;

  return result;
}

export default connect(mapStateToProps, actions)(GamesContainer);
