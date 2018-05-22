import React, { Component } from "react";
import "./ListElement.css";

class ListElement extends Component {
  constructor(props) {
    super(props);
    this.name = this.props.name;
  }

  handleChange = event => {
    this.props.onCheckboxClicked(event.target.value);
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row align-items-center input-group-text">
          <div className="col">
            <img
              src="https://avatars1.githubusercontent.com/u/9203900"
              height="50"
            />
          </div>
          <div className="col-6">
            <p className="candidate-name">{this.name}</p>
          </div>
          <div className="col">
            <input
              className="form-check-input position-static"
              type="checkbox"
              id="voteCheckbox"
              value={this.props.name}
              onChange={this.handleChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ListElement;
