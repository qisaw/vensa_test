import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import styles from './messages-pane.css';

import ScrollPane from '../../../components/ScrollPane';
import FilterPane from '../FilterPane';
import MessagesList from '../MessagesList';
import { messagePropType, filterPropType } from '../../utils';

const MessagesPane = ({filters, removeFn, showFn, messages, listClickFn}) => (
  <div className={styles.messagesPane}>
  <ScrollPane show={showFn} className={styles.scroll}>
    <FilterPane
      filters={filters}
      removeFn={removeFn}
    />
  <MessagesList
    messages={messages}
    clickFn={listClickFn}
  />
  </ScrollPane>
  </div>
)

MessagesPane.propTypes = {
  messages: PropTypes.arrayOf(messagePropType).isRequired,
  removeFn: PropTypes.func.isRequired,
  filters: PropTypes.arrayOf(filterPropType).isRequired,
  showFn: PropTypes.func.isRequired,
  listClickFn: PropTypes.func.isRequired,
};

export default MessagesPane;

export {
  styles,
};
