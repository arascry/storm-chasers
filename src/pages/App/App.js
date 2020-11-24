import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';

import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';

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
        <NavBar />
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
        <Footer />
      </div>
    );
  }
}

export default App;
