import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { MovieService } from '../../services/MovieService';
import IMovie from '../../Types/Movie.type';
import MovieListView from '../../components/MovieListView/MovieListView';

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
    <div className="container">
      <MovieListView
        listName={
          movies.length > 0
            ? `Search result for "${searchQuery}":`
            : `No result found for "${searchQuery}"`
        }
        movieList={movies}
      />
    </div>
  );
};

export default Search;
