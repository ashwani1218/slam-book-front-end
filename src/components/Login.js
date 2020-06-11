import React from "react";
import LoginForm from "./LoginForm";
import axios from "axios";

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
                    console.log(resp.data.response_description);
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

export default LoginPage;
