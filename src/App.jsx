import "./App.css";
import React, { Component } from "react";
import LoginBox from "./components/LoginBox/LoginBox";
import ChatBox from "./components/ChatBox/ChatBox";

class App extends Component {
  constructor() {
    super();
    this.state = {
      nickname: undefined,
      color: undefined,
    };
  }

  componentDidMount() {}

  componentDidUpdate() {}

  handleLoginBoxSubmit = (nickname, color) => {
    this.setState({ nickname, color });
  };

  render() {
    const {} = this.props;
    const { nickname, color } = this.state;

    const isUserExist = nickname !== undefined && color !== undefined;

    return (
      <div className="App">
        {!isUserExist && <LoginBox onSubmit={this.handleLoginBoxSubmit} />}
        {isUserExist && <ChatBox nickname={nickname} color={color} />}
      </div>
    );
  }
}

export default App;
