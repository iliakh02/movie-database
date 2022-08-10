import React from 'react';
import IMovie from '../../Types/Movie.type';
import './MovieListView.css';
import { Link } from 'react-router-dom';

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
              <Link to={`title/${movie.id}`}>
                <img
                  className="movie-image"
                  src={movie.image}
                  alt={movie.title}
                />
                <p className="movie-title">{movie.title}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default MovieListView;
