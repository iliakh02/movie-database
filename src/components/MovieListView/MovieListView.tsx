import React from 'react';
import IMovie from '../../Types/Movie.type';
import './MovieListView.css';
import { Link } from 'react-router-dom';

interface MovieListProps {
  listName: string;
  movieList: IMovie[];
}

const MovieListView = ({ listName, movieList }: MovieListProps) => {
  return (
    <>
      <h3 className="movie-list-name">{listName}</h3>
      <div className="movie-container">
        {movieList.map((movie) => {
          return (
            <div className="movie-item" key={movie.id}>
              <Link to={`/title/${movie.id}`}>
                <img
                  className="movie-image"
                  src={movie?.image
                    .split('.')
                    .splice(0, 3)
                    .concat('_V1_UX270_CR0,4,270,372_AL_.jpg')
                    .join('.')}
                  alt={movie.title}
                  loading={'lazy'}
                />
                <p className="movie-title">{movie.title}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MovieListView;
