import React from "react";

const Header = (props) => {
  return (
    <div style={Style.header}>
      <h1>Welcome {props.user.firstname}</h1>
    </div>
  );
};
const Style = {
  header: {
    textAlign: "center",
  },
};
export default Header;
