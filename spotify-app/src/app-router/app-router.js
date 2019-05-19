import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from '../App';
import Login from '../components/content/login';

const history = require("history");

class AppRouter extends Component {

  render() {
    return (
      <Router history={history}>
          <Route path="/app" exact component={App} />
          <Route path="/login" exact component={Login} />
      </Router>
    );
  }
}

export default AppRouter;
