import React, { PropTypes } from 'react';
import classnames from 'classnames';
import { find } from 'lodash';
import { filterPropType } from '../../utils';

import styles from './message-heading.css';
import ArrowSvg from '../../../svg/arrow.svg';

const MessageHeading = ({ toggle, filters }) => {
  const applyAscending = (colName) => {
    const item = find(filters, (f) => f.colName === colName);
    return item ? item.ascending : false;
  };
  const getClass = (colName) => ({
    [styles.ascending]: applyAscending(colName),
  });
  return (
    <div className={classnames(styles.message, styles.heading)}>
      <div className={styles.input}>
        <input type="checkbox" />
      </div>
      <div className={styles.nhi}>
        <div className={styles.flexContainer}>
          NHI
          <ArrowSvg
            onClick={() => toggle('NHI')}
            className={classnames(styles.icon, getClass('NHI'))}
          />
        </div>
      </div>
      <div className={styles.name}>
        <div className={styles.flexContainer}>
          Patient Name
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.flexContainer}>
          Message
          <ArrowSvg
            onClick={() => toggle('Body')}
            className={classnames(styles.icon, getClass('Body'))}
          />
        </div>
      </div>
      <div className={styles.time}>
        <div className={styles.flexContainer}>
          Date
        </div>
      </div>
      <div className={styles.addOn}>
        <div className={styles.flexContainer}>
          Add-On
          <ArrowSvg
            onClick={() => toggle('AddOn')}
            className={classnames(styles.icon, getClass('AddOn'))}
          />
        </div>
      </div>
      <div className={styles.status}>
        <div className={styles.flexContainer}>
          Status
          <ArrowSvg
            onClick={() => toggle('Status')}
            className={classnames(styles.icon, getClass('Status'))}
          />
        </div>
      </div>
    </div>
  );
};

MessageHeading.propTypes = {
  toggle: PropTypes.func.isRequired,
  filters: PropTypes.arrayOf(filterPropType.isRequired),
};

export default MessageHeading;
export {
  styles,
};
