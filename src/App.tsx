import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import Search from './components/Search/Search';
import MostPopularMovies from './components/MostPopularMovies/MostPopularMovies';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MostPopularMovies />} />
        <Route path="/search/:searchQuery" element={<Search />} />
      </Routes>
    </div>
  );
};

export default App;
