import React from "react";
import "./reviews.css";

const Review = ({ review }) => {
  const generateStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push("⭐"); // Unicode star character
    }
    return stars;
  };

  return (
    <div className="review">
      <div className="author-image">
        {review.authorImage && (
          <img src={review.authorImage} alt={`showing ${review.author}`} />
        )}
      </div>
      <p>{review.comment}</p>
      <p className="rating">{generateStars(review.rating).join(" ")}</p>
      <p className="review-author-name">{review.author}</p>
      <p className="review-author-occupation">{review.occupation}</p>
    </div>
  );
};

export default Review;
