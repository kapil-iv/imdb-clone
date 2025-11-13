import React, { useState, useMemo } from "react";

const GENRES = {
  28: "Action",
  12: "Adventure",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  18: "Drama",
  14: "Fantasy",
  27: "Horror",
  10749: "Romance",
  878: "Sci-Fi",
  53: "Thriller",
};

const WatchList = ({ watchList, setWatchList }) => {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return watchList.filter((movie) =>
      movie.original_title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, watchList]);

  const handleDelete = (id) => {
    setWatchList((prev) => prev.filter((movie) => movie.id !== id));
  };

  return (
    <div className="px-6 py-8">
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search movie..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="h-12 w-[18rem] px-4 rounded-lg bg-gray-200 outline-none focus:ring-2 focus:ring-blue-400 text-black"
        />
      </div>

      <div className="flex justify-center">
        <table className="w-[80%] border-collapse text-center bg-gray-800 text-white rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-700 text-gray-200">
              <th className="p-3 border">Poster</th>
              <th className="p-3 border">Name</th>
              <th className="p-3 border">Rating</th>
              <th className="p-3 border">Popularity</th>
              <th className="p-3 border">Genres</th>
              <th className="p-3 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length > 0 ? (
              filtered.map((movie) => (
                <tr key={movie.id} className="hover:bg-gray-700">
                  <td className="p-3 border">
                    <img
                      src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                      alt={movie.original_title}
                      className="w-16 rounded-md mx-auto"
                    />
                  </td>
                  <td className="p-3 border">{movie.original_title}</td>
                  <td className="p-3 border">{movie.vote_average?.toFixed(1)}</td>
                  <td className="p-3 border">{movie.popularity?.toFixed(1)}</td>
                  <td className="p-3 border">
                    {movie.genre_ids
                      ?.map((id) => GENRES[id])
                      .filter(Boolean)
                      .join(", ") || "N/A"}
                  </td>
                  <td className="p-3 border">
                    <button
                      onClick={() => handleDelete(movie.id)}
                      className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded-md text-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="p-4 text-gray-400">
                  No movies found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WatchList;
