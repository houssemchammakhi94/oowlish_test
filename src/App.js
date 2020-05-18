import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {Table } from 'reactstrap';
import Login from './components/Login';
import Admin from './components/Admin';
import Logout from './components/Logout';

function App() {
  return (   
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login}/>
      <Route exact path="/Admin" component={Admin}/>
      <Route exact path="/Logout" component={Logout}/>

    </Switch>
    </BrowserRouter>

  );
}

export default App;
