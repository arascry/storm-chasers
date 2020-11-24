import React from "react";

import "./MarkerInfo.css";

const MarkerInfo = (props) => {
    return (
        <div className="Marker-Info">
            <p>Username: </p>
            <p>Time: {props.data ? (<span id='props-date'>{props.data.time.toUTCString()}</span>) : ""}</p>
            <p>
                Location:{" "}
                {props.data ? (<span id='props-lng-lat'>{props.data.longitude.toFixed(7)}, {props.data.latitude.toFixed(7)}</span>) : ""
                }
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
