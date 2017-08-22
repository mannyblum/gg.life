import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Game from '../components/Game';

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
      <div key={singleGame.id}
        className="list-group-item"
        id={singleGame.id}>
        <Game game={singleGame} />
      </div>
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
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const result = state.games;

  console.log('result', result);

  return result;
}

export default connect(mapStateToProps, actions)(GamesContainer);
