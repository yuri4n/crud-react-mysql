import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';

import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './routes/App'
import Users from './routes/Users'
import Categories from './routes/Categories'

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/users" component={Users} />
      <Route path="/categories" component={Categories} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'))

serviceWorker.unregister();
