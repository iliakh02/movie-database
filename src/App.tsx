import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import Search from './components/Search/Search';
import MostPopularMovies from './components/MostPopularMovies/MostPopularMovies';
import Title from './components/Title/Title';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MostPopularMovies />} />
        <Route path="/search/:searchQuery" element={<Search />} />
        <Route path="/title/:id" element={<Title />} />
      </Routes>
    </div>
  );
};

export default App;
