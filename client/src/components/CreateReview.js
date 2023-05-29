import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { createRating } from "../http/gameAPI";

const CreateReview = () => {
  const { id } = useParams();

  const [name, setName] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [rate, setRate] = useState("Rating");

  const addReview = async (e) => {
    e.preventDefault();

    if (rate === "Rating") {
      console.error("Выберите рейтинг");
      return;
    }
    if (name === "") {
      console.error("Напишите своё имя");
      return;
    }
    if (reviewText === "") {
      console.error("Напишите свой отзыв");
      return;
    }

    // Заменить переносы строк на символы \n
    const processedReviewText = reviewText.replace(/\n/g, "\\n");

    try {
      await createRating({
        name: name,
        review: processedReviewText,
        rate: parseInt(rate),
        gameId: id,
      });
    } catch (error) {
      console.error("Ошибка при создании рейтинга:", error);
    }
  };

  // Обратно заменить символы \n на переносы строк
  const displayedReviewText = reviewText.replace(/\\n/g, "\n");

  return (
    <div className="mb-2">
      <form onSubmit={addReview}>
        <div className="form-row">
          <div className="form-group col-8">
            <label htmlFor="name">Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="name"
              placeholder="name"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group col-4">
            <label htmlFor="rating">Rating</label>
            <select
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              id="rating"
              className="custom-select"
            >
              <option disabled>Rating</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="Review">Review</label>
          <textarea
            type="submit"
            value={displayedReviewText}
            onChange={(e) => setReviewText(e.target.value)}
            id="Review"
            className="form-control"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateReview;
