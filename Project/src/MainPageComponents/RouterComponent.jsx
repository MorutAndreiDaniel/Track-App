import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./MainPage";
import Test from "./Test";
import ProjectPage from "../ProjectPage/ProjectPage";

const RouterComponent = () => {
  return (
    <Switch>
      <Route exact path="/">
        <MainPage />
      </Route>
      <Route path="/projectPage">
        <Test />
      </Route>
    </Switch>
  );
};

export default RouterComponent;
