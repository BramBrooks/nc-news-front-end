import React, { Component } from "react";
import * as api from "../../api";
import { Link } from "@reach/router";

class TopicNavBar extends Component {
  state = { topics: [], isLoading: true };

  componentDidMount() {
    api.getTopics().then((topicData) => {
      this.setState({ topics: topicData, isLoading: false });
    });
  }

  render() {
    // const { isLoading } = this.state;
    // if (isLoading) {
    //   return <p>Loading...</p>;
    // }

    return (
      <>


        <div class="navbar_container">
          <h2 id='topics_title'>Topic</h2>
          <ul id="navbar">
            {this.state.topics.map((topicObj) => {
              return (
                <li className={topicObj.slug} key={topicObj.slug}>
                  <Link
                    data-status={topicObj.slug.toString()}
                    to={`/topics/${topicObj.slug}`}
                  >
                    {topicObj.slug}{" "}
                  </Link>
                </li>
              );
            })}
          </ul>
          {/* {<Sortbydropdown handleDropDownChange={this.handleDropDownChange} />} */}
        </div>
      </>
    );
  }
}

export default TopicNavBar;
