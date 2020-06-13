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
        <h3>{message.author}</h3>
        <p>{message.content}</p>
      </li>
    );
  }
}

export default Message;
