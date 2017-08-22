import React, { Component } from 'react';
import { connect } from 'react-redux';

class GameDetail extends Component {
  constructor(props) {
    super(props);
    console.log('props', props);
  }

  renderGame(game) {
    return (
      <div className="panel-body">
        {game.name}
        <br />
        {game.summary}
      </div>
    )
  }

  render() {
    return (
      <div className="panel panel-default">
        {
          (!this.props.currentGame)
          ? <div className="panel-body">Select a game &hellip;</div>
          : this.renderGame(this.props.currentGame)
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  const result = state.games;

  return result;
}

export default connect(mapStateToProps)(GameDetail);
