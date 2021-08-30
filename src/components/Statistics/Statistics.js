import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Statistics.module.css";

class Statistics extends Component {
  static propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  };

  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <div className={styles.statistics}>
        <ul className={styles.statistics__list}>
          <li className={styles.statistics__item}>Good: {good}</li>
          <li className={styles.statistics__item}>Neutral: {neutral}</li>
          <li className={styles.statistics__item}>Bad: {bad}</li>
          <li className={styles.statistics__item}>Total: {total}</li>
          <li className={styles.statistics__positive}>
            Positive feedback: {positivePercentage}%
          </li>
        </ul>
      </div>
    );
  }
}

export default Statistics;
