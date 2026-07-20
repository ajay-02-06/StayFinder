import {
  FaChartPie,
  FaBuilding,
  FaChartBar,
  FaUserShield,
  FaSignOutAlt,
  FaClipboardList,
} from "react-icons/fa";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { logoutUser } from "../../services/authService";

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const logout = async () => {
    await logoutUser();
    navigate("/admin/login");
  };

  return (
    <div className="w-72 bg-slate-900 text-white min-h-screen flex flex-col">

      <div className="text-center py-8 border-b border-slate-700">

        <h1 className="text-3xl font-bold">
          🏠 StayFinder
        </h1>

        <p className="text-slate-400 mt-2">
          Admin Panel
        </p>

      </div>

      <div className="flex-1 mt-8 space-y-3 px-5">
<button
  onClick={() => navigate("/admin/dashboard")}
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
  onClick={() => navigate("/admin/analytics")}
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
  onClick={() => navigate("/admin/profile")}
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

      <div className="p-5 border-t border-slate-700">

        <button
          onClick={logout}
          className="flex items-center justify-center gap-3 w-full bg-red-600 hover:bg-red-700 py-3 rounded-xl"
        >
          <FaSignOutAlt />
          Logout
        </button>

      </div>

    </div>
  );
}

export default Sidebar;