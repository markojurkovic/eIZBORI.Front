import React, { Component } from "react";
import logo from "./estudentlogo.png";
import "./App.css";
import ListElement from "./ListElement/ListElement";
import List from "./List/List";
import VotePresident from "./VotePresident/VotePresident";
import AddCandidature from "./AddCandidature/AddCandidature";

class App extends Component {
  render() {
    return (
      <div className="container" style={{ padding: "2%" }}>
        <VotePresident />
        <br />
        <AddCandidature role="predsjednik" />
      </div>
    );
  }
}

export default App;
