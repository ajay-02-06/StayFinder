import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../services/authService";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const logout = async () => {
    try {
      await logoutUser();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-md border-b">

      <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">

        <Link
          to="/dashboard"
          className="text-2xl md:text-3xl font-bold text-blue-600"
        >
          🏠 StayFinder
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4">

          <Link
            to="/dashboard"
            className="px-4 py-2 rounded-lg hover:bg-gray-100 transition"
          >
            Dashboard
          </Link>

          <Link
            to="/wishlist"
            className="hover:text-blue-600 transition"
          >
            ❤️ Wishlist
          </Link>

          <Link
            to="/become-host"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition"
          >
            Become a Host
          </Link>

          <button
            onClick={logout}
            className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg transition"
          >
            Logout
          </button>

        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-blue-600"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">

          <Link
            to="/dashboard"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 hover:bg-gray-100"
          >
            Dashboard
          </Link>

          <Link
            to="/wishlist"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 hover:bg-gray-100"
          >
            ❤️ Wishlist
          </Link>

          <Link
            to="/become-host"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 hover:bg-gray-100"
          >
            Become a Host
          </Link>

          <button
            onClick={() => {
              setMenuOpen(false);
              logout();
            }}
            className="w-full text-left px-6 py-4 text-red-600 hover:bg-red-50"
          >
            Logout
          </button>

        </div>
      )}

    </nav>
  );
}

export default Navbar;