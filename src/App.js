import React, { Component } from "react";
import "./App.css";
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
