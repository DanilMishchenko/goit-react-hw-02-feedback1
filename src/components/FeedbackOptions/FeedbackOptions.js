import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./FeedbackOptions.module.css";

class FeedbackButtons extends Component {
  static propTypes = {
    options: PropTypes.object.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };

  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <div className={styles.leave__feedback}>
        <div className={styles.feedback__buttons__list}>
          {Object.keys(options).map((option) => (
            <button
              key={option}
              className={styles.feedback__buttons}
              type="button"
              onClick={onLeaveFeedback}
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
