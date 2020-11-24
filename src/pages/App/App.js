import React from 'react';

import Map from '../../components/Map/Map';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isMarkerShown: false
    }
  }

  componentDidMount() {
    this.delayedShowMarker()
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 3000)
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }

  render() {
    return (
      <div className='App'>
        <Map />
      </div>
    );
  }
}

export default App;
