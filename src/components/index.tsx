
import React from "react";
import Cell from "./cell";
import Div from "./sudoku";
import "./main.css"
export default class Main extends React.Component {
  render() {
    return (
      <div>
        <Cell />
        <Div />
      </div>
    );
  }
}
