import React, { useState } from 'react';
import './RateMovieButton.css';

const RateMovieButton = ({ movieId }) => {
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleRating = (rate) => {
    setRating(rate);
    setSubmitted(true);
  };

  return (
    <div className="rate-movie-button">
      <h3>Rate this movie:</h3>
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star} onClick={() => handleRating(star)} className={rating >= star ? 'selected' : ''}>
          ★
        </span>
      ))}
      {submitted && <p>Thank you for your feedback!</p>}
    </div>
  );
};

export default RateMovieButton;