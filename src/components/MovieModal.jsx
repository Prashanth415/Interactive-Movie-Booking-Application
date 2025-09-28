import React from "react";
import StarRating from "./StarRating";
import "./MovieModal.css";

export default function MovieModal({ selectedMovie, setSelectedMovie, theme }) {
  return (
    <div onClick={() => setSelectedMovie(null)} className="modal-overlay">
      <div
        className={`modal-content ${theme}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setSelectedMovie(null)}
          className={`modal-close ${theme}`}
        >
          &times;
        </button>

        <h2 className={`modal-title ${theme}`}>{selectedMovie.title}</h2>

        <img
          src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`}
          alt={selectedMovie.title}
          className="modal-poster"
        />

        <StarRating rating={selectedMovie.vote_average} />

        <p className={`modal-release ${theme}`}>
          <span className="modal-label">Release date:</span>{" "}
          {selectedMovie.release_date}
        </p>

        <div className={`modal-overview ${theme}`}>
          {selectedMovie.overview || "No overview available."}
        </div>
      </div>
    </div>
  );
}