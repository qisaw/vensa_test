import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

import styles from './messages-list.css';

import MessageItem from '../MessageItem';
import MessageHeading from '../MessageHeading';
import { messagePropType } from '../../utils';

const MessagesList = ({messages, clickFn}) => (
  <div className={styles.messagesList}>
    <MessageHeading/>
    {messages.map((m, i) => <MessageItem key={i} message={m} className={styles.item} clickFn={clickFn}/>)}
  </div>
);

MessagesList.propTypes = {
  messages: PropTypes.arrayOf(messagePropType).isRequired,
  clickFn: PropTypes.func.isRequired,
}

export default MessagesList;
