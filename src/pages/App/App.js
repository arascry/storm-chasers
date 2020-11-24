import React from 'react';
import './App.css';

import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';

import Map from '../../components/Map/Map' //delete this

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='App'>
        <NavBar />
        <Map /> {/* delete this */}
        <Footer />
      </div>
    );
  }
}

export default App;
