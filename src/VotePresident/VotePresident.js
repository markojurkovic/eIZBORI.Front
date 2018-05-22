import React, { Component } from "react";
import List from "../List/List";
import "./VotePresident.css";

class VotePresident extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "Mirela G": false,
      "Pero S": false,
      "Lucia P": false,
      "Marko J": false
    };
  }

  onCheckboxClicked = name => {
    this.setState({
      [name]: true
    });
  };

  submitVote = () => {
    let voted = [];

    for (let key in this.state) {
      if (this.state[key] === true) {
        voted.push(key);
      }
    }
    alert("You voted for: " + voted);
  };

  render() {
    console.log(this.state);
    return (
      <div className="container-fluid myContainer">
        <form>
          <h3 className="text-center">Glasovanje za predsjednika</h3>
          <br />
          <List onCheckboxClicked={this.onCheckboxClicked} />
          <br />
          <div className="text-center">
            <button
              className="btn btn-danger"
              type="button"
              onClick={this.submitVote}
            >
              Potvrdi
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default VotePresident;
