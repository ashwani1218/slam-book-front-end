import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {} from "antd";
import Home from "../components/Home";
import LoginPage from "../components/Login";
import PageNotFound from "../components/PageNotFound";
import FindFriends from "../components/FindFriends";
import Slams from "../components/Slams";

const AppRouter = () => (
  <div>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" exact={true} component={LoginPage} />
          <Route path="/home" exact={true} component={Home} />
          <Route path="/findfriends" exact={true} component={FindFriends} />
          <Route path="/slams" exact={true} component={Slams} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  </div>
);

export default AppRouter;
