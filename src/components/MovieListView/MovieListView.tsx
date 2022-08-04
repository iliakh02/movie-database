import React from 'react';
import IMovie from '../../Types/Movie.type';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faStar } from '@fortawesome/free-solid-svg-icons';
import './MovieListView.css';

interface MovieListProps {
  listName: string;
  movieList: IMovie[];
}

function MovieListView({ listName, movieList }: MovieListProps) {
  return (
    <>
      <h3 className="movie-list-name">{listName}</h3>
      <div className="movie-container">
        {movieList.map((movie) => {
          return (
            <div className="movie-item" key={movie.id}>
              <img
                className="movie-image"
                src={movie.image}
                alt={movie.title}
              />
              <p className="movie-title">{movie.title}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default MovieListView;
