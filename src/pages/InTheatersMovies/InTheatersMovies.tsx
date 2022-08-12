import React, { useEffect, useState } from 'react';
import { MovieService } from '../../services/MovieService';
import IMovie from '../../Types/Movie.type';
import MovieListView from '../../components/MovieListView/MovieListView';
import MovieFilter from '../../components/MovieFilter/MovieFilter';

const InTheatersMovies = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const service = new MovieService();
  useEffect(() => {
    service.getInTheaters().then((data) => setMovies(data));
  }, []);
  console.log(movies);
  return (
    <div className="container">
      <MovieFilter />
      <MovieListView listName="In theaters movies:" movieList={movies} />
    </div>
  );
};

export default InTheatersMovies;
