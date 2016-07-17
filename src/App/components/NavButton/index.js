import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import classnames from 'classnames';

import styles from './nav-button.css';


const NavButton = ({ route, currentRoute, title, icon, className, activeClassName }) => {
  const isActive = route === currentRoute;
  const classNames = classnames(className, styles.navButton, {
    [styles.active]: isActive,
    [activeClassName]: activeClassName && isActive,
  })
  return (
    <Link to={route} className={classNames}>
      <div className={styles.icon}>
        {icon}
      </div>
      <div className={styles.label}>
        {title}
      </div>
    </Link>
  );
}
NavButton.propTypes = {
  route: PropTypes.string.isRequired,
  currentRoute: PropTypes.string.isRequired,
  title: PropTypes.node.isRequired,
  icon: PropTypes.element.isRequired,
  className: PropTypes.string,
  activeClassName: PropTypes.string,
};

export default NavButton;
