import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchMessages } from '../actions';

import Message from '../components/message.jsx';

class MessagesList extends Component {
  componentWillMount() {
    this.fetchMessages;
  }

  renderList = () => {
    const { messages } = this.props;
    return messages.map(message => (
      <Message
        message={message}
        key={message.content}
      />
    ));
  }

  render() {
    return (
      <div className="message-list">
        <ul>
          {this.renderList()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMessages }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MessagesList);
