import React from "react";
import LoginForm from "./LoginForm";
import axios from "axios";
import { connect } from "react-redux";
import { addUser } from "../redux/actions/UserActions";

class LoginPage extends React.Component {
  render() {
    return (
      <div className="login">
        <div className="login-form">
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
                    console.log(resp.data);
                    this.props.history.push("/");
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
