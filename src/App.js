import React, { Component } from "react";

import "modern-normalize/modern-normalize.css";
import "./styles.css";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = (event) => {
    const review = event.target.textContent;
    this.setState({ [review]: this.state[review] + 1 });
  };

  render() {
    return (
      <div className="feedback">
        <h2>Please leave feedback</h2>
        <div>
          <button type="button" onClick={this.handleClick}>
            good
          </button>
          <button type="button" onClick={this.handleClick}>
            neutral
          </button>
          <button type="button" onClick={this.handleClick}>
            bad
          </button>
        </div>
        <h2>Statistics</h2>
        <div>
          <ul>
            <li>Good:{this.state.good}</li>
            <li>Neutral:{this.state.neutral}</li>
            <li>Bad:{this.state.bad}</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
