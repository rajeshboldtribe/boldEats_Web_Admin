import React from 'react';
import './Footer.css';
import logo from "../../assets/images/BoldTribe Logo.svg"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Left Section with Logo and Information */}
        <div className="footer-left">
          <img src={logo} alt="Logo" className="footer-logo" />
          <div className="footer-info">
            <p className="address">DLF Cybercity, IDCO Infotech, Patia, Bhubaneswar, Odisha</p>
            <p className="contact-number">Contact: +91-1234567890</p>
          </div>
        </div>

        {/* Middle Section with Extra Information */}
        <div className="footer-middle">
          <p>Opening Hours: Mon-Fri 9:00 AM to 6:00 PM</p>
          <p>Email: support@boldeats.com</p>
        </div>

        {/* Right Section with Additional Information */}
        <div className="footer-right">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2024 BoldEats Admin. All rights reserved by Boldtribe Innovations Private Limited.</p>
      </div>
    </footer>
  );
};

export default Footer;