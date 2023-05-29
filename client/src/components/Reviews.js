import React, { useEffect, useState } from "react";
import StarRating from "./StarRating";
import { fetchRating } from "../http/gameAPI";

const Reviews = ({ gameId }) => {
  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchRating(gameId);
        setRatings(data)
      } catch (error) {
        console.error('Error fetching ratings:', error)
      }
    }

    fetchData()
  }, [gameId])
  return (
    <div style={{ display: "flex", flexDirection: "column-reverse" }}>
      {ratings.map((rating) => (
        <div
          key={rating.id}
          className="card text-bg-light mb-3 mr-4"
          style={{ maxWidth: "100%" }}
        >
          <div className="card-header d-flex justify-content-between">
            <span>{rating.name}</span>
            <span>
              <StarRating rating={rating.rate} />
            </span>
          </div>
          <div className="card-body" style={{ whiteSpace: "pre-line"}}>
            <p 
            className="card-text"
            >
              {rating.review}
            </p>
          </div>
        </div>
      ))
      }
    </div>
  );
};

export default Reviews