import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Resume from "./components/Resume/Resume";

function App() {
  let routes = (
    <Switch>
      <Route path="/" exact component={Layout} />
      <Route path="/resume" component={Resume} />
      <Redirect to="/" />
    </Switch>
  );

  return <div>{routes}</div>;
}

export default App;
