import React from "react";
import { GiRocketFlight } from "react-icons/gi";
import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineGlobal,
} from "react-icons/ai";
export default function NavBar() {
  return (
    <div className="navbar">
      <div>
        <h1 className="nav-logo">
          Spacegram
          {""}
          <GiRocketFlight style={{ marginLeft: "5px" }} />
        </h1>
      </div>
      <div className="nav-social">
        <div>
          <a
            href="https://github.com/krish4uu"
            target="_blank"
            rel="noreferrer"
            className="social"
          >
            {" "}
            <AiOutlineGithub />
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/prajapatikashyap"
            target="_blank"
            rel="noreferrer"
            className="social"
          >
            {" "}
            <AiFillLinkedin />
          </a>
        </div>
        <div>
          <a
            href="https://www.kashyapprajapati.com"
            target="_blank"
            rel="noreferrer"
            className="social"
          >
            {" "}
            <AiOutlineGlobal />
          </a>
        </div>
      </div>
    </div>
  );
}
