import React, { Component, PropTypes } from 'react';
import styles from './app.css';
import HeaderBar from './components/HeaderBar';
import SideBar from './components/SideBar';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    })
  }
  render() {
    return (
      <div className={styles.app}>
        <HeaderBar/>
        <SideBar currentRoute={this.props.location.pathname}/>
        <div className={styles.content}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export {
  styles,
};
