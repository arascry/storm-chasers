import React from 'react';

import { Switch, Route, Link } from 'react-router-dom';

import Landing from '../../pages/Landing/Landing';
import Login from '../../pages/Login/Login';
import Dashboard from '../../pages/Dashboard/Dashboard';

const NavBar = (props) => {
    return (
        <div>
            <h1>Navbar</h1>
            <Switch>
                <Route>
                    <Landing />
                </Route>
                <Route>
                    <Login />
                </Route>
                <Route>
                    <Dashboard />
                </Route>
            </Switch>
        </div>
    );
}

export default NavBar;