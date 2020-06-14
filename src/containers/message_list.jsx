import React, { Component } from 'react';
import { connect } from 'react-redux';

import Message from '../components/message.jsx';

class MessagesList extends Component {
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
        {this.renderList()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages
  };
}

export default connect(mapStateToProps)(MessagesList);
