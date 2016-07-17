import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import moment from 'moment'
import { findIndex } from 'lodash';


import styles from './message-item.css';
import { getMessageStatus, messagePropType } from '../../utils';

const getMessageClass = (status) => {
  const neutralMessageCodes = [1,2,4];
  const goodMessageCodes = [8,16];
  const badMessageCodes = [32,64];
  const checkStatus = (i) => i === status;
  if(findIndex(neutralMessageCodes, checkStatus) !== -1) return styles.neutral;
  if(findIndex(goodMessageCodes, checkStatus) !== -1) return styles.good;
  if(findIndex(badMessageCodes, checkStatus) !== -1) return styles.bad;
}

//hack for onClick method as there is no time to refactor
const MessageItem = ({message, className, clickFn}) => (
  <div
    className={classnames(styles.message, className)}
    onClick={()=>clickFn(message.Id)}
  >
    <div className={styles.input}>
      <input type="checkbox"/>
    </div>
    <div className={styles.nhi}>
      {message.NHI}
    </div>
    <div className={styles.name}>
      {message.PatientName}
    </div>
    <div className={styles.body}>
      {message.Body}
    </div>
    <div className={styles.time}>
      {moment(message.SentDateTime).format('ddd MMM YY')}
    </div>
    <div className={styles.addOn}>
      {message.AddOn}
    </div>
    <div className={classnames(styles.status, getMessageClass(message.Status))}>
      {getMessageStatus(message.Status)}
    </div>
  </div>
);

MessageItem.propTypes = {
  message: messagePropType.isRequired,
  clickFn: PropTypes.func.isRequired,
};

export default MessageItem;
export {
  styles,
};
