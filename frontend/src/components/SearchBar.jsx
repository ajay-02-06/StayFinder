import { useState } from "react";
import { FaSearch } from "react-icons/fa";

function SearchBar({ onSearch }) {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="bg-white p-5 rounded-2xl shadow-lg">

      <div className="flex flex-col md:flex-row gap-4">

        <div className="relative flex-1">

          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

          <input
            type="text"
            placeholder="Search by PG name or location..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              onSearch(e.target.value);
            }}
            className="w-full border border-gray-300 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

        </div>

        <button
          onClick={() => onSearch(searchText)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl transition font-semibold"
        >
          Search
        </button>

      </div>

    </div>
  );
}

export default SearchBar;