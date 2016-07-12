import React, { Component, PropTypes } from 'react';
import styles from './app.css';

// @TODO map messages and single message to props
export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
  }
  render() {
    return (
      <div className={styles.app}>
        {this.props.children}
      </div>
    );
  }
}

export {
  styles,
};
