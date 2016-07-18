import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import styles from './messages.css';

import MessagesPane from '../MessagesPane';
import MessageDetail from '../MessageDetail';
import { actions as messageActions } from '../../actions/messages';
import { actions as messageDetailActions } from '../../actions/messageDetails';

class Messages extends Component {
  componentDidMount() {
    this.props.getMessages();
  }

  render() {
    const showMessageDetail = () => this.props.messageDetail ? true : false;
    return (
      <div className={styles.messagesPage}>
        <MessagesPane
          filters={this.props.filters}
          removeFn={this.props.deleteFilterFn}
          messages={this.props.messages}
          showFn={() => true}
          listClickFn={this.props.getMessageDetails}
          toggleFilterFn={this.props.toggleFilterFn}
        />
        <MessageDetail messageDetail={this.props.messageDetail} showFn={showMessageDetail} closeFn={this.props.closeMessageDetails} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messagesReducers.messages,
    isListFetching: state.messagesReducers.isFetching,
    messageDetail: state.messageDetailReducers.message,
    isDetailFetching: state.messageDetailReducers.isFetching,
    filters: state.messagesReducers.filters,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMessages: bindActionCreators(messageActions.getMessages_get, dispatch),
    getMessageDetails: bindActionCreators(messageDetailActions.messageDetails_get, dispatch),
    closeMessageDetails: bindActionCreators(messageDetailActions.messageDetails_clear, dispatch),
    toggleFilterFn: bindActionCreators(messageActions.getMessages_filterToggle, dispatch),
    deleteFilterFn: bindActionCreators(messageActions.getMessages_filterDelete, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Messages);

