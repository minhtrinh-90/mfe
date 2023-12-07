import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName
} from "@material-ui/core/styles";

import Signin from "./components/Signin";
import Signup from "./components/Signup";

export default ({ history, onSignedIn }) => {
  const generateClassName = createGenerateClassName({
    productionPrefix: "au"
  });

  return (
    <Router history={history}>
      <StylesProvider generateClassName={generateClassName}>
        <Switch>
          <Route path="/auth/signin">
            <Signin onSignedIn={onSignedIn} />
          </Route>
          <Route path="/auth/signup">
            <Signup onSignedIn={onSignedIn} />
          </Route>
        </Switch>
      </StylesProvider>
    </Router>
  );
};
