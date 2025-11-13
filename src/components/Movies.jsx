import React, { useEffect, useState } from "react";
import axios from "axios";
import MoviesCard from "./MoviesCard";
import Pagination from "./Pagination";

const Movies = ({ watchList, setWatchList }) => {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=87ad155fc80ba5f4d660ab5fb47fa34f&language=en-US&page=${page}`)
      .then((res) => setMovies(res.data.results))
      .catch(console.error);
  }, [page]);

  const addToWatchList = (movie) => {
    setWatchList((prev) => {
      if (prev.some((m) => m.id === movie.id)) return prev;
      return [...prev, movie];
    });
  };

  return (
    <div className="mt-6">
      <h2 className="text-center text-2xl font-bold mb-4">Trending Movies</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {movies.map((movie) => (
          <MoviesCard key={movie.id} movie={movie} addToWatchList={addToWatchList} />
        ))}
      </div>
      <Pagination page={page} setPage={setPage} />
    </div>
  );
};

export default Movies;
