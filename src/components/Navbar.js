import React from "react";
import { GiRocketFlight } from "react-icons/gi";

export default function NavBar() {
  return (
    <div className="navbar">
      <div>
        <h1 className="home-header">
          Spacegram
          {""}
          <GiRocketFlight style={{ marginLeft: "5px" }} />
        </h1>
      </div>
    </div>
  );
}
