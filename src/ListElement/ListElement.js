import React, { Component } from "react";
import "./ListElement.css";

class ListElement extends Component {
  constructor(props) {
    super(props);
    this.name = this.props.name;
  }
  render() {
    return (
      <li class="list-group-item">
        <div class="container">
          <div class="row align-items-center input-group-text">
            <div class="col">
              <img
                src="https://avatars1.githubusercontent.com/u/9203900"
                height="50"
              />
            </div>
            <div class="col">
              <p class="candidate-name">{this.name}</p>
            </div>
            <div class="col">
              <input type="checkbox" name="vote" id="vote-checkbox" />
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default ListElement;
