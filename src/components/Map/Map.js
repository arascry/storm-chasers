import React from 'react';

import { useState } from 'react';
import ReactMapGL from 'react-map-gl';

import 'mapbox-gl/dist/mapbox-gl.css';

const TOKEN = 'pk.eyJ1IjoibWlua2Fyb24iLCJhIjoiY2todjZydnM5MTBtMTJybWFpdGo3empqcSJ9.GJcZVdMWlq4VTsjCy_zQQA';

function Map() {
  const [viewport, setViewport] = useState({
    width: '50vw',
    height: '50vh',
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8
  });

  return (
    <ReactMapGL
      {...viewport}
      onViewportChange={nextViewport => setViewport(nextViewport)}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      mapboxApiAccessToken={TOKEN}
    />
  );
}

export default Map;