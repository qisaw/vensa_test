import React from 'react';
import styles from './header-bar.css';
import LogoSvg from '../../../svg/logo.svg';

const HeaderBar = () => (
  <div className={styles.headerBar}>
    <LogoSvg className={styles.logo} />
  </div>
);

export default HeaderBar;
export {
  styles,
};
