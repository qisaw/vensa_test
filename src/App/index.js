import React, { PropTypes } from 'react';
import styles from './app.css';
import HeaderBar from './components/HeaderBar';
import SideBar from './components/SideBar';

const App = ({ location, children }) => (
  <div className={styles.app}>
    <HeaderBar />
    <SideBar currentRoute={location.pathname} />
    <div className={styles.content}>
      {children}
    </div>
  </div>
);

App.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
};
export default App;
export {
  styles,
};
