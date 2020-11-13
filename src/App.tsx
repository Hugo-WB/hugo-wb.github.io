import React, { ReactElement } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Views
import Home from "./views/Home"

interface Props {}

export default function App({}: Props): ReactElement {
  interface route {
    component: any;
    path: string;
  }
  const routes: route[] = [{
    component: Home,
    path:"*"
  }];

  const routesJSX = routes.map((r) => (
    <Route path={r.path} component={r.component} />
  ));
  return (
    <div>
      <Router>
        {routesJSX}
      </Router>
    </div>
  );
}
