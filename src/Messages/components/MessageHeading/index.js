import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';

import styles from './message-heading.css';
import ArrowSvg from '../../../svg/arrow.svg';

const MessageHeading = () => {
  return (
    <div className={classnames(styles.message, styles.heading)}>
      <div className={styles.input}>
        <input type="checkbox"/>
      </div>
      <div className={styles.nhi}>
        <div className={styles.flexContainer}>
          NHI <ArrowSvg className={styles.icon}/>
        </div>
      </div>
      <div className={styles.name}>
        <div className={styles.flexContainer}>
          Patient Name
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.flexContainer}>
          Message <ArrowSvg className={styles.icon}/>
        </div>
      </div>
      <div className={styles.time}>
        <div className={styles.flexContainer}>
          Date
        </div>
      </div>
      <div className={styles.addOn}>
        <div className={styles.flexContainer}>
          Add-on <ArrowSvg className={styles.icon}/>
        </div>
      </div>
      <div className={styles.status}>
        <div className={styles.flexContainer}>
          Status <ArrowSvg className={styles.icon}/>
        </div>
      </div>
    </div>
  );
}

export default MessageHeading;
export {
  styles,
}
