import React, { useEffect, useState } from 'react';
import { MovieService } from '../../services/MovieService';
import IMovie from '../../Types/Movie.type';
import MovieListView from '../../components/MovieListView/MovieListView';
import MovieFilter from '../../components/MovieFilter/MovieFilter';

const MostPopularMovies = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const service = new MovieService();
  useEffect(() => {
    service.getMostPopularMovies().then((data) => setMovies(data));
  }, []);
  return (
    <div className="container">
      <MovieFilter />
      <MovieListView listName="Most popular movies:" movieList={movies} />
    </div>
  );
};

export default MostPopularMovies;
