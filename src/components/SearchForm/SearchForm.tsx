import React from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router';
import './SearchForm.css';

const SearchForm = () => {
  let navigate = useNavigate();
  let searchValue = '';

  const onPressEnter = (event: any) => {
    if (event.key === 'Enter') {
      search(searchValue);
    }
  };

  const search = (searchString: string) => {
    navigate(`/search/${searchString}`);
  };

  return (
    <div className="search">
      <input
        className="search-input"
        placeholder="Search"
        datatype="text"
        onKeyDown={onPressEnter}
        onChange={(event) => {
          searchValue = event.target.value;
        }}
      />
      <FontAwesomeIcon
        icon={faSearch}
        color="#000d26"
        className="search-icon"
        onClick={() => {
          if (searchValue !== '') search(searchValue);
        }}
      />
    </div>
  );
};

export default SearchForm;
