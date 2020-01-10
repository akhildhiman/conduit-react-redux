import React from 'react';
import Home from "./client/components/Home"
import Header from "./client/components/Header"
import Register from "./client/auth/Register"
import Login from "./client/auth/Login"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
