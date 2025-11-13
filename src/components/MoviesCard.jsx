import React, { useEffect, useState } from "react";

const MoviesCard = ({ movie, addToWatchList }) => {
  const [isAdded, setIsAdded] = useState(false);

  // On mount, check if movie was already added
  useEffect(() => {
    const stored = localStorage.getItem(`added_${movie.id}`);
    if (stored === "true") setIsAdded(true);
  }, [movie.id]);

  // When added, store it persistently
  function handleAdded() {
    addToWatchList(movie);
    setIsAdded(true);
    localStorage.setItem(`added_${movie.id}`, "true");
  }

  return (
    <div className="grid grid-flow-row grid-row-1 bg-gray-900 rounded-lg overflow-hidden shadow-lg w-52 text-center hover:scale-105 transition-transform duration-200">
      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={movie.original_title}
        className="w-full h-72 object-cover"
      />
      <div className="p-3 flex flex-col justify-between">
        <h3 className="text-lg font-semibold text-white">
          {movie.original_title}
        </h3>

        <button
          onClick={handleAdded}
          disabled={isAdded}
          className={`mt-3 w-full py-2 rounded-lg font-semibold transition-colors duration-200 ${
            isAdded
              ? "bg-gray-500 cursor-not-allowed text-gray-300"
              : "bg-yellow-500 hover:bg-yellow-400 text-gray-900"
          }`}
        >
          {isAdded ? "Added" : "Add to Watchlist"}
        </button>
      </div>
    </div>
  );
};

export default MoviesCard;
