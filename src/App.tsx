import React, { useState } from "react";
import logo from "./images/gameifyac.png";
import "./App.css";
import Table from "./Leaderboard";
import { StudentEntry } from "./types";

function App() {
  // const [entries, setEntries] = useState(testData);
  // setEntries(entries);
  return (
    <div className="App">
      <div className="App-header">
        <div className="main">
          <h2>Gameify Leaderboard</h2>
          <Table />
        </div>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    </div>
  );
}

export default App;
