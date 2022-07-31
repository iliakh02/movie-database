import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import { MovieResponse, MovieService } from './services/MovieService';
import IMovie from './Types/Movie.type';

function App() {
  const [movies, setMovies] = useState([] as IMovie[]);
  const service = new MovieService();
  let dataResponse: MovieResponse;
  useEffect(() => {
    const getTop250Movies = async () => {
      const data = await service.getTop250Movies();
      setMovies(data.Movies);
    };

    getTop250Movies().catch(console.error);
  });

  return (
    <div className="App">
      <Header />
      <div className="container"></div>
    </div>
  );
}

export default App;
