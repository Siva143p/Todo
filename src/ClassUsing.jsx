import React from "react";
import { Component } from "react";

class ClassUsing extends Component {
  render() {
    const { name, age, status, iteration } = this.props;
    return (
      <div>
        <h1>Class_using_component Called {iteration} time</h1>
        <ul>
          <li>Name: {name}</li>
          <li>Age: {age}</li>
          <li>Current Status: {status}</li>
        </ul>
      </div>
    );
  }
}

export default ClassUsing;
