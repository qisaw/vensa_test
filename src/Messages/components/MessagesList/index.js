import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { map, orderBy } from 'lodash';

import styles from './messages-list.css';

import MessageItem from '../MessageItem';
import MessageHeading from '../MessageHeading';
import { messagePropType, filterPropType } from '../../utils';

const MessagesList = ({ messages, clickFn, toggleFilterFn, filters }) => {
  const sortItems = map(filters, ({ colName }) => colName);
  const sortOrder = map(filters, ({ ascending }) => ascending ? 'asc' : 'desc');
  const MessageItems = orderBy(messages, sortItems, sortOrder)
    .map((m) => <MessageItem key={m.Id} message={m} className={styles.item} clickFn={clickFn} />);
  return (
    <div className={styles.messagesList}>
      <MessageHeading toggle={toggleFilterFn} filters={filters} />
      {MessageItems}
    </div>
  );
};

MessagesList.propTypes = {
  messages: PropTypes.arrayOf(messagePropType).isRequired,
  clickFn: PropTypes.func.isRequired,
  toggleFilterFn: PropTypes.func.isRequired,
  filters: PropTypes.arrayOf(filterPropType.isRequired),
};

export default MessagesList;
