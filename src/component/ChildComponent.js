import React, { Component } from "react";

export default class ChildComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Mohd Saif",
      age: "23",
    };
  }
  componentWillUnmount() {
    alert("The component named Child Component is about to be unmounted.");
  }
  render() {
    return (
      <div>
        <p>
          Hi my name is {this.state.name} and I am {this.state.age} years old.
        </p>
      </div>
    );
  }
}
