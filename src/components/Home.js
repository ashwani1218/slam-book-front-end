import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Header from "./home-components/Header";
import Navigation from "./home-components/Navigation";

const Home = (props) => (
  <div className="page-container">
    <Header user={props.user} />
    <div className="home">
      <div className="nav">
        <Navigation />
      </div>
      <div className="page">
        {props.user.token === "" ? (
          <Redirect to="/" />
        ) : (
          console.log("valid session")
        )}
      </div>
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToProps)(Home);
