import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import MovieListView from './components/MovieListView/MovieListView';
import { MovieListResponse, MovieService } from './services/MovieService';
import IMovie from './Types/Movie.type';

function App() {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const service = new MovieService();
  useEffect(() => {
    service.getMostPopularMovies().then((data) => setMovies(data));
  }, []);
  console.log(movies);
  return (
    <div className="App">
      <Header />
      <div className="container">
        <MovieListView listName="Most popular movies:" movieList={movies} />
      </div>
    </div>
  );
}

export default App;
