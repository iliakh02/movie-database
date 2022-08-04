import React from 'react';
import './Header.css';
import logoImg from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import SearchForm from '../SearchForm/SearchForm';

const Header = () => {
  return (
    <header className="App-header">
      <div className="container">
        <div className="header-body">
          <Link to="/" className="logo">
            <img src={logoImg} className="logo-image" alt="logo image" />
            <p className="logo-name">MovieDatabase</p>
          </Link>
          <SearchForm />
        </div>
      </div>
    </header>
  );
};

export default Header;
