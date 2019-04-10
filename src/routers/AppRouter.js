import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import DashboardPage from '../components/DashboardPage';
// import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute'; // goal is to able to use private route in place of route for those pages
import PublicRoute from './PublicRoute';

export const history = createBrowserHistory();
// instead of using BrowserRouter, which already has history built in for us to use such as history.push
// we use the regular router and we pass our history in
const AppRouter = () => (
  <Router history={history}>
    <div> 
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={DashboardPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
