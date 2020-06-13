import React from "react";
import Navigation from "./home-components/Navigation";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Header from "./home-components/Header";
import { addUser } from "../redux/actions/UserActions";

class Slams extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
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
      <div className="page-container">
        <Header user={this.props.user} />
        <div className="home">
          <div className="nav">
            <Navigation />
          </div>
          <div className="page">
            {JSON.parse(localStorage.getItem("user")).token === "" ? (
              <Redirect to="/" />
            ) : (
              console.log("valid session")
            )}
            <h1>Slams Page</h1>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToProps)(Slams);
