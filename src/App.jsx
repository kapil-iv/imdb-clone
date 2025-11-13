import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import WatchList from "./components/WatchList";
import Banner from "./components/Banner";

const App = () => {
  const [watchList, setWatchList] = useState([]);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("Movies");
    if (saved) setWatchList(JSON.parse(saved));
  }, []);

  // Save to localStorage whenever list changes
  useEffect(() => {
    localStorage.setItem("Movies", JSON.stringify(watchList));
  }, [watchList]);

  return (
    <Router>
      <div className="bg-dark-charcoal min-h-screen text-white">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<>
              <Banner />
              <Movies watchList={watchList} setWatchList={setWatchList} />
            </>}
          />
          <Route
            path="/watchlist"
            element={<WatchList watchList={watchList} setWatchList={setWatchList} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
