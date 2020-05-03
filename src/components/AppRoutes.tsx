import React from "react";
import { useFirebaseApp, AuthCheck } from "reactfire";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import { History } from "history";
import LoginPage from "./Login/LoginPage";
import BootstrapApp from "./BootstrapApp";
import Profile from "./Profile";
import { routeConfig } from "../util/RouteConfig";
import HomePage from "./Homepage";
import RegistrationPage from "./Register";

interface AppProps {
  history: History;
}

function App({ history }: AppProps) {
  const firebaseApp = useFirebaseApp();

  // expose firebase stuff for debugging purposes only
  if (process.env.NODE_ENV === "development") {
    (window as any).reactfire = firebaseApp;
  }

  const insideRoutes = [routeConfig.home.path, routeConfig.profile.path];
  const outsideRoutes = [
    routeConfig.login.path,
    routeConfig.passwordReset.path,
    routeConfig.register.path,
  ];

  return (
    <Router history={history}>
      <Switch>
        <Route path={`(${outsideRoutes.join("|")})`}>
          <Switch>
            <Route exact={true} path={routeConfig.login.path}>
              <LoginPage />
            </Route>
            <Route exact={true} path={routeConfig.register.path}>
              <RegistrationPage />
            </Route>
          </Switch>
        </Route>

        <Route path={`(${insideRoutes.join("|")})`}>
          <AuthCheck fallback={<Redirect to={routeConfig.login.path} />}>
            <BootstrapApp>
              <Switch>
                <Route exact={true} path={routeConfig.home.path}>
                  <HomePage />
                </Route>
                <Route exact={true} path={routeConfig.profile.path}>
                  <Profile />
                </Route>
              </Switch>
            </BootstrapApp>
          </AuthCheck>
        </Route>

        <Route path={"*"}>{"not found"}</Route>
      </Switch>
    </Router>
  );
}

export default App;
