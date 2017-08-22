import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Game from '../components/Game';
import GameDetail from '../components/GameDetail';

import * as actions from '../actions';

class GamesContainer extends Component {

  static propTypes = {
    fetchGames: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.fetchGames();
  }

  renderGame(game) {
    let singleGame = game.data[0];
    return (
      <Game key={singleGame.id} game={singleGame} />
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
            <div className="list-group">
              {
                (!this.props.games)
                  ? <div className="list-group-item">Loading</div>
                  : this.props.games.map(this.renderGame, this)
              }
            </div>
          </div>
          <div className="col-sm-6">
            <GameDetail />
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
