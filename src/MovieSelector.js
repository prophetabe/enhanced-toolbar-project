import React, { useState, useEffect } from 'react';
import './MovieSelector.css';

const MovieSelector = ({ onMovieSelect }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies([{ id: 1, title: 'Transformers' }, { id: 2, title: 'Sonic The Hedgehog' }]);
  }, []);

  return (
    <select onChange={(e) => onMovieSelect(e.target.value)} className="movie-selector">
      {movies.map((movie) => (
        <option key={movie.id} value={movie.id}>
          {movie.title}
        </option>
      ))}
    </select>
  );
};

export default MovieSelector;