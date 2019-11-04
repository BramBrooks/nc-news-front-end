import React, { Component } from "react";

import * as api from "../api";

class VotingButton extends Component {
  state = { voteCount: 0, hasVotedUp: false, hasVotedDown: false };

  // I'm mutating state directly - needs sorting
  //

  voteHandler = vote => {
    let voteChange = 0;

    if (vote === "Up" && this.state.hasVotedUp === false) {
      voteChange = 1;
      this.state.hasVotedUp = true;
      this.state.hasVotedDown = false;
    } else if (
      vote === "Down" &&
      this.state.hasVotedDown === false &&
      this.state.hasVotedUp === true
    ) {
      voteChange = -1;
      this.state.hasVotedDown = true;
      this.state.hasVotedUp = false;
    }

    console.log(voteChange, "<----- voteChange");

    this.setState(prevState => {
      return { voteCount: prevState.voteCount + voteChange };
    });
  };

  handleClick = event => {
    event.preventDefault();

    this.voteHandler(event.target.id);
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick} id="Up">
          VOTE UP
        </button>
        <button onClick={this.handleClick} id="Down">
          VOTE DOWN
        </button>
        <p>Votes: {this.props.votes + this.state.voteCount}</p>
      </div>
    );
  }
}

export default VotingButton;
