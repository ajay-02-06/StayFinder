import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../services/authService";

function Navbar() {
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await logoutUser();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">

        <Link
          to="/dashboard"
          className="text-3xl font-bold text-blue-600"
        >
          🏠 StayFinder
        </Link>

        <div className="flex items-center gap-4">
<Link
  to="/dashboard"
  className="px-5 py-2 rounded-lg hover:bg-gray-100 transition"
>
  Dashboard
</Link>

<Link
  to="/wishlist"
  className="hover:text-blue-600"
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

      </div>
    </nav>
  );
}

export default Navbar;