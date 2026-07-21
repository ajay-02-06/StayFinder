function Topbar({ onAdd, showAddButton = false, title = "Admin Dashboard", subtitle = "Manage StayFinder PG Listings" }) {
  return (
    <div className="bg-white shadow-sm px-8 py-5 flex justify-between items-center">

      <div>
        <h1 className="text-3xl font-bold">
          {title}
        </h1>

        <p className="text-gray-500">
          {subtitle}
        </p>
      </div>

      {showAddButton && (
        <button
          onClick={onAdd}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold shadow"
        >
          + Add New PG
        </button>
      )}

    </div>
  );
}

export default Topbar;