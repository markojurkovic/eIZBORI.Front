import React, { Component } from "react";
import ListElement from "../ListElement/ListElement";

class List extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ListElement
          name="Mirela G"
          checked={this.props["Mirela G"]}
          onCheckboxClicked={this.props.onCheckboxClicked}
        />
        <ListElement
          name="Pero S"
          checked={this.props["Pero S"]}
          onCheckboxClicked={this.props.onCheckboxClicked}
        />
        <ListElement
          name="Lucia P"
          checked={this.props["Lucia P"]}
          onCheckboxClicked={this.props.onCheckboxClicked}
        />
        <ListElement
          name="Marko J"
          checked={this.props["Marko J"]}
          onCheckboxClicked={this.props.onCheckboxClicked}
        />
      </div>
    );
  }
}

export default List;
