import React from "react";
import "./App.css";
import Reg from "./components/regform";
import LogIn from "./components/login";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Pro from "./components/pro";
import Home from "./components/home";

const App = (props) => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LogIn} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/regform" component={Reg} />
          <Pro exact path="/home" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
