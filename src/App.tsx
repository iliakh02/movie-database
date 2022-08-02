import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import MovieListView from './components/MovieListView/MovieListView';
import { MovieResponse, MovieService } from './services/MovieService';
import IMovie from './Types/Movie.type';

function App() {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const service = new MovieService();
  useEffect(() => {
    service.getTop250Movies().then((data) => setMovies(data.Movies));
  }, []);
  console.log(movies);
  return (
    <div className="App">
      <Header />
      <div className="container">
        <MovieListView
          listName="Top 250 movies of all time:"
          movieList={movies}
        />
      </div>
    </div>
  );
}

export default App;
