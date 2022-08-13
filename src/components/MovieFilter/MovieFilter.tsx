import React from 'react';
import { Link } from 'react-router-dom';
import './MovieFilter.css';

const MovieFilter = () => {
  const url = window.location.href.split('/');
  const filterName = url[url.length - 1];
  return (
    <div className="movie-filter-block">
      <Link
        to="/"
        className={
          filterName === '' || filterName === 'mostPopular' ? 'active' : ''
        }
      >
        Most Popular
      </Link>
      <Link
        to="/inTheaters"
        className={filterName === 'inTheaters' ? 'active' : ''}
      >
        In theaters
      </Link>
      <Link to="/top250" className={filterName === 'top250' ? 'active' : ''}>
        Top 250
      </Link>
    </div>
  );
};

export default MovieFilter;
