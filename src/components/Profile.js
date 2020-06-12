import React from "react";
import { connect } from "react-redux";
import Header from "./home-components/Header";
import { Redirect } from "react-router-dom";
import Navigation from "./home-components/Navigation";

const Profile = (props) => {
  return (
    <div className="page-container">
      <Header user={props.user} />
      <div className="home">
        {props.user.token === "" ? (
          <Redirect to="/" />
        ) : (
          console.log("valid session")
        )}
        <div className="nav">
          <Navigation />
        </div>
        <div className="page">
          <h1>Profile</h1>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToProps)(Profile);
