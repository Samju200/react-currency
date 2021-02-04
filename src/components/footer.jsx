import React, { useState } from 'react';
// import { FaLinkedin, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { social } from './data';

const Footer = () => {
  return (
    <div>
      <footer>
        <ul className="social-icons footer-icons">
          {social.map((socialLink) => {
            const { id, url, icon } = socialLink;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
        <p className="copy">
          Copyright &copy; <span className="year"></span>, Currency Exchange.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
