import React, { Component } from "react";
import PropTypes from "prop-types";
import Websocket from "react-websocket";
import { sendToServer } from "../../utils";

class ChatBox extends Component {
  websocketRef = React.createRef();

  constructor(props) {
    super(props);
    this.state = {
      content: "",
      messages: [],
    };
  }

  componentDidMount() {}

  componentDidUpdate() {}

  handleOpen = () => {};

  handleClose = () => {};

  handleServerMessage = (data) => {
    const newMessage = JSON.parse(data);
    const { messages: oldMessages } = this.state;
    this.setState({ messages: [...oldMessages, newMessage] });
  };

  handleContentInputChange = (event) => {
    const { value: content } = event.target;
    this.setState({ content });
  };

  handleSendButtonClick = () => {
    const { content } = this.state;
    this.websocketRef.current.sendMessage(content);
    this.setState({ content: "" });
  };

  render() {
    const { nickname, color } = this.props;
    const { content, messages } = this.state;

    const validColor = color.substr(1);

    return (
      <div className="ChatBox">
        <Websocket
          url={`ws://localhost:8080?nickname=${nickname}&color=${validColor}`}
          ref={this.websocketRef}
          onOpen={this.handleOpen}
          onClose={this.handleClose}
          onMessage={this.handleServerMessage}
        />
        <div className="form">
          <input
            type="text"
            className="content"
            value={content}
            onChange={this.handleContentInputChange}
          />
          <button className="send" onClick={this.handleSendButtonClick}>
            Send
          </button>
        </div>
        <div className="messages">
          {messages.map((message) => (
            <div className="message">
              <div
                className="avatar"
                style={{ backgroundColor: message.color }}
              ></div>
              <div className="right-side">
                <div className="nickname">
                  <b style={{ color: `#${message.color}` }}>
                    {message.nickname}
                  </b>
                </div>
                <div className="cloud">{message.content}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

ChatBox.propTypes = {
  nickname: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default ChatBox;
