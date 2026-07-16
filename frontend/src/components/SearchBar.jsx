function SearchBar() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md flex gap-4">

      <input
        type="text"
        placeholder="Search by Location..."
        className="flex-1 border rounded-lg p-3"
      />

      <input
        type="number"
        placeholder="Max Price"
        className="w-48 border rounded-lg p-3"
      />

      <button className="bg-blue-600 text-white px-6 rounded-lg hover:bg-blue-700">
        Search
      </button>

    </div>
  );
}

export default SearchBar;