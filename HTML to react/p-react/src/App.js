import React from "react";
import "./App.css";
import Home from "./pages/home";
import Generic from "./pages/generic";
import Elements from "./pages/elements";

import Footer from "./pages/footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Generic" component={Generic} />
          <Route path="/Elements" component={Elements} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
