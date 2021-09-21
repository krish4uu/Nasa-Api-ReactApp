import React from "react";
import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineGlobal,
} from "react-icons/ai";

function Footer() {
  return (
    <div className="footer">
      <p>@Kashyap Prajapati</p>

      <div>
        <a
          href="https://github.com/krish4uu"
          target="_blank"
          rel="noreferrer"
          className="footer-social"
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
          className="footer-social"
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
          className="footer-social"
        >
          {" "}
          <AiOutlineGlobal />
        </a>
      </div>
    </div>
  );
}

export default Footer;
