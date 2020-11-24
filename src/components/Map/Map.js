import React from "react";

import { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";

import "mapbox-gl/dist/mapbox-gl.css";

function Map() {
  const [viewport, setViewport] = useState({
    width: "70vw",
    height: "70vh",
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
  });

  const [markers, setMarkers] = useState([]);

  return (
    <div>
      <ReactMapGL
        {...viewport}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        mapStyle="mapbox://styles/jacklmbrt07/ckhvi5y8y0ek119ml4lm1tebr"
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onClick={(event) => {
          setMarkers((current) => [
            ...current,
            {
              latitude: event.lngLat[1], // this is wrong, this function is for google maps not react-map-gl
              longitude: event.lngLat[0], /// this is wrong
              time: new Date(),
            },
          ]);
        }}
      >
        {markers.map((marker) => (
          <Marker
            key={marker.time.toISOString()}
            latitude={marker.latitude}
            longitude={marker.longitude}
            offsetLeft={-20} //make it center of where you click
            offsetTop={-10}
          />
        ))}
      </ReactMapGL>
    </div>
  );
}

export default Map;
