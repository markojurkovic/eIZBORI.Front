import React, { Component } from "react";

class ListElement extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm">One of three columns</div>
          <div className="col-sm">One of three columns</div>
          <div className="col-sm">One of three columns</div>
        </div>
      </div>
    );
  }
}

export default ListElement;
