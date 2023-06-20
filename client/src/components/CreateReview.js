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
      console.error("Выберите рейтинг")
      window.alert("Выберите рейтинг")
      return
    }
    if (name === "") {
      console.error("Напишите своё имя")
      window.alert("Напишите своё имя")
      return
    }
    if (reviewText === "") {
      console.error("Напишите свой отзыв")
      window.alert("Напишите свой отзыв")
      return
    }

    try {
      await createRating({
        name: name,
        review: reviewText,
        rate: parseInt(rate),
        gameId: id,
      })
      window.location.reload()
    } catch (error) {
      console.error("Ошибка при создании рейтинга:", error)
    }
  };

  return (
    <div>
      <form action="">
        <div className="form-row">
          <div className="form-group col-8 mb-3">
            <label className="mb-3" htmlFor="name">Имя:</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="name"
              placeholder="Имя..."
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group col-4">
            <select
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              id="rating"
              className="custom-select mb-3"
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
        <div className="form-group ">
          <label className="mb-3" htmlFor="Review">Отзыв:</label>
          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            id="Review"
            className="form-control mb-3"
          ></textarea>
        </div>
        <button
          type="submit"
          onClick={addReview}
          className="btn btn-dark mb-3"
        >
          Отправить
        </button>
      </form>
    </div>
  );
};

export default CreateReview;
