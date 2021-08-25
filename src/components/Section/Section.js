import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Section.module.css";

class Section extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
  };

  render() {
    const { title, children } = this.props;
    return (
      <section className={styles.section}>
        <h2 className={styles.section__titles}>{title}</h2>
        {children}
      </section>
    );
  }
}

export default Section;
