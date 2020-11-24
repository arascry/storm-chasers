import { useRef, useCallback, useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";

import "mapbox-gl/dist/mapbox-gl.css";
import "./Map.css"
import Bolt from "../Bolt/mapBolt.svg";

function Map() {
  const [viewport, setViewport] = useState({
    width: 1000,
    height: 600,
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
  });

  const [markers, setMarkers] = useState([]);

  const onMapClick = useCallback((event) => {
    setMarkers((current) => [
      ...current,
      {
        latitude: event.lngLat[1], // this is wrong, this function is for google maps not react-map-gl
        longitude: event.lngLat[0], /// this is wrong
        time: new Date(),
      },
    ]);
  }, []);

  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  return (
    <div className='Map'>
      <ReactMapGL
        {...viewport}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        mapStyle="mapbox://styles/jacklmbrt07/ckhvi5y8y0ek119ml4lm1tebr"
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onClick={onMapClick}
        onLoad={onMapLoad}
      >
        {markers.map((marker) => (
          <Marker
            key={marker.time.toISOString()}
            latitude={marker.latitude}
            longitude={marker.longitude}
            offsetLeft={-20} //make it center of where you click
            offsetTop={-10}
            data={markers}
          >
            <img src={Bolt} alt="mapBolt" width="42px" />
          </Marker>
        ))}
      </ReactMapGL>
    </div>
  );
}

export default Map;
