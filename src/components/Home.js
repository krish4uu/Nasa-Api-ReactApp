import React from "react";
import { Link } from "react-router-dom";
import { GiRocketFlight } from "react-icons/gi";
export default function Home() {
  return (
    <div>
      <h1 className="home-header">
       
        Spacegram
        {""}
        <GiRocketFlight style={{ marginLeft: "5px" }} />
      </h1>

      <div className="home">
        <Link className="home-link" to="/nasaphoto">
          Let's dive into space
        </Link>
      </div>
    </div>
  );
}
