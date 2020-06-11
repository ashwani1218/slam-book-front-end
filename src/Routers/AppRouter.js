import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {} from "antd";
import Home from "../components/Home";
import LoginPage from "../components/Login";

const AppRouter = () => (
  <div>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/login" exact={true} component={LoginPage} />
        </Switch>
      </div>
    </BrowserRouter>
  </div>
);

export default AppRouter;
