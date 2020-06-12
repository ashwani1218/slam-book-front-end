import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      error: "",
    };
  }
  onUsernameChange = (e) => {
    const username = e.target.value;
    this.setState(() => ({ username }));
  };
  onPasswordChange = (e) => {
    const password = e.target.value;
    this.setState(() => ({ password }));
  };
  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.username || !this.state.password) {
      this.setState(() => ({ error: "Provide Proper Credentials" }));
    } else {
      this.props.onSubmit({
        username: this.state.username,
        password: this.state.password,
      });
    }
  };

  render() {
    return (
      <div className="form-div">
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            className="form-input"
            id="username"
            type="text"
            placeholder="Username"
            autoFocus
            value={this.state.username}
            onChange={this.onUsernameChange}
          />

          <input
            className="form-input"
            id="password"
            type="password"
            placeholder="Password"
            autoFocus
            value={this.state.password}
            onChange={this.onPasswordChange}
          />
          <button>Login</button>
        </form>
      </div>
    );
  }
}
export default LoginForm;
