import React, { Component } from "react";
import styles from "./FeedbackOptions.module.css";

class FeedbackButtons extends Component {
  render() {
    return (
      <div className={styles.leave__feedback}>
        <div className={styles.feedback__buttons__list}>
          {Object.keys(this.props.options).map((option) => (
            <button
              key={option}
              className={styles.feedback__buttons}
              type="button"
              onClick={this.props.onLeaveFeedback}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default FeedbackButtons;
