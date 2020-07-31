import React from 'react';
import { Router, Switch, Route } from 'react-router-dom'
import history from './components/history'
import PrivateRoute from './components/PrivateRoute'
import './App.css';
import FoodTruckForm from './components/Operator/FoodTruckForm';
import DinerTruckMenu from './components/User/DinerTruckMenu'
import OperatorDashboard from './components/Operator/OperatorDashboard'
import FoodTruckMenu from './components/Operator/FoodTruckMenu'
import SignupPage from './components/login/SignupPage'
import LoginPage from './components/login/LoginPage'
import OperatorLoginPage from './components/login/OperatorLoginPage'
import OperatorSignupPage from './components/login/OperatorSignupPage'
import TestDiner from './components/User/testdiner';
import TruckList from './components/User/TruckList';
import SignSelect from './components/SignSelect'
import DinerSign from './components/DinerSign'
import TruckSign from './components/TruckSign'

function App() {
  return (

    <>
          <Route exact path='/' component={SignSelect} />
          <Route exact path='/DinerSign' component={DinerSign} />
          <Route exact path='/TruckSign' component={TruckSign} />
          <Route exact path='/register' component={SignupPage} />
          <Route exact path='/register2' component={OperatorSignupPage} />
          <Route exact path='/Dinerlogin' component={LoginPage} />
          <Route exact path='/Operatorlogin' component={OperatorLoginPage} />
          <PrivateRoute exact path='/diner/dashboard' component={TestDiner} />
          <PrivateRoute exact path='/diner/trucks' component={TruckList} />
          <PrivateRoute exact path='/diner/trucks/:id' component={DinerTruckMenu} />
          <PrivateRoute exact path='/operator/dashboard' component={OperatorDashboard} />
          <PrivateRoute exact path='/operator/add-trucks' component={FoodTruckForm} />
          <PrivateRoute exact path='/operator/:id' component={FoodTruckMenu} />


    </>

  );
}

export default App;
