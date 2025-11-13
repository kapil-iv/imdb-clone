import React from "react";
const Banner = () => (
  <div className="relative bg-[url('https://image.tmdb.org/t/p/original/6MKr3KgOLmzOP6MSuZERO41Lpkt.jpg')] bg-cover bg-center h-[60vh] flex items-end">
    <div className="bg-black/60 w-full text-white text-center py-4">
      <h1 className="text-3xl font-bold">Welcome to MovieBase</h1>
      <p className="text-gray-300">Discover and save your favorite movies!</p>
    </div>
  </div>
);
export default Banner;
