import React, { Component } from "react";
import styles from "./Notification.module.css";

class Notificarion extends Component {
  render() {
    return <p className={styles.message}>{this.props.message}</p>;
  }
}

export default Notificarion;
