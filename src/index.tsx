import React from "react";
import ReactDOM from "react-dom";
import AppRoutes from "./components/AppRoutes";
import * as serviceWorker from "./serviceWorker";
import { FirebaseAppProvider } from "reactfire";
import {
  REACT_APP_FIREBASE_API_KEY,
  REACT_APP_FIREBASE_AUTH_DOMAIN,
  REACT_APP_FIREBASE_DATABASE_URL,
  REACT_APP_FIREBASE_PROJECT_ID,
  REACT_APP_FIREBASE_STORAGE_BUCKET,
  REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  REACT_APP_FIREBASE_APP_ID,
  REACT_APP_FIREBASE_MEASUREMENT_ID,
} from "./constants";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import Loading from "./components/Page/Loading";

const history = createBrowserHistory();

const firebaseConfig = {
  apiKey: REACT_APP_FIREBASE_API_KEY,
  authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: REACT_APP_FIREBASE_DATABASE_URL,
  projectId: REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: REACT_APP_FIREBASE_APP_ID,
  measurementId: REACT_APP_FIREBASE_MEASUREMENT_ID,
};

ReactDOM.render(
  <React.StrictMode>
    <React.Suspense fallback={<Loading />}>
      <FirebaseAppProvider firebaseConfig={firebaseConfig}>
        <Router history={history}>
          <AppRoutes history={history} />
        </Router>
      </FirebaseAppProvider>
    </React.Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
