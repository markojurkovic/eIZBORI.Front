import React, { Component } from "react";
import List from "../List/List";

class VotePresident extends Component {
  render() {
    return (
      <div class="container">
        <form>
          <h3 class="text-center">Glasovanje za predsjednika</h3>
          <br />
          <List />
          <br />
          <div className="text-center">
            <button class="btn btn-danger" type="button">
              Potvrdi
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default VotePresident;
