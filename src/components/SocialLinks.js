import React from "react";
import facebookLogo from "../assets/images/facebook.png";
import instagramLogo from "../assets/images/instagram.png";

export const SocialLinks = () => {
  return (
    <div className="flex p-2">
      <a
        href="https://www.facebook.com/SouthWingCafeteria"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={facebookLogo}
          alt="facebook"
          className="social-media-icon"
        ></img>
      </a>
      <a
        href="https://www.instagram.com/southwingcafeteria/?hl=en"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={instagramLogo}
          alt="instagram"
          className="social-media-icon"
        ></img>
      </a>
    </div>
  );
};
