import React, { useState } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router';
import './SearchForm.css';

const SearchForm = () => {
  let navigate = useNavigate();

  const onPressEnter = (event: any) => {
    if (event.key === 'Enter') {
      console.log('Enter key pressed ✅');
      navigate(`/search/${event.target.value}`);
    }
  };

  return (
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
  );
};

export default SearchForm;
