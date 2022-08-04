import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import MovieListView from './components/MovieListView/MovieListView';
import { MovieListResponse, MovieService } from './services/MovieService';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IMovie from './Types/Movie.type';
import Search from './components/Search/Search';
import MostPopularMovies from './components/MostPopularMovies/MostPopularMovies';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<MostPopularMovies />} />
          <Route path="/search/:searchQuery" element={<Search />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
