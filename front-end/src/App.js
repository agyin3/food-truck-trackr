import React from 'react';
import { Router, Switch, Route } from 'react-router-dom'
import history from './components/history'
import PrivateRoute from './components/PrivateRoute'
import './App.css';
import FoodTruckForm from './components/Operator/FoodTruckForm';
import OperatorDashboard from './components/Operator/OperatorDashboard'
import FoodTruckMenu from './components/Operator/FoodTruckMenu'
import Header from './components/headers/Header'
import SignupPage from './components/login/SignupPage'
import LoginPage from './components/login/LoginPage'
import TestDiner from './components/User/testdiner';

function App() {
  return (

    <>
      <Router history={history}>
        <Switch>
          <PrivateRoute exact path='/diner/dashboard' component={TestDiner} />
          <PrivateRoute exact path='/operator/dashboard' component={OperatorDashboard} />
          <PrivateRoute exact path='/operator/add-trucks' component={FoodTruckForm} />
          <PrivateRoute exact path='/operator/:id' component={FoodTruckMenu} />
          <Route exact path='/login' component={LoginPage} />
          <Route exact path='/register' component={SignupPage} />
          <Route component={LoginPage} />
        </Switch>
      </Router>
    </>

  );
}

export default App;
