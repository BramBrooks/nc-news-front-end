import React from "react";

function Sortbydropdown(props) {
  return (
    <form>
      <fieldset>
        <legend>Sort By</legend>
        <p>
          {/* <label>Sort By...</label> */}
          <select id="myList">
            <option value="1">Date Created</option>
            <option value="2">Comment Count</option>
            <option value="3">Votes</option>
          </select>
        </p>
      </fieldset>
    </form>
  );
}

export default Sortbydropdown;
