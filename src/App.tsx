import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import MovieListView from './components/MovieListView/MovieListView';
import { MovieListResponse, MovieService } from './services/MovieService';
import IMovie from './Types/Movie.type';

function App() {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const service = new MovieService();
  useEffect(() => {
    if (searchQuery === '') {
      service.getMostPopularMovies().then((data) => setMovies(data));
    } else {
      // console.log('from App' + searchQuery);
      // debugger;
      service.getSearchedMovies(searchQuery).then((data) => setMovies(data));
    }
  }, [searchQuery]);
  console.log(movies);
  return (
    <div className="App">
      <Header setSearchQuery={setSearchQuery} />
      <div className="container">
        <MovieListView listName="Most popular movies:" movieList={movies} />
      </div>
    </div>
  );
}

export default App;
