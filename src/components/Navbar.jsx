import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo/Logo";

const Navbar = () => {
  const location = useLocation();
  const isActive = (path) =>
    location.pathname === path ? "text-yellow-400" : "text-gray-300";

  return (
    <nav className="flex gap-8 items-center px-6 py-3 bg-gray-900 shadow-md border-b border-gray-800">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <Logo />
      </div>

      {/* Nav Links */}
      <ul className="flex gap-8 font-semibold">
        <li>
          <Link
            to="/"
            className={`${isActive(
              "/"
            )} hover:text-yellow-400 transition-colors duration-200`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/watchlist"
            className={`${isActive(
              "/watchlist"
            )} hover:text-yellow-400 transition-colors duration-200`}
          >
            Watchlist
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
