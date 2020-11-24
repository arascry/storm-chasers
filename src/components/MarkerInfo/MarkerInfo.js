import React from "react";

import "./MarkerInfo.css";

const MarkerInfo = (props) => {
  return (
    <div className="Marker-Info">
      <p>Username: </p>
      <p>Time: {`${props.data ? props.data.time : ""}`}</p>
      <p>
        Location:{" "}
        {`${
          props.data ? `${props.data.longitude}, ${props.data.latitude}` : ""
        }`}
      </p>
      <br />
      <p id="info">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </div>
  );
};

export default MarkerInfo;
