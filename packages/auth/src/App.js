import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName
} from "@material-ui/core/styles";

import Signin from "./components/Signin";
import Signup from "./components/Signup";

export default ({ history }) => {
  const generateClassName = createGenerateClassName({
    productionPrefix: "au"
  });

  return (
    <Router history={history}>
      <StylesProvider generateClassName={generateClassName}>
        <Switch>
          <Route path="/auth/signin" component={Signin} />
          <Route path="/auth/signup" component={Signup} />
        </Switch>
      </StylesProvider>
    </Router>
  );
};
