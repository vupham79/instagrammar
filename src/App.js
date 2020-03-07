import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Routes } from "./route";
import Spinner from "./component/Spinner";
import NotFound from "./page/404";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        {Routes.map(route => (
          <Route
            key={route.path}
            exact={route.exact}
            path={route.path}
            component={route.component}
          />
        ))}
        <Route path="*" exact={true} component={NotFound} />
      </Switch>
      <Spinner />
    </BrowserRouter>
  );
}

export default App;
