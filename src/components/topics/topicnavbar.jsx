import React, { Component } from "react";
import * as api from "../../api";
import { Link } from "@reach/router";

class TopicNavBar extends Component {
  state = { topics: [], isLoading: true };

  componentDidMount() {
    api.getTopics().then(topicData => {
      this.setState({ topics: topicData, isLoading: false });
    });
  }

  render() {
    const { isLoading } = this.state;
    if (isLoading) {
      return <p>Loading....</p>;
    }

    return (
      <>
        <nav id="liststyle">
          <h2>Topics</h2>
          {this.state.topics.map(topicObj => {
            return (
              <li key={topicObj.slug}>
                <Link to={`/topics/${topicObj.slug}`}>{topicObj.slug}</Link>
              </li>
            );
          })}
        </nav>
      </>
    );
  }
}

export default TopicNavBar;
