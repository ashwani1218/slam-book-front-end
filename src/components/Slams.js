import React from "react";
import Navigation from "./home-components/Navigation";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

const Slams = (props) => {
  return (
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
        <h1>Slams Page</h1>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToProps)(Slams);
