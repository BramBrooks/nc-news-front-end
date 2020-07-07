import React, { Component } from "react";

class SortByDropDown extends Component {
  render() {
    return (
      <div id="sort_by_drop_down">
        <form onSubmit={this.handleSubmit}>
          <legend>Sort By</legend>
          <p>
            <select onChange={this.props.handleDropDownChange}>
              <option value="created_at" onSelect={this.handleSubmit}>
                Created
              </option>
              <option value="comment_count" onSelect={this.handleSubmit}>
                Comments
              </option>
              <option value="votes" onSelect={this.handleSubmit}>
                Votes
              </option>
            </select>
          </p>
        </form>
      </div>
    );
  }
}

export default SortByDropDown;
