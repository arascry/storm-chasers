import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';

import Landing from '../../pages/Landing/Landing';
import Login from '../../pages/Login/Login';
import Dashboard from '../../pages/Dashboard/Dashboard';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='App'>
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/admin'>
            <Dashboard />
          </Route>
          <Route path='/'>
            <Landing />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
