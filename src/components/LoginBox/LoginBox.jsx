import React, { Component } from "react";
import PropTypes from "prop-types";

class LoginBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: undefined,
      color: undefined,
    };
  }

  componentDidMount() {}

  componentDidUpdate() {}

  handleNicknameInputChange = (event) => {
    const { value: nickname } = event.target;
    this.setState({ nickname });
  };

  handleColorInputChange = (event) => {
    const { value: color } = event.target;
    this.setState({ color });
  };

  handleSubmitButtonClick = () => {
    const { onSubmit } = this.props;
    const { nickname, color } = this.state;
    onSubmit(nickname, color);
  };

  render() {
    const {} = this.props;
    return (
      <div className="LoginBox">
        <input
          className="nickname-input"
          type="text"
          placeholder="Nickname..."
          onChange={this.handleNicknameInputChange}
        />
        <input
          className="color-input"
          type="color"
          onChange={this.handleColorInputChange}
        />
        <button
          type="button"
          className="submit-button"
          onClick={this.handleSubmitButtonClick}
        >
          Login!
        </button>
      </div>
    );
  }
}

LoginBox.propTypes = {
  onSubmit: PropTypes.func,
};

export default LoginBox;
