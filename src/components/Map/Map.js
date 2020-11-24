import React from 'react';

import { useState } from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';

import 'mapbox-gl/dist/mapbox-gl.css';

function Map() {
  const [viewport, setViewport] = useState({
    width: '70vw',
    height: '70vh',
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8
  });

  return (
    <div>
      <ReactMapGL
        {...viewport}
        onViewportChange={nextViewport => setViewport(nextViewport)}
        mapStyle="mapbox://styles/jacklmbrt07/ckhvi5y8y0ek119ml4lm1tebr"
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      />
    </div>
  );
}

export default Map;