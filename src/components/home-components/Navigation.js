import React from "react";
import { Menu } from "antd";
import "antd/dist/antd.css";
import { NavLink } from "react-router-dom";
import {
  HomeOutlined,
  BranchesOutlined,
  BookOutlined,
  SettingOutlined,
  UserOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { connect } from "react-redux";
import { logout } from "../../redux/actions/UserActions";

const { SubMenu } = Menu;

const Navigation = (props) => {
  const handleClick = (e) => {
    console.log("click ", e);
  };
  const logoutUser = () => {
    props.dispatch(logout());
    const user = { firstname: "", lastname: "", username: "", token: "" };
    const json = JSON.stringify(user);
    localStorage.setItem("user", json);
  };

  return (
    <div className="nav-menu">
      <div className="nav-user-profile">
        <h2>Welcome {props.user.firstname}</h2>
      </div>
      <Menu onClick={handleClick} style={{ width: 256 }} mode="vertical">
        <Menu.Item key="Home" icon={<HomeOutlined />} title="Home">
          <NavLink to="/home">Home</NavLink>
        </Menu.Item>

        <Menu.Item
          key="FindFriends"
          icon={<BranchesOutlined />}
          title="Find Friends"
        >
          <NavLink to="/findfriends">Find Friends</NavLink>
        </Menu.Item>

        <Menu.Item icon={<BookOutlined />} key="Slams" title="Slams">
          <NavLink to="/slams">Slams</NavLink>
        </Menu.Item>
        <SubMenu icon={<SettingOutlined />} key="sub4" title="Setting">
          <Menu.ItemGroup title="Setting">
            <Menu.Item icon={<UserOutlined />} key="Profile">
              <NavLink to="/profile">Profile</NavLink>
            </Menu.Item>
            <Menu.Item
              onClick={logoutUser}
              icon={<LogoutOutlined />}
              key="Logout"
            >
              Logout
            </Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
      </Menu>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToProps)(Navigation);
