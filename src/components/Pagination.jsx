import React from "react";

const Pagination = ({ page, setPage }) => (
  <div className="flex justify-center gap-4 my-6">
    <button
      onClick={() => setPage((p) => Math.max(1, p - 1))}
      className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-md"
    >
      Prev
    </button>
    <span className="text-lg">{page}</span>
    <button
      onClick={() => setPage((p) => Math.min(5, p + 1))}
      className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-md"
    >
      Next
    </button>
  </div>
);

export default Pagination;
