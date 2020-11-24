import "./App.css";
import { useState } from "react";
import ReactMapGL from "react-map-gl";
import NavBar from "./Components/Navbar/Navbar";

export default function App() {
  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
  });
  return (
    <div className="App">
      <NavBar />
      <div>
        <ReactMapGL
          {...viewport}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          onViewportChange={(nextViewport) => setViewport(nextViewport)}
        >
          markers go here
        </ReactMapGL>
      </div>
    </div>
  );
}
