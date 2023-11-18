import React from "react";
import "./App.css";

const UnauthenticatedApp = React.lazy(() => import("./unauthenticated-app"));

function App() {
  return (
    <div className="App">
      <UnauthenticatedApp />
    </div>
  );
}

export default App;
