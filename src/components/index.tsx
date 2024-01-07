
import React from "react";
import Cell from "./Home";
import Div from "./Hedr";
import About from "./About";

import "./main.css"

export default class Main extends React.Component {
  render() {
    console.log("Rendering Main component");
    return (
      <div>
        <Div />
        <Cell />
        <About/>
      </div>
    );
  }
}
