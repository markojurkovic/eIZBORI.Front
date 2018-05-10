import React, { Component } from "react";
import ListElement from "../ListElement/ListElement";

class List extends Component {
  render() {
    return (
      <ul className="list-group">
        <ListElement name="Mirela G" />
        <ListElement name="Pero S" />
        <ListElement name="Lucia P" />
        <ListElement name="Marko J" />
      </ul>
    );
  }
}

export default List;
