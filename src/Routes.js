import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './layout/Home';
import Profile from './layout/Profile';
import Login from './layout/Login';
import SignUp from './layout/Signup';
import Edit from './layout/Edit';
import { AuthProvider } from './auth/AuthContext';
import { PrivateRoute } from './auth/PrivateRoute';

function Routes() {
  return (
    <AuthProvider>
      <Router>
        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute exact path="/profile" component={Profile} />
        <PrivateRoute path="/edit" component={Edit} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/sign-up" component={SignUp} />
      </Router>
    </AuthProvider>
  );
}

export default Routes;
