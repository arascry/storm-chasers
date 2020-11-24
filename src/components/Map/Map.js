import { useRef, useCallback, useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";

import "mapbox-gl/dist/mapbox-gl.css";
import "./Map.css"
import Bolt from "../Bolt/mapBolt.svg";
import "./Map.css";

function Map() {
  const [viewport, setViewport] = useState({
    width: 1000,
    height: 600,
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
  });

  const [markers, setMarkers] = useState([]);
  const [selected, setSelected] = useState(null);

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
        className="map"
        {...viewport}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        mapStyle="mapbox://styles/jacklmbrt07/ckhvi5y8y0ek119ml4lm1tebr"
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onClick={onMapClick}
        onLoad={onMapLoad}
      >
        {markers.map((marker) => (
          <Marker
            className="marker"
            key={marker.time.toISOString()}
            latitude={marker.latitude}
            longitude={marker.longitude}
            offsetLeft={0} //make it center of where you click //-20, -10
            offsetTop={0}
            data={markers}
          >
            <img
              src={Bolt}
              alt="mapBolt"
              width="42px"
              onClick={() => {
                setSelected(marker);
              }}
            />
          </Marker>
        ))}
        {selected ? (
          <div>Storm Spotted! {`${selected.time}`} </div>
        ) : (
          <div>Click a Storm to see details.</div>
        )}
      </ReactMapGL>
      <div className="details-container">
        {selected ? (
          <div className="details">
            <p className="detail-header">Username: </p>
            <p className="detail-header">
              Time: <span id="time">{`${selected.time}`}</span>
            </p>
            <p className="detail-header">
              Location:{" "}
              <span id="location">{`${selected.longitude}, ${selected.latitude}`}</span>
            </p>
          </div>
        ) : (
          <div className="details">
            <p className="detail-header">Username: </p>
            <p className="detail-header">Time: </p>
            <p className="detail-header">Location: </p>
          </div>
        )}
        <div>
          <p>
            hello
          </p>
        </div>
      </div>
    </div>
  );
}

export default Map;
