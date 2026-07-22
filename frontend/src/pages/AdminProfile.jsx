import Sidebar from "../components/admin/Sidebar";
import Topbar from "../components/admin/Topbar";

import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";

import {
  FaUserCircle,
  FaEnvelope,
  FaUserShield,
  FaCalendarAlt,
  FaBuilding,
} from "react-icons/fa";

function AdminProfile() {
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    setAdmin(auth.currentUser);
  }, []);

  return (
    <div className="flex min-h-screen bg-slate-100">

      <Sidebar />

      <div className="flex-1 overflow-x-hidden">

        <Topbar
          title="Admin Profile"
          subtitle="Manage your account"
        />

        <div className="p-4 sm:p-6 lg:p-8">

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
            👤 Admin Profile
          </h1>

          <div className="bg-white rounded-3xl shadow-xl p-5 sm:p-8 lg:p-10 max-w-5xl mx-auto">

            {/* Profile */}

            <div className="flex flex-col items-center text-center">

              {admin?.photoURL ? (
                <img
                  src={admin.photoURL}
                  alt="Profile"
                  className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover"
                />
              ) : (
                <FaUserCircle
                  className="text-blue-600"
                  size={110}
                />
              )}

              <h2 className="text-2xl sm:text-3xl font-bold mt-5">
                {admin?.displayName || "StayFinder Admin"}
              </h2>

              <p className="text-gray-500 mt-2">
                Administrator
              </p>

            </div>

            {/* Details */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">

              <ProfileItem
                icon={<FaEnvelope />}
                label="Email"
                value={admin?.email || "Not Available"}
              />

              <ProfileItem
                icon={<FaUserShield />}
                label="Role"
                value="Administrator"
              />

              <ProfileItem
                icon={<FaCalendarAlt />}
                label="Joined"
                value="July 2026"
              />

              <ProfileItem
                icon={<FaBuilding />}
                label="PGs Managed"
                value="5"
              />

            </div>

            {/* Buttons */}

            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mt-10">

              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition">
                Edit Profile
              </button>

              <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-xl transition">
                Change Password
              </button>

              <input
                type="file"
                id="profilePic"
                className="hidden"
              />

              <label
                htmlFor="profilePic"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl cursor-pointer text-center transition"
              >
                Upload Profile Picture
              </label>

            </div>

            {/* Account Information */}

            <div className="mt-10 border-t pt-8">

              <h2 className="text-xl sm:text-2xl font-bold mb-6">
                Account Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <ProfileItem
                  icon={<FaUserShield />}
                  label="UID"
                  value={admin?.uid || "Loading..."}
                />

                <ProfileItem
                  icon={<FaCalendarAlt />}
                  label="Email Verified"
                  value={
                    admin?.emailVerified
                      ? "Yes ✅"
                      : "No ❌"
                  }
                />

                <ProfileItem
                  icon={<FaCalendarAlt />}
                  label="Provider"
                  value={
                    admin?.providerData?.[0]?.providerId ||
                    "Password"
                  }
                />

                <ProfileItem
                  icon={<FaCalendarAlt />}
                  label="Last Login"
                  value={
                    admin?.metadata?.lastSignInTime ||
                    "-"
                  }
                />

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

function ProfileItem({ icon, label, value }) {
  return (
    <div className="flex items-start sm:items-center gap-4 bg-slate-50 p-5 rounded-2xl shadow-sm">

      <div className="text-blue-600 text-2xl flex-shrink-0">
        {icon}
      </div>

      <div className="min-w-0">

        <p className="text-gray-500 text-sm">
          {label}
        </p>

        <h3 className="text-base sm:text-lg font-semibold break-all">
          {value}
        </h3>

      </div>

    </div>
  );
}

export default AdminProfile;