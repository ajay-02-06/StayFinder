function Topbar({
  onAdd,
  showAddButton = false,
  title = "Admin Dashboard",
  subtitle = "Manage StayFinder PG Listings",
}) {
  return (
    <div className="bg-white shadow-sm px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">

      {/* Title Section */}
      <div className="mt-12 lg:mt-0">
        <h1 className="text-2xl sm:text-3xl font-bold break-words">
          {title}
        </h1>

        <p className="text-gray-500 text-sm sm:text-base mt-1">
          {subtitle}
        </p>
      </div>

      {/* Add Button */}
      {showAddButton && (
        <button
          onClick={onAdd}
          className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold shadow transition"
        >
          + Add New PG
        </button>
      )}

    </div>
  );
}

export default Topbar;