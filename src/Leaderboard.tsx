import React, { Component } from "react";
import LeaderboardHead from "./LeaderboardHead";
import { LeaderBoardEntry } from "./LeaderboardEntry";
import { StudentEntry } from "./types";
import "./tables.css";

export default class Table extends Component<
  {},
  { data: Array<StudentEntry> }
> {
  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {
      data: this.testData,
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  testData: Array<StudentEntry> = [
    {
      name: "Maja",
      position: 1,
      alltime: 100,
      recent: 99,
      className: "pure-table-odd",
    },
    {
      name: "William",
      position: 2,
      alltime: 50,
      recent: 10,
      className: "pure-table-odd",
    },
    {
      name: "Jesse",
      position: 3,
      alltime: 10,
      recent: 7,
      className: "pure-table-odd",
    },
    {
      name: "Sam",
      position: 4,
      alltime: 5,
      recent: 1,
      className: "pure-table-odd",
    },
  ];

  componentDidMount() {}

  render() {
    const entries = this.state.data.map((entry, index) => (
      <LeaderBoardEntry
        key={entry.name}
        entry={entry}
        // position={index + 1}
        // name={row.name}
        // alltime={row.alltime}
        // recent={row.recent}
        // entry.className={index % 2 === 0 ? "pure-table-odd" : ""}
      />
    ));

    return (
      <table className="pure-table">
        <LeaderboardHead />
        {/* //  onChange={this.handleSort} /> */}
        <tbody>{entries}</tbody>
      </table>
    );
  }
}
