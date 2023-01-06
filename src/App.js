import React, { Component } from "react";
import Constructor from "./component/Constructor";

export default class App extends Component {
  theme1 = {
    backgroundColor: "lightgray",
    color: "black",
    lineHeight: "1.5",
    marginTop: "-1.7%",
  };
  render() {
    return <Constructor theme1={this.theme1} />;
  }
}
