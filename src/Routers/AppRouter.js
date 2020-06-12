import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {} from "antd";
import Home from "../components/Home";
import LoginPage from "../components/Login";
import PageNotFound from "../components/PageNotFound";
import FindFriends from "../components/FindFriends";
import Slams from "../components/Slams";
import Profile from "../components/Profile";

const AppRouter = () => (
  <div className="page-container">
    <BrowserRouter>
      <div className="page-container">
        <Switch>
          <Route path="/" exact={true} component={LoginPage} />
          <Route path="/home" exact={true} component={Home} />
          <Route path="/findfriends" exact={true} component={FindFriends} />
          <Route path="/slams" exact={true} component={Slams} />
          <Route path="/profile" exact={true} component={Profile} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  </div>
);

export default AppRouter;
