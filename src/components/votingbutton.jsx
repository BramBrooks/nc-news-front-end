import React, { Component } from "react";

import * as api from "../api";

class VotingButton extends Component {
  state = { voteCount: 0 };

  handleClick = event => {
    event.preventDefault();

    this.voteHandler(event.target.id);
  };

  voteHandler = vote => {
    let voteChange = 0;
    if (vote === "Up") {
      voteChange = 1;
    } else {
      voteChange = -1;
    }

    const { id, from } = this.props;

    api.patchVotes(voteChange, id, from);

    this.setState(prevState => {
      return { voteCount: prevState.voteCount + voteChange };
    });
  };

  render() {
    return (
      <div>
        <button
          disabled={this.state.voteCount === 1}
          onClick={this.handleClick}
          id="Up"
        >
          VOTE UP
        </button>
        <button
          disabled={this.state.voteCount === 0}
          onClick={this.handleClick}
          id="Down"
        >
          VOTE DOWN
        </button>
        <p>Votes: {this.props.votes + this.state.voteCount}</p>
      </div>
    );
  }
}

export default VotingButton;
