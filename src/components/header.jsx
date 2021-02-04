import React, { useState, useRef, useEffect } from 'react';
import { links, social } from './data';
import { FaBars } from 'react-icons/fa';

const Header = () => {
  const [showlink, setShowLink] = useState(false);
  const listLinkRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showlink) {
      listLinkRef.current.style.height = `${linksHeight}px`;
    } else {
      listLinkRef.current.style.height = '0px';
    }
  });

  return (
    <div>
      <header>
        <nav>
          <div className="nav-center">
            <div className="nav-header">
              <h1 className="logo">
                <a href="">CURRENCY EXCHANGE</a>
              </h1>
              <button
                className="nav-toggle"
                onClick={() => setShowLink(!showlink)}
              >
                <FaBars />
              </button>
            </div>
            <div className="list-link" ref={listLinkRef}>
              <ul className="links" ref={linksRef}>
                {links.map((link) => {
                  const { id, url, text } = link;
                  return (
                    <li key={id}>
                      <a href={url}>{text}</a>
                    </li>
                  );
                })}
              </ul>
            </div>

            <ul className="social-icons">
              {social.map((socialLink) => {
                const { id, url, icon } = socialLink;
                return (
                  <li key={id}>
                    <a href={url}>{icon}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
