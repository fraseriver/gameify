import React, { Component } from "react";
import { StudentEntry } from "./types";
import "./tables.css";
// import "./LeaderBoardEntry.css";

interface LeaderBoardEntryProps {
  entry: StudentEntry;
}

export const LeaderBoardEntry: React.FC<LeaderBoardEntryProps> = ({
  entry,
}) => {
  return (
    <tr className="pure-table-bordered">
      <td>{entry.position}</td>
      <td>{entry.name}</td>
      <td>{entry.alltime}</td>
      <td>{entry.recent}</td>
    </tr>
  );
};
