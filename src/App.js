import React from "react";
import ProgressBar from "react-progressbar-on-scroll";

import "./App.scss";
import Main from "./containers/Main";

function App() {
  return (
    <div>
      <ProgressBar color="#0e6aa8" height={5} />
      <Main />
    </div>
  );
}

export default App;
