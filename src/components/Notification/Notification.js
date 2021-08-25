import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Notification.module.css";

class Notificarion extends Component {
  static propTypes = {
    message: PropTypes.string.isRequired,
  };

  render() {
    const { message } = this.props;
    return <p className={styles.message}>{message}</p>;
  }
}

export default Notificarion;
