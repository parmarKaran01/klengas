import React from "react";
import "./Footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
function Footer() {
  return (
    <div className="footer">
      <p>© 2021 Klengas Tech LLP . All Rights Reserved</p>
      <div className="handles">
        <a href="https://www.facebook.com/pages/category/Gas---Chemical-Service/Klengas-Tech-LLP-1689560071367498/">
          <FacebookIcon className="socialmedia__handles" />
        </a>
        <a href="https://www.youtube.com/user/maku2575">
          <YouTubeIcon className="socialmedia__handles yt" />
        </a>
        <a href="https://www.linkedin.com/company/klengas-tech-llp/about/">
          <LinkedInIcon className="socialmedia__handles li" />
        </a>
        <a href="https://twitter.com/klengas">
          <TwitterIcon className="socialmedia__handles" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
