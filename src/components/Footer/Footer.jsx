import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="about">
            Gathr connects people through fascinating events and activities.
             Our mission is to create memorable experiences and foster community engagement through a variety of events.
            </p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul className="footer-links">
              <li><a href="/events">Events</a></li>
              <li><a href="/">Categories</a></li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li><a href="/">About Us</a></li>
              <li><a href="/">Contact Us</a></li>
              <li><a href="/">Privacy Policy</a></li>
              <li><a href="/">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div>
            <p className="copyright-text">
              Copyright &copy; 2024 All Rights Reserved by{' '}
              <a href="">Gathr</a>.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
