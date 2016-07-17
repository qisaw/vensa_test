import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

import styles from './message-detail.css';

import ScrollPane from '../../../components/ScrollPane';
import {getMessageStatus, messageDetailPropType} from '../../utils';

const MessageDetail = ({messageDetail, closeFn, showFn}) => {
  const internals = () => (
    <div className={styles.form}>
      <div className={styles.item}>
        <div className={styles.label}>Message ID:</div>
        <div className={styles.content}>{messageDetail.Id}</div>
      </div>
      <div className={styles.item}>
        <div className={styles.label}>Status:</div>
        <div className={styles.content}>{getMessageStatus(messageDetail.Status)}</div>
      </div>
      <div className={styles.item}>
        <div className={styles.label}>Sent:</div>
        <div className={styles.content}>{messageDetail.SentDateTime}</div>
      </div>
      <div className={styles.item}>
        <div className={styles.label}>Message:</div>
        <div className={styles.content}>{messageDetail.Body}</div>
      </div>
      <div className={styles.item}>
        <div className={styles.label}>NHI:</div>
        <div className={styles.content}>{messageDetail.NHI}</div>
      </div>
      <div className={styles.item}>
        <div className={styles.label}>Firstname:</div>
        <div className={styles.content}>{messageDetail.PatientName.split(' ')[0]} </div>
      </div>
      <div className={styles.item}>
        <div className={styles.label}>Lastname:</div>
        <div className={styles.content}>{messageDetail.PatientName.split(' ')[1]} </div>
      </div>
      <div className={styles.item}>
        <div className={styles.label}>Mobile:</div>
        <div className={styles.content}>{messageDetail.MobileNumber}</div>
      </div>
      <div className={styles.item}>
        <div className={styles.label}>Home:</div>
        <div className={styles.content}>{messageDetail.HomeNumber}</div>
      </div>
      <div className={styles.item}>
        <div className={styles.label}>Address:</div>
        <div className={styles.content}>{messageDetail.Address}</div>
      </div>
      <div className={styles.item}>
        <div className={styles.label}>Add-On:</div>
        <div className={styles.content}>{messageDetail.Addon}</div>
      </div>
      <div className={styles.item}>
        <div className={styles.label}>Doctor:</div>
        <div className={styles.content}>{messageDetail.DoctorName}</div>
      </div>
    </div>
  );
  return (
    <div className={styles.messageDetail}>
      <ScrollPane
        show={showFn}
        closeFn={closeFn}

      >
        {messageDetail? internals() : ''}
      </ScrollPane>


    </div>
  );
};

MessageDetail.propTypes = {
  messageDetail: messageDetailPropType.isRequired,
  closeFn: PropTypes.func.isRequired,
};

export default MessageDetail;
export {
  styles,
}
