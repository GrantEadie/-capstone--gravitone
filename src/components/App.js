import React from "react";
import MatterWorld from "./MatterWorld";
import Header from "./Header";
import About from "./About";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/" component={MatterWorld} />
      </Switch>
    </div>
  );
}

export default App;
