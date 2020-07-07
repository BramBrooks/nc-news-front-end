import React, { Component } from "react";

import * as api from "../api";

class VotingButton extends Component {
  state = { voteCount: 0 };

  handleClick = (event) => {
    event.preventDefault();

    this.voteHandler(event.target.id);
  };

  voteHandler = (vote) => {
    let voteChange = 0;
    if (vote === "Up") {
      voteChange = 1;
    } else {
      voteChange = -1;
    }

    const { id, from } = this.props;

    api.patchVotes(voteChange, id, from);

    this.setState((prevState) => {
      return { voteCount: prevState.voteCount + voteChange };
    });
  };

  render() {
    return (
      <div>
        {/* this is where the word votes used to be */}
        <div id="vote-text">
          Votes:{this.props.votes + this.state.voteCount}
        </div>
        <div id="voting_buttons_container">
          <div>
            <button
              className="button-up"
              hidden={this.state.voteCount === 1}
              disabled={this.state.voteCount === 1}
              enabled={this.state.voteCount === 0}
              onClick={this.handleClick}
              id="Up"
            >
              ▲
            </button>

            <button
              className="button-down"
              hidden={this.state.voteCount === 0}
              disabled={this.state.voteCount === 0}
              onClick={this.handleClick}
              id="Down"
            >
              ▼
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default VotingButton;
