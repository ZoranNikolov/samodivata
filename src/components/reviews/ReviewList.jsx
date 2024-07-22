import React from 'react';
import SingleReview from './SingleReview';

const ReviewList = ({ reviews }) => {
  return (
    <div className="review-list">
      {reviews.map((review, index) => (
        <SingleReview key={index} review={review} />
      ))}
    </div>
  );
};

export default ReviewList;