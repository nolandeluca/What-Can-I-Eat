import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import Tdee from "./components/Tdee/Tdee";

function App(props) {
  return (
    <BrowserRouter>
      <div>
        <nav className="navbar">
          <div className="container-960">
            <h1>Daily calorie use</h1>
          </div>
        </nav>

        <Route path="/tdee-calculator" component={Tdee} />
      </div>
    </BrowserRouter>
  );
}

export default App;
