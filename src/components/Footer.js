import React from "react";
import NALogo from "../assets/images/na-logo-black.png";

const Footer = ({ message, link }) => {
  const followLink = () => {
    window.open(link)
  }
  return (
    <>
      <div className="footer">
        <img
          src={NALogo}
          alt="na-logo"
          style={{ width: "50px", height: "50px", alignSelf: "center" }}
        />
        <small
          className="font-alt text-center w-50"
          style={{ alignSelf: "center" }}
        >
          {message}
        </small>
        <button
          className="btn-footer font-alt w-25 text-orange"
          style={{ maxHeight: "60px", alignSelf: "center" }}
          onClick={() => followLink()}
        >
          Learn more!
        </button>
      </div>
    </>
  );
};

export default Footer;
