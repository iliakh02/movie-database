import React, { useEffect } from 'react';
import './Header.css';
import logoImg from '../../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  setSearchQuery: Function;
}

const Header = () => {
  let navigate = useNavigate();
  const onPressEnter = (event: any) => {
    // console.log(event.key);

    if (event.key === 'Enter') {
      console.log('Enter key pressed ✅');
      navigate(`/search/${event.target.value}`);
      // console.log(event.target.value);
      // setSearchQuery(event.target.value);
    }
  };

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
              onKeyDown={onPressEnter}
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
};

export default Header;
