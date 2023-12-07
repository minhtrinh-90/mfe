import React, { Suspense, lazy, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName
} from "@material-ui/core/styles";

import Header from "./components/Header";
import Progress from "./components/Progress";

const MarketingApp = lazy(() => import("./components/MarketingApp"));
const AuthApp = lazy(() => import("./components/AuthApp"));

const generateClassName = createGenerateClassName({
  productionPrefix: "co"
});

export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header
            isSignedIn={isSignedIn}
            onSignOut={() => setIsSignedIn(false)}
          />
          <Switch>
            <Suspense fallback={<Progress />}>
              <Route path="/auth">
                <AuthApp onSignedIn={() => setIsSignedIn(true)} />
              </Route>
              <Route path="/">
                <MarketingApp isSignedIn={isSignedIn} />
              </Route>
            </Suspense>
          </Switch>
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
}
