import React from 'react';
import './Header.css';
import logoImg from '../../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
function Header() {
  return (
    <header className="App-header">
      <div className="container">
        <div className="header-body">
          <a className="logo" href="/">
            <img src={logoImg} className="logo-image" alt="logo image" />
            <p className="logo-name">MovieDatabase</p>
          </a>
          <div className="search">
            <input
              className="search-input"
              placeholder="Search"
              datatype="text"
            />
            <FontAwesomeIcon
              icon={faSearch}
              color="#000d26"
              className="search-icon"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
