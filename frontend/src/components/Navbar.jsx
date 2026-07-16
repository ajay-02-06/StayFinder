import { FaHome, FaSignOutAlt, FaUserCircle } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">

      <div className="flex items-center gap-2">
        <FaHome className="text-blue-600 text-2xl" />
        <h1 className="text-2xl font-bold text-blue-600">
          StayFinder
        </h1>
      </div>

      <div className="flex items-center gap-6">

        <div className="flex items-center gap-2">
          <FaUserCircle className="text-2xl text-gray-600" />
          <span className="font-medium">
            User
          </span>
        </div>

        <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg">
          Logout
        </button>

      </div>
    </nav>
  );
}

export default Navbar;