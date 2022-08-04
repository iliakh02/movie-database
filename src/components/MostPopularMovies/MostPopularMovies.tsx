import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MovieService } from '../../services/MovieService';
import IMovie from '../../Types/Movie.type';
import Header from '../Header/Header';
import MovieListView from '../MovieListView/MovieListView';

const MostPopularMovies = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const service = new MovieService();
  useEffect(() => {
    service.getMostPopularMovies().then((data) => setMovies(data));
  }, []);
  console.log(movies);
  return (
    <>
      {/* <Header /> */}
      <MovieListView listName="Most popular movies:" movieList={movies} />
    </>
  );
};

export default MostPopularMovies;
