import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";

const Resume = React.lazy(() => {
  return import("./components/Resume/Resume");
});

function App() {
  let routes = (
    <Switch>
      <Route path="/" exact component={Layout} />
      <Route path="/resume" component={Resume} />
      <Redirect to="/" />
    </Switch>
  );

  return <Suspense fallback={<div>Loading...</div>}>{routes}</Suspense>;
}

export default App;
