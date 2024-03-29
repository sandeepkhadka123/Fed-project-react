import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import "./footer.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="about">
            <div className="footer-logo">
              <img src="./images/logo.png" alt="footer" />
            </div>
            <div className="footer-details">
              <p>We are a team that creates a creative products like deez.</p>
              {/* <div className="icons">
                <li>
                  <FaFacebookF />
                </li>
                <li>
                  <FaInstagram />
                </li>
                <li>
                  <FaLinkedinIn />
                </li>
                <li>
                  <FaTwitter />
                </li>
              </div> */}
            </div>
          </div>
        </div>
        <div className="account">
          <h3>My Account</h3>
          <ul>
            <li>Account</li>
            <li>Order</li>
            <li>Cart</li>
            <li>Return</li>
            <li>Shipping</li>
          </ul>
        </div>
        <div className="pages">
          <h3>Pages</h3>
          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="follow-up">
          <h3>Follow us</h3>
          <ul>
            <li>
              <FaFacebookF />
              Facebook
            </li>
            <li>
              <FaLinkedinIn />
              Linked In
            </li>
            <li>
              <FaTwitter />
              Twitter
            </li>
            <li>
              <FaTelegramPlane />
              Telegram
            </li>
            <li>
              <FaInstagram />
              Instagram
            </li>
          </ul>
        </div>
        <div className="location">
          <div className="location-container">
            <div className="location-icons">
              <h3>Location</h3>
              <p>
                <FaLocationDot />
                Maharajgunj,ktm
              </p>
              <p>
                <FaPhone />
                +977 9745959622
              </p>
              <p>
                <HiOutlineMail />
                @infotech.appleproducts.com.np
              </p>
              <p>We are available, 24 hours and 7 days at your service.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-info">
        <p>
          <FaCopyright /> copyright, All reserved to the admin.
        </p>
      </div>
    </>
  );
};

export default Footer;
