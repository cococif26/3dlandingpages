import React from "react";
import './css/3d.css';
import Herotext from "./component/intro";
import Navigation from "./component/navigationbar";
import BestDo from "./component/best";
import Development from "./component/branding";

function App() {
  return (
    <div>
      <div className="BG">
        <Navigation/>
        <Herotext/>
      </div>
      <div className="best">
        <BestDo/>
      </div>
      <div className="develop">
        <Development/>
      </div>
    </div>
  );
}

export default App;
