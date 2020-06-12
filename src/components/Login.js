import React from "react";
import LoginForm from "./LoginForm";
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
                    console.log(resp.data);
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
