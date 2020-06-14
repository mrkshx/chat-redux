import React, { Component } from 'react';

class Message extends Component {
  render() {
    const {
      message,
    } = this.props;
    if (!message.content) {
      return null;
    }
    return (
      <li className="message">
        <div className="message-heading">
          <p className="message-author">{message.author} - </p>
          <p>{message.created_at}</p>
        </div>
        <div>
          <p className="message-content">{message.content}</p>
        </div>
      </li>
    );
  }
}

export default Message;
