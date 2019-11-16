import React, { Component } from "react";

class SortByDropDown extends Component {
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <legend>Sort By</legend>
        <p>
          <select id="mylist" onChange={this.props.handleDropDownChange}>
            <option value="created_at" onSelect={this.handleSubmit}>
              Date Created
            </option>
            <option value="comment_count" onSelect={this.handleSubmit}>
              Comment Count
            </option>
            <option value="votes" onSelect={this.handleSubmit}>
              Votes
            </option>
          </select>
        </p>
      </form>
    );
  }
}

export default SortByDropDown;
