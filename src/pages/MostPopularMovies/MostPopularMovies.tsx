import React, { useEffect, useState } from 'react';
import { MovieService } from '../../services/MovieService';
import IMovie from '../../Types/Movie.type';
import MovieListView from '../../components/MovieListView/MovieListView';

const MostPopularMovies = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const service = new MovieService();
  useEffect(() => {
    service.getMostPopularMovies().then((data) => setMovies(data));
  }, []);
  console.log(movies);
  return (
    <div className="container">
      <MovieListView listName="Most popular movies:" movieList={movies} />
    </div>
  );
};

export default MostPopularMovies;
