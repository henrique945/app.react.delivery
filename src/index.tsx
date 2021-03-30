import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import Main from './pages/main/main';
import ProductDetail from './pages/product-detail/product-detail';

const routing = (
  <Router>
    <Switch>
      <Route exact path="/" component={ Main }/>
      <Route path="/product-detail" component={ ProductDetail }/>
    </Switch>
  </Router>
);

ReactDOM.render(
  routing,
  document.getElementById('root'),
);

