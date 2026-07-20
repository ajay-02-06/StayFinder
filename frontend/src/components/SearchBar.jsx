import { useState } from "react";

function SearchBar({ onSearch }) {
  const [searchText, setSearchText] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleSearch = (text, price) => {
    onSearch(text, price);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md flex gap-4">

      <input
        type="text"
        placeholder="Search by PG Name or Location..."
        value={searchText}
        onChange={(e) => {
          const value = e.target.value;
          setSearchText(value);
          handleSearch(value, maxPrice);
        }}
        className="flex-1 border rounded-lg p-3"
      />

      <input
        type="number"
        placeholder="Max Price"
        value={maxPrice}
        onChange={(e) => {
          const value = e.target.value;
          setMaxPrice(value);
          handleSearch(searchText, value);
        }}
        className="w-48 border rounded-lg p-3"
      />

    </div>
  );
}

export default SearchBar;