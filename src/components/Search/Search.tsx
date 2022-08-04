import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { MovieService } from '../../services/MovieService';
import IMovie from '../../Types/Movie.type';
import Header from '../Header/Header';
import MovieListView from '../MovieListView/MovieListView';

const Search = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const { searchQuery } = useParams<string>();
  const movieService = new MovieService();

  useEffect(() => {
    movieService
      .getMoviesBySearchQuery(searchQuery as string)
      .then((data) => setMovies(data));
  }, [searchQuery]);

  return (
    <>
      {/* <Header /> */}
      <MovieListView listName={'Search result:'} movieList={movies} />
    </>
  );
};

export default Search;
