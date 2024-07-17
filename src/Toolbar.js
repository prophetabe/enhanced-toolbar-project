import React, { useState } from 'react';
import MovieSelector from './MovieSelector';
import RateMovieButton from './RateMovieButton';
import './Toolbar.css';

const Toolbar = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <div className="toolbar">
      <MovieSelector onMovieSelect={setSelectedMovie} />
      {selectedMovie && <RateMovieButton movieId={selectedMovie} />}
    </div>
  );
};

export default Toolbar;