import React from "react";
import "./logo.css";

const Logo = () => {
  return (
        <div className="flex flex-col items-center w-fit bg-dark-charcoal sm:p-0.5 rounded-xl shadow-2xl border-2 border-gray-800 transition-all duration-300 transform hover:scale-[1.02]">
          <div className="bg-yellow-500 p-0.5 rounded-lg inline-block">
            <h1 className="text-md sm:text-sm font-black text-gray-900 flex items-center font-impact">
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-gray-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 9a2 2 0 012-2h.93a2 2 0 001.664.89l.814.288a2 2 0 001.664-.89H17a2 2 0 012 2v.46A2 2 0 0021 12a2 2 0 00-2-2h-.46a2 2 0 00-1.664-.89l-.814-.288a2 2 0 00-1.664.89H7a2 2 0 00-1.664.89l-.814.288a2 2 0 00-1.664-.89H3V9z"
                ></path>
                <circle
                  cx="12"
                  cy="12"
                  r="8"
                  className="text-gray-900"
                  strokeWidth="2"
                ></circle>
                <circle
                  cx="12"
                  cy="12"
                  r="4"
                  className="text-gray-900"
                  strokeWidth="2"
                ></circle>
              </svg>
              FB
            </h1>
          </div>
          <p className="text-center text-[12px] text-gray-400 mt-0.5 tracking-wider">
            FilmBase
          </p>
        </div>
  );
};

export default Logo;
