import { Routes, Route } from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute";
import AdminRoute from "./components/AdminRoute";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import PGDetails from "./pages/PGDetails";
import Wishlist from "./pages/Wishlist";
import BecomeHost from "./pages/BecomeHost";

import AdminDashboard from "./pages/AdminDashboard";
import Analytics from "./pages/Analytics";
import AdminProfile from "./pages/AdminProfile";
import AdminRequests from "./pages/AdminRequests";

function App() {
  return (
    <Routes>
      {/* Authentication */}
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* User Routes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/wishlist"
        element={
          <ProtectedRoute>
            <Wishlist />
          </ProtectedRoute>
        }
      />

      <Route
        path="/become-host"
        element={
          <ProtectedRoute>
            <BecomeHost />
          </ProtectedRoute>
        }
      />

      <Route
        path="/pg/:id"
        element={
          <ProtectedRoute>
            <PGDetails />
          </ProtectedRoute>
        }
      />

      {/* Admin Routes */}
      <Route
        path="/admin/dashboard"
        element={
          <AdminRoute>
            <AdminDashboard />
          </AdminRoute>
        }
      />

      <Route
        path="/admin/analytics"
        element={
          <AdminRoute>
            <Analytics />
          </AdminRoute>
        }
      />

      <Route
        path="/admin/profile"
        element={
          <AdminRoute>
            <AdminProfile />
          </AdminRoute>
        }
      />

      <Route
        path="/admin/requests"
        element={
          <AdminRoute>
            <AdminRequests />
          </AdminRoute>
        }
      />
    </Routes>
  );
}

export default App;