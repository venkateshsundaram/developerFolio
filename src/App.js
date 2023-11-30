import React from "react";
import ProgressBar from "react-progressbar-on-scroll";

import "./App.scss";
import Main from "./containers/Main";

function App() {
  return (
    <div>
      <ProgressBar color="#0d64c2" height={6} />
      <Main />
    </div>
  );
}

export default App;
