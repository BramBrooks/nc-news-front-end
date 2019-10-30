import React, { Component } from "react";

class Commentslist extends Component {
  state = {
    comment: {
      comment_id: 52,
      votes: 10,
      created_at: "2017-07-31T08:14:13.076Z",
      author: "jessjelly",
      body:
        "Consectetur deleniti sed. Omnis et dolore omnis aspernatur. Et porro accusantium. Tempora ullam voluptatum et rerum."
    },
    isLoading: true
  };

  render() {
    return <p>This will be a comment!</p>;
  }
}

export default Commentslist;
