import React, { Component } from "react";
import styles from "./Statistics.module.css";

class Statistics extends Component {
  render() {
    return (
      <div className={styles.statistics}>
        <ul className={styles.statistics__list}>
          <li className={styles.statistics__item}>Good: {this.props.good}</li>
          <li className={styles.statistics__item}>
            Neutral: {this.props.neutral}
          </li>
          <li className={styles.statistics__item}>Bad: {this.props.bad}</li>
          <li className={styles.statistics__item}>Total: {this.props.total}</li>
          <li className={styles.statistics__positive}>
            Positive feedback: {this.props.positivePercentage}%
          </li>
        </ul>
      </div>
    );
  }
}

export default Statistics;
