import React from "react";
import LoginForm from "./home-components/LoginForm";
import axios from "axios";
import { connect } from "react-redux";
import { addUser } from "../redux/actions/UserActions";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: "",
    };
  }
  componentDidMount() {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user) {
        this.props.dispatch(addUser(user));
      }
    } catch (e) {
      //DO NOTHING
    }
  }
  render() {
    return (
      <div className="login">
        <div className="login-form">
          {this.state.error && <p>{this.state.error}</p>}
          <LoginForm
            onSubmit={({ username, password }) => {
              axios
                .post("http://localhost:8080/login", {
                  username,
                  password,
                })
                .then((resp) => {
                  if (resp.data.response_code === "200") {
                    this.props.dispatch(addUser(resp.data));
                    const json = JSON.stringify(resp.data);
                    localStorage.setItem("user", json);
                    this.props.history.push("/home");
                  } else if (resp.data.response_code === "401") {
                    this.setState(() => ({
                      error: "Please Provide Correct Credentials",
                    }));
                  }
                });
            }}
          />
        </div>
      </div>
    );
  }
}

export default connect()(LoginPage);
