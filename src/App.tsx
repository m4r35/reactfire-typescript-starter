import React from "react";
import {
  useFirestoreDocData,
  useFirestore,
  SuspenseWithPerf,
  useFirebaseApp,
} from "reactfire";

function App() {
  const appObj = useFirebaseApp();
  (window as any).reactfire = appObj;

  const appRef = useFirestore().collection("crm").doc("app");
  const app: firebase.firestore.DocumentData = useFirestoreDocData(appRef);

  return (
    <div className="App">
      <SuspenseWithPerf fallback={"load app ..."} traceId={"load-app"}>
        <p>{app.isUp ? "up and running!" : "nope"}</p>
      </SuspenseWithPerf>
    </div>
  );
}

export default App;
