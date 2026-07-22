import { useState } from "react";
import {
  FaChartPie,
  FaChartBar,
  FaUserShield,
  FaSignOutAlt,
  FaClipboardList,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { logoutUser } from "../../services/authService";

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);

  const logout = async () => {
    await logoutUser();
    navigate("/");
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Hamburger */}
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-slate-900 text-white p-3 rounded-lg shadow-lg"
      >
        <FaBars />
      </button>

      {/* Dark Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
        fixed lg:static
        top-0 left-0
        h-screen
        w-72
        bg-slate-900
        text-white
        flex
        flex-col
        z-50
        transition-transform
        duration-300
        ${
          isOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        }
      `}
      >
        {/* Header */}
        <div className="relative text-center py-8 border-b border-slate-700">
          {/* Close Button */}
          <button
            onClick={closeMenu}
            className="absolute right-5 top-5 lg:hidden text-2xl"
          >
            <FaTimes />
          </button>

          <h1 className="text-3xl font-bold">
            🏠 StayFinder
          </h1>

          <p className="text-slate-400 mt-2">
            Admin Panel
          </p>
        </div>

        {/* Navigation */}
        <div className="flex-1 mt-8 space-y-3 px-5">

          <button
            onClick={() => {
              navigate("/admin/dashboard");
              closeMenu();
            }}
            className={`flex items-center gap-4 w-full p-4 rounded-xl transition ${
              location.pathname === "/admin/dashboard"
                ? "bg-blue-600"
                : "hover:bg-slate-800"
            }`}
          >
            <FaChartPie />
            Dashboard
          </button>

          <button
            onClick={() => {
              navigate("/admin/analytics");
              closeMenu();
            }}
            className={`flex items-center gap-4 w-full p-4 rounded-xl transition ${
              location.pathname === "/admin/analytics"
                ? "bg-blue-600"
                : "hover:bg-slate-800"
            }`}
          >
            <FaChartBar />
            Analytics
          </button>

          <Link
            to="/admin/requests"
            onClick={closeMenu}
            className={`flex items-center gap-4 w-full p-4 rounded-xl transition ${
              location.pathname === "/admin/requests"
                ? "bg-blue-600"
                : "hover:bg-slate-800"
            }`}
          >
            <FaClipboardList />
            PG Requests
          </Link>

          <button
            onClick={() => {
              navigate("/admin/profile");
              closeMenu();
            }}
            className={`flex items-center gap-4 w-full p-4 rounded-xl transition ${
              location.pathname === "/admin/profile"
                ? "bg-blue-600"
                : "hover:bg-slate-800"
            }`}
          >
            <FaUserShield />
            Admin Profile
          </button>
        </div>

        {/* Logout */}
        <div className="p-5 border-t border-slate-700">
          <button
            onClick={logout}
            className="flex items-center justify-center gap-3 w-full bg-red-600 hover:bg-red-700 py-3 rounded-xl transition"
          >
            <FaSignOutAlt />
            Logout
          </button>
        </div>
      </div>
    </>
  );
}

export default Sidebar;