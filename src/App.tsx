import React, { Suspense } from 'react';
import './App.css';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import Search from './pages/Search/Search';
import MostPopularMovies from './pages/MostPopularMovies/MostPopularMovies';
import Title from './pages/Title/Title';
import InTheatersMovies from './pages/InTheatersMovies/InTheatersMovies';
import Top250 from './pages/Top250/Top250';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MostPopularMovies />} />
        <Route
          path="/inTheaters"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <InTheatersMovies />
            </Suspense>
          }
        />
        <Route
          path="/top250"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Top250 />
            </Suspense>
          }
        />
        <Route
          path="/search/:searchQuery"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Search />
            </Suspense>
          }
        />
        <Route
          path="/title/:id"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Title />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
