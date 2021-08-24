import React, { Component } from "react";
import styles from "./Section.module.css";

class Section extends Component {
  render() {
    return (
      <section className={styles.section}>
        <h2 className={styles.section__titles}>{this.props.title}</h2>
        {this.props.children}
      </section>
    );
  }
}

export default Section;
