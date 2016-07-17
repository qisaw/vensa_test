import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import styles from './messages.css';

import MessagesPane from '../MessagesPane';
import MessageDetail from '../MessageDetail';
import { actions as messageActions } from '../../actions/messages';
import { actions as messageDetailActions } from '../../actions/messageDetails';

const filters = [{
  colName: 'messages',
  ascending: false,
}, {
  colName: 'date',
  ascending: true,
}]

class Messages extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getMessages();
  }

  static propTypes = {}

  render() {
    const showMessageDetail = () => this.props.messageDetail? true: false;
    return (
      <div className={styles.messagesPage}>
        <MessagesPane
          filters={filters}
          removeFn={(_) => console.log(_)}
          messages={this.props.messages}
          showFn={()=>true}
          listClickFn={this.props.getMessageDetails}
        />
        <MessageDetail messageDetail={this.props.messageDetail} showFn={showMessageDetail}  closeFn={this.props.closeMessageDetails}/>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    messages: state.messagesReducers.messages,
    isListFetching: state.messagesReducers.isFetching,
    messageDetail: state.messageDetailReducers.message,
    isDetailFetching: state.messageDetailReducers.isFetching,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMessages: bindActionCreators(messageActions.getMessages_get, dispatch),
    getMessageDetails: bindActionCreators(messageDetailActions.messageDetails_get, dispatch),
    closeMessageDetails: bindActionCreators(messageDetailActions.messageDetails_clear, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
