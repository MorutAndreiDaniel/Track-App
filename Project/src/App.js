import React from "react";
import "./assets/general.scss";
import MainPage from "./MainPageComponents/MainPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProjectPage from "./ProjectPage/ProjectPage";

const App = () => {
  return (
    <div className="app-container">
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route path="/projectPage">
          <ProjectPage />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
