import React from 'react';
import './App.css';

import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='App'>
        <NavBar />
        <Footer />
      </div>
    );
  }
}

export default App;
