import React from "react";
import { connect } from "react-redux";

const Home = (props) => (
  <div>
    <h1>Welcome {props.user.firstname} </h1>
    {console.log(props.user)}
  </div>
);

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToProps)(Home);
